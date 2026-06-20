import React, { useState } from 'react'

export default function RemindersView({ properties, reminders, onAddReminder, onToggleReminder, onDeleteReminder }) {
  const [showAddModal, setShowAddModal] = useState(false)
  const [filterCategory, setFilterCategory] = useState('All')
  
  // Form states
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [category, setCategory] = useState('Maintenance')
  const [propertyId, setPropertyId] = useState('General')

  const handleAddReminder = async (e) => {
    e.preventDefault()
    if (!title || !date) return

    const matchedProp = properties.find(p => p.id.toString() === propertyId.toString())
    const propertyAddress = matchedProp ? matchedProp.address : "General Admin"

    const remData = {
      title,
      date,
      priority,
      category,
      propertyId,
      propertyName: propertyAddress
    }

    await onAddReminder(remData)
    setShowAddModal(false)

    // Reset Form
    setTitle('')
    setDate('')
    setPriority('Medium')
    setCategory('Maintenance')
    setPropertyId('General')
  }

  const handleToggleComplete = (id) => {
    onToggleReminder(id)
  }

  const handleDeleteReminder = (id) => {
    onDeleteReminder(id)
  }

  // Filter reminders
  const filteredReminders = reminders.filter(r => {
    if (filterCategory === 'All') return true
    return r.category === filterCategory
  })

  // Sort: uncompleted first, then by date ascending
  const sortedReminders = [...filteredReminders].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    return new Date(a.date) - new Date(b.date)
  })

  // Count metrics
  const activeCount = reminders.filter(r => r.completed === 0 || r.completed === false).length
  const highPriorityCount = reminders.filter(r => (r.completed === 0 || r.completed === false) && r.priority === 'High').length
  
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Rent': return 'badge-success'
      case 'Maintenance': return 'badge-primary'
      case 'Lease': return 'badge-info'
      case 'Tax': return 'badge-warning'
      case 'Compliance': return 'badge-danger'
      default: return 'badge-secondary'
    }
  }

  return (
    <div className="reminders-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1 className="view-title text-gradient">Reminders & Tasks</h1>
          <p className="view-description">Set and follow up on critical items, including lease endpoints, tax milestones, and certifications.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Reminder
        </button>
      </div>

      {/* Reminder Alerts Banner */}
      {activeCount > 0 && (
        <div className="reminders-alert-banner glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="pulse-indicator"></span>
            <div>
              <h4 style={{ fontSize: '0.95rem' }}>You have {activeCount} outstanding landlord tasks.</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.1rem' }}>
                {highPriorityCount > 0 
                  ? `Urgent attention required: ${highPriorityCount} high-priority tasks remain incomplete.` 
                  : "All high-priority items are currently up-to-date."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Task Filters */}
      <div className="filters-row">
        <div className="category-tabs">
          {['All', 'Rent', 'Maintenance', 'Lease', 'Tax', 'Compliance'].map(cat => (
            <button
              key={cat}
              className={`filter-tab ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Reminders List */}
      <div className="reminders-list-container">
        {sortedReminders.length === 0 ? (
          <div className="empty-reminders-state glass-card">
            <span style={{ fontSize: '2.5rem' }}>🔔</span>
            <h4 style={{ marginTop: '0.5rem' }}>No reminders found</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Change your filter settings or record a new reminder for future inspection schedules.</p>
          </div>
        ) : (
          <div className="reminders-stack">
            {sortedReminders.map(rem => {
              const isOverdue = (rem.completed === 0 || rem.completed === false) && new Date(rem.date) < new Date()
              const isChecked = rem.completed === 1 || rem.completed === true
              
              return (
                <div key={rem.id} className={`reminder-row glass-card ${isChecked ? 'completed-row' : ''} ${isOverdue ? 'overdue-row' : ''}`}>
                  <div className="checkbox-col">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleComplete(rem.id)}
                      className="task-checkbox"
                      id={`rem-${rem.id}`}
                    />
                    <label htmlFor={`rem-${rem.id}`} className="checkbox-visual">
                      {isChecked && "✓"}
                    </label>
                  </div>

                  <div className="details-col">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className={`badge ${getCategoryColor(rem.category)}`}>{rem.category}</span>
                      <span className={`priority-indicator prio-${rem.priority.toLowerCase()}`}>{rem.priority} Priority</span>
                      {isOverdue && <span className="badge badge-danger">OVERDUE</span>}
                    </div>
                    <h4 className="reminder-title">{rem.title}</h4>
                    <div className="reminder-meta">
                      <span>📍 {rem.propertyName}</span>
                      <span>•</span>
                      <span className={isOverdue ? 'text-danger font-bold' : ''}>📅 Due: {new Date(rem.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="actions-col">
                    <button className="btn btn-secondary btn-sm delete-task-btn" onClick={() => handleDeleteReminder(rem.id)}>
                      🗑️
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Add Reminder Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            <h3 className="modal-title">Create Task Reminder</h3>
            <p className="modal-subtitle">Schedule a new operational follow-up for your properties.</p>

            <form onSubmit={handleAddReminder} style={{ marginTop: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Task Description *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Inspect fire alarm, File schedule E taxes"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Associate with Property</label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="form-select"
                >
                  <option value="General">General / Portfolio Administration</option>
                  {properties.map(p => (
                    <option key={p.id} value={p.id}>{p.address}</option>
                  ))}
                </select>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
                    <option value="Rent">Rent Collection</option>
                    <option value="Maintenance">Maintenance / Repairs</option>
                    <option value="Lease">Lease Renewal</option>
                    <option value="Tax">Accounting & Taxes</option>
                    <option value="Compliance">Legal & Compliance</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Priority Level</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value)} className="form-select">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Due Date *</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1.5 }}>
                  Set Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .reminders-alert-banner {
          background: linear-gradient(135deg, rgba(229, 62, 62, 0.08) 0%, rgba(18, 24, 38, 0.6) 100%);
          border-color: rgba(229, 62, 62, 0.25);
          padding: 1rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .filters-row {
          margin-bottom: 1.5rem;
        }

        .category-tabs {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .filter-tab {
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .filter-tab:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .filter-tab.active {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }

        .reminders-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .reminder-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.2rem 1.5rem;
          background: var(--bg-card);
          transition: all var(--transition-fast);
        }

        .reminder-row:hover {
          transform: translateX(4px);
        }

        .completed-row {
          opacity: 0.55;
          border-left: 3px solid rgba(255, 255, 255, 0.2);
        }

        .completed-row .reminder-title {
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .overdue-row {
          border-left: 3px solid var(--color-danger);
          background: linear-gradient(90deg, rgba(229, 62, 62, 0.03) 0%, var(--bg-card) 100%);
        }

        .checkbox-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .task-checkbox {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkbox-visual {
          width: 22px;
          height: 22px;
          border: 2px solid var(--border-color);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--color-success);
          font-weight: bold;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
          background: rgba(0,0,0,0.1);
        }

        .task-checkbox:checked + .checkbox-visual {
          border-color: var(--color-success);
          background: var(--color-success-light);
        }

        .details-col {
          flex: 1;
        }

        .priority-indicator {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .prio-high { color: var(--color-danger); }
        .prio-medium { color: var(--color-warning); }
        .prio-low { color: var(--color-info); }

        .reminder-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0.35rem 0 0.15rem;
        }

        .reminder-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .text-danger {
          color: var(--color-danger) !important;
        }

        .font-bold {
          font-weight: 700;
        }

        .delete-task-btn {
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .reminder-row:hover .delete-task-btn {
          opacity: 1;
        }

        .empty-reminders-state {
          text-align: center;
          padding: 3.5rem;
        }

        @media (max-width: 768px) {
          .reminder-row {
            padding: 1rem;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .delete-task-btn {
            opacity: 1;
          }
        }
      `}} />
    </div>
  )
}
