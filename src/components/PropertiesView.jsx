import React, { useState } from 'react'

export default function PropertiesView({ properties, onAddProperty, onUpdateProperty, onDeleteProperty }) {
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  
  // Form States
  const [address, setAddress] = useState('')
  const [type, setType] = useState('Single Family')
  const [rent, setRent] = useState('')
  const [tenantName, setTenantName] = useState('')
  const [tenantEmail, setTenantEmail] = useState('')
  const [leaseStart, setLeaseStart] = useState('')
  const [leaseEnd, setLeaseEnd] = useState('')
  const [status, setStatus] = useState('Occupied')

  const resetForm = () => {
    setAddress('')
    setType('Single Family')
    setRent('')
    setTenantName('')
    setTenantEmail('')
    setLeaseStart('')
    setLeaseEnd('')
    setStatus('Occupied')
    setEditingProperty(null)
  }

  const handleAddProperty = async (e) => {
    e.preventDefault()
    if (!address || !rent) return

    const propData = {
      address,
      type,
      rent: parseFloat(rent),
      tenantName: tenantName || 'Vacant',
      tenantEmail: tenantEmail || '-',
      leaseStart: leaseStart || '',
      leaseEnd: leaseEnd || '',
      status: tenantName ? status : 'Vacant'
    }

    await onAddProperty(propData)
    setShowAddModal(false)
    resetForm()
  }

  const handleStartEdit = (prop) => {
    setEditingProperty(prop)
    setAddress(prop.address)
    setType(prop.type)
    setRent(prop.rent)
    setTenantName(prop.tenantName === 'Vacant' ? '' : prop.tenantName)
    setTenantEmail(prop.tenantEmail === '-' ? '' : prop.tenantEmail)
    setLeaseStart(prop.leaseStart || '')
    setLeaseEnd(prop.leaseEnd || '')
    setStatus(prop.status)
  }

  const handleUpdateProperty = async (e) => {
    e.preventDefault()
    if (!address || !rent) return

    const propData = {
      address,
      type,
      rent: parseFloat(rent),
      tenantName: tenantName || 'Vacant',
      tenantEmail: tenantEmail || '-',
      leaseStart: leaseStart || '',
      leaseEnd: leaseEnd || '',
      status: tenantName ? status : 'Vacant'
    }

    await onUpdateProperty(editingProperty.id, propData)
    resetForm()
  }

  const handleDeleteProperty = (id) => {
    if (confirm("Are you sure you want to remove this property? All associated tenant tracking will be cleared.")) {
      onDeleteProperty(id)
    }
  }

  // Calculate lease progress percentage
  const calculateLeaseProgress = (startStr, endStr) => {
    if (!startStr || !endStr) return 0
    const start = new Date(startStr).getTime()
    const end = new Date(endStr).getTime()
    const now = Date.now()

    if (now < start) return 0
    if (now > end) return 100

    const total = end - start
    const elapsed = now - start
    return Math.round((elapsed / total) * 100)
  }

  return (
    <div className="properties-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1 className="view-title text-gradient">Rental Properties</h1>
          <p className="view-description">Manage your portfolios, monitor lease terms, and check active occupancy statuses.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Property
        </button>
      </div>

      {properties.length === 0 ? (
        <div className="empty-properties-state glass-card">
          <div className="empty-icon">🏠</div>
          <h3>No properties added yet</h3>
          <p>Get started by adding your first rental unit to track rents, tenant timelines, and service requests.</p>
          <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>Add Property Now</button>
        </div>
      ) : (
        <div className="grid-3">
          {properties.map((prop) => {
            const progress = calculateLeaseProgress(prop.leaseStart, prop.leaseEnd)
            const statusClass = 
              prop.status === 'Occupied' ? 'badge-success' :
              prop.status === 'Maintenance' ? 'badge-warning' : 'badge-danger'

            return (
              <div key={prop.id} className="property-card glass-card">
                <div className="prop-card-header">
                  <span className="property-type-tag">{prop.type}</span>
                  <span className={`badge ${statusClass}`}>{prop.status}</span>
                </div>
                
                <h3 className="property-address">{prop.address}</h3>
                
                <div className="rent-ticker">
                  <span className="rent-amount">${prop.rent.toLocaleString()}</span>
                  <span className="rent-period">/ month</span>
                </div>

                <div className="prop-divider"></div>

                <div className="tenant-details">
                  <div className="details-row">
                    <span className="detail-lbl">Tenant:</span>
                    <span className="detail-val">{prop.tenantName}</span>
                  </div>
                  {prop.tenantName !== 'Vacant' && (
                    <>
                      <div className="details-row">
                        <span className="detail-lbl">Contact:</span>
                        <span className="detail-val email-val">{prop.tenantEmail}</span>
                      </div>
                      <div className="details-row" style={{ marginTop: '0.5rem' }}>
                        <span className="detail-lbl">Lease Term:</span>
                        <span className="detail-val">{prop.leaseStart} to {prop.leaseEnd}</span>
                      </div>
                      
                      <div className="lease-progress-container">
                        <div className="progress-labels">
                          <span>Lease Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="progress-bar-track">
                          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="card-actions">
                  <button className="btn btn-secondary btn-sm" style={{ flex: 1 }} onClick={() => handleStartEdit(prop)}>
                    Edit Details
                  </button>
                  <button className="btn btn-danger btn-sm" style={{ padding: '0.5rem' }} onClick={() => handleDeleteProperty(prop.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => { setShowAddModal(false); resetForm(); }}>×</button>
            <h3 className="modal-title">Add New Property</h3>
            <p className="modal-subtitle">Fill in the property details and tenant lease details below.</p>
            
            <form onSubmit={handleAddProperty} style={{ marginTop: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Property Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 742 Evergreen Terrace, Springfield"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Property Type</label>
                  <select value={type} onChange={(e) => setType(e.target.value)} className="form-select">
                    <option value="Single Family">Single Family</option>
                    <option value="Multi Family">Multi Family</option>
                    <option value="Condo">Condo</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Monthly Rent ($) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="e.g. 2100"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tenant Full Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Leave empty if vacant"
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
                  className="form-input"
                />
              </div>

              {tenantName && (
                <>
                  <div className="form-group">
                    <label className="form-label">Tenant Email</label>
                    <input
                      type="email"
                      placeholder="e.g. tenant@domain.com"
                      value={tenantEmail}
                      onChange={(e) => setTenantEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Lease Start Date</label>
                      <input
                        type="date"
                        value={leaseStart}
                        onChange={(e) => setLeaseStart(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Lease End Date</label>
                      <input
                        type="date"
                        value={leaseEnd}
                        onChange={(e) => setLeaseEnd(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Occupancy Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
                      <option value="Occupied">Occupied</option>
                      <option value="Maintenance">Maintenance Required</option>
                    </select>
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => { setShowAddModal(false); resetForm(); }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1.5 }}>
                  Register Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Property Modal */}
      {editingProperty && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={resetForm}>×</button>
            <h3 className="modal-title">Edit Property Details</h3>
            <p className="modal-subtitle">Modify occupancy, rental fees, or lease parameters.</p>
            
            <form onSubmit={handleUpdateProperty} style={{ marginTop: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Property Street Address *</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Property Type</label>
                  <select value={type} onChange={(e) => setType(e.target.value)} className="form-select">
                    <option value="Single Family">Single Family</option>
                    <option value="Multi Family">Multi Family</option>
                    <option value="Condo">Condo</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Monthly Rent ($) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tenant Full Name</label>
                <input
                  type="text"
                  placeholder="Vacant"
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
                  className="form-input"
                />
              </div>

              {tenantName && (
                <>
                  <div className="form-group">
                    <label className="form-label">Tenant Email</label>
                    <input
                      type="email"
                      placeholder="tenant@domain.com"
                      value={tenantEmail}
                      onChange={(e) => setTenantEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Lease Start Date</label>
                      <input
                        type="date"
                        value={leaseStart}
                        onChange={(e) => setLeaseStart(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Lease End Date</label>
                      <input
                        type="date"
                        value={leaseEnd}
                        onChange={(e) => setLeaseEnd(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Occupancy Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
                      <option value="Occupied">Occupied</option>
                      <option value="Maintenance">Maintenance Required</option>
                    </select>
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={resetForm}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1.5 }}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .empty-properties-state {
          text-align: center;
          padding: 4rem 2rem;
          margin-top: 1rem;
        }

        .empty-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .empty-properties-state h3 {
          margin-bottom: 0.5rem;
        }

        .empty-properties-state p {
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 1.5rem;
          line-height: 1.5;
        }

        .property-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
        }

        .prop-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .property-type-tag {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .property-address {
          font-size: 1.18rem;
          font-weight: 750;
          color: #fff;
          margin-bottom: 0.5rem;
          line-height: 1.3;
          height: 3rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .rent-ticker {
          margin-bottom: 1.25rem;
        }

        .rent-amount {
          font-size: 1.65rem;
          font-weight: 850;
          color: #fff;
        }

        .rent-period {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-left: 0.25rem;
        }

        .prop-divider {
          height: 1px;
          background-color: var(--border-color);
          margin-bottom: 1rem;
        }

        .tenant-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .details-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .detail-lbl {
          color: var(--text-muted);
          font-weight: 600;
        }

        .detail-val {
          color: var(--text-primary);
          font-weight: 600;
        }

        .email-val {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 60%;
        }

        .lease-progress-container {
          margin-top: 0.85rem;
        }

        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
        }

        .progress-bar-track {
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary) 0%, #a5b4fc 100%);
          border-radius: var(--radius-full);
        }

        .card-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .modal-title {
          font-size: 1.35rem;
          font-weight: 750;
        }

        .modal-subtitle {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
      `}} />
    </div>
  )
}
