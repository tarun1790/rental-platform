import React, { useState } from 'react'

export default function CrowdsourceView({ properties, jobs, onAddJob, bids, onAcceptBid, groupDeals, onToggleGroupDeal }) {
  const [showAddJobModal, setShowAddJobModal] = useState(false)
  const [selectedJobForBids, setSelectedJobForBids] = useState(null)

  // Form states
  const [title, setTitle] = useState('')
  const [propertyId, setPropertyId] = useState('')
  const [category, setCategory] = useState('Plumbing')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')

  const handlePostJob = async (e) => {
    e.preventDefault()
    if (!title || !propertyId || !budget) return

    // Allow comparison on string/int IDs
    const matchedProp = properties.find(p => p.id.toString() === propertyId.toString())
    const propertyAddress = matchedProp ? matchedProp.address : "Unknown Property"

    const jobData = {
      title,
      propertyId,
      propertyName: propertyAddress,
      category,
      description,
      budget: parseFloat(budget)
    }

    await onAddJob(jobData)
    setShowAddJobModal(false)
    
    // Reset Form
    setTitle('')
    setPropertyId('')
    setCategory('Plumbing')
    setDescription('')
    setBudget('')
  }

  const handleAcceptBid = async (jobId, bid) => {
    await onAcceptBid(jobId, bid)
    setSelectedJobForBids(null)
  }

  const handleToggleGroupPool = (dealId) => {
    onToggleGroupDeal(dealId)
  }

  return (
    <div className="crowdsource-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1 className="view-title text-gradient">Crowdsourced Services</h1>
          <p className="view-description">Post repair tickets to secure bids or join collective pools in your ZIP code for volume discounts.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (properties.length === 0) {
              alert("Please register a property in the 'Rental Properties' tab first before listing maintenance jobs.")
            } else {
              setShowAddJobModal(true)
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Post Repair Ticket
        </button>
      </div>

      <div className="marketplace-layout">
        {/* Active Maintenance Tickets */}
        <div className="tickets-column">
          <h3 className="column-title">Active Repair Tickets</h3>
          <p className="column-p">Submit issues to trigger auto-competitions among verified local providers.</p>

          {jobs.length === 0 ? (
            <div className="empty-state glass-card">
              <span style={{ fontSize: '2.5rem' }}>🔧</span>
              <h4 style={{ marginTop: '0.5rem' }}>No maintenance tickets</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Your active service queries and bid entries will be detailed here.</p>
            </div>
          ) : (
            <div className="tickets-list">
              {jobs.map(job => {
                const jobBids = bids[job.id] || []
                const statusBadge = 
                  job.status === 'bidding' ? 'badge-primary' :
                  job.status === 'active' ? 'badge-success' : 'badge-info'

                return (
                  <div key={job.id} className="ticket-card glass-card">
                    <div className="ticket-header">
                      <span className={`badge ${statusBadge}`}>
                        {job.status === 'bidding' ? 'Gathering Bids' : job.status === 'active' ? 'Service Scheduled' : 'Completed'}
                      </span>
                      <span className="ticket-date">Posted {job.datePosted}</span>
                    </div>

                    <h4 className="ticket-title">{job.title}</h4>
                    <div className="ticket-meta">
                      <span>📍 {job.propertyName}</span>
                      <span>•</span>
                      <span>🏷️ {job.category}</span>
                    </div>
                    
                    <p className="ticket-desc">{job.description}</p>

                    <div className="ticket-footer">
                      <div className="ticket-budget">
                        <span className="lbl">Target Budget:</span>
                        <span className="val">${job.budget}</span>
                      </div>
                      
                      {job.status === 'bidding' ? (
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setSelectedJobForBids(job)}
                        >
                          View Bids ({jobBids.length})
                          {jobBids.length > 0 && <span className="bid-alert-dot"></span>}
                        </button>
                      ) : (
                        <div className="hired-badge">
                          <span>Hired: {job.acceptedBid?.providerName} (${job.acceptedBid?.price})</span>
                          {job.savings > 0 && <span className="savings-tag">Saved ${job.savings}!</span>}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Neighborhood Bulk Savings Pool */}
        <div className="pools-column">
          <h3 className="column-title">Neighborhood Bulk Pools</h3>
          <p className="column-p">Pool properties with nearby landlords in the same ZIP code to negotiate bulk pricing from vendors.</p>

          <div className="pools-list">
            {groupDeals.map(deal => (
              <div key={deal.id} className={`pool-card glass-card ${deal.unlocked === 1 ? 'unlocked-card' : ''}`}>
                <div className="pool-header">
                  <span className="pool-zip">ZIP: {deal.zipCode}</span>
                  <span className={`badge ${deal.unlocked === 1 ? 'badge-success' : 'badge-warning'}`}>
                    {deal.unlocked === 1 ? '💰 Discount Unlocked!' : `${deal.targetCount - deal.currentCount} Landlords Needed`}
                  </span>
                </div>

                <h4 className="pool-service-title">{deal.serviceType}</h4>
                <p className="pool-desc">{deal.description}</p>

                <div className="pool-stats">
                  <div className="progress-labels">
                    <span>Joined: {deal.currentCount} / {deal.targetCount} Landlords</span>
                    <span>{Math.round((deal.currentCount / deal.targetCount) * 100)}%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div
                      className="progress-bar-fill"
                      style={{ 
                        width: `${Math.min(100, (deal.currentCount / deal.targetCount) * 100)}%`,
                        backgroundColor: deal.unlocked === 1 ? 'var(--color-success)' : 'var(--color-primary)'
                      }}
                    ></div>
                  </div>
                </div>

                <div className="pool-pricing-grid">
                  <div className="pricing-col">
                    <span className="lbl">Bulk Rate</span>
                    <span className="val">${deal.bulkPrice}</span>
                  </div>
                  <div className="pricing-col">
                    <span className="lbl">Est. Savings</span>
                    <span className="val text-success">-{deal.discountPercent}%</span>
                  </div>
                </div>

                <button
                  className={`btn ${deal.joined === 1 ? 'btn-danger' : 'btn-primary'} btn-sm w-100`}
                  onClick={() => handleToggleGroupPool(deal.id)}
                >
                  {deal.joined === 1 ? 'Leave Group Pool' : 'Join Collective Pool'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Post Ticket Modal */}
      {showAddJobModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowAddJobModal(false)}>×</button>
            <h3 className="modal-title">Post Maintenance Ticket</h3>
            <p className="modal-subtitle">Post repair requirements. Our local network will bid within minutes.</p>

            <form onSubmit={handlePostJob} style={{ marginTop: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Issue Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Broken water heater, Gutter maintenance"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Select Property *</label>
                <select
                  required
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="form-select"
                >
                  <option value="">-- Choose property --</option>
                  {properties.map(p => (
                    <option key={p.id} value={p.id}>{p.address}</option>
                  ))}
                </select>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Service Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="HVAC">HVAC</option>
                    <option value="Roofing">Roofing</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Other">General Handyman</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Max Budget ($) *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="e.g. 350"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Problem Details / Scope of Work</label>
                <textarea
                  placeholder="Provide plumbing sizes, brand models, pictures or access timelines to help providers bid accurately."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowAddJobModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1.5 }}>
                  Post to Marketplace
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bids Inspection Modal */}
      {selectedJobForBids && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px' }}>
            <button className="modal-close" onClick={() => setSelectedJobForBids(null)}>×</button>
            <h3 className="modal-title">Bidding Room: {selectedJobForBids.title}</h3>
            <p className="modal-subtitle">Review quotes from service providers. Simulating real-time local updates.</p>

            <div className="bids-list" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(bids[selectedJobForBids.id] || []).length === 0 ? (
                <div className="simulating-spinner">
                  <div className="spinner"></div>
                  <p>Searching for providers and requesting quotes... <br /><span>Bids usually arrive in 5-10 seconds.</span></p>
                </div>
              ) : (
                (bids[selectedJobForBids.id] || []).map(bid => {
                  const percentSaved = Math.round(((selectedJobForBids.budget - bid.price) / selectedJobForBids.budget) * 100)
                  return (
                    <div key={bid.id} className="bid-item glass-card" style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)' }}>
                      <div className="bid-item-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ color: '#fff', fontSize: '1rem' }}>
                            {bid.providerName}
                            {bid.verified === 1 && <span className="verified-check" title="RealPal Verified License"> ✓</span>}
                          </h4>
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.2rem' }}>
                            <span style={{ color: 'var(--color-warning)', fontSize: '0.85rem' }}>★ {bid.rating}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>• ETA: {bid.eta}</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>${bid.price}</div>
                          {percentSaved > 0 ? (
                            <span style={{ color: 'var(--color-success)', fontSize: '0.75rem', fontWeight: '700' }}>
                              Saves {percentSaved}%
                            </span>
                          ) : (
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Budget Quote</span>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleAcceptBid(selectedJobForBids.id, bid)}
                        >
                          Hire & Authorize Lockbox
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
            
            {(bids[selectedJobForBids.id] || []).length < 3 && (bids[selectedJobForBids.id] || []).length > 0 && (
              <p className="bidding-tip">💡 Keep this window open! More competitive service bids are currently formulating...</p>
            )}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .marketplace-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2rem;
        }

        .column-title {
          font-size: 1.25rem;
          font-weight: 750;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .column-p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .tickets-list, .pools-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ticket-card {
          background: var(--bg-card);
        }

        .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .ticket-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .ticket-title {
          font-size: 1.1rem;
          font-weight: 750;
          margin-bottom: 0.25rem;
        }

        .ticket-meta {
          display: flex;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
          font-weight: 600;
        }

        .ticket-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .ticket-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .ticket-budget .lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: block;
        }

        .ticket-budget .val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
        }

        .hired-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-success);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.15rem;
        }

        .savings-tag {
          font-size: 0.75rem;
          background-color: var(--color-success-light);
          padding: 0.1rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .bid-alert-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background-color: var(--color-danger);
          border-radius: 50%;
          margin-left: 5px;
          animation: pulse-glow 1.5s infinite;
        }

        /* Collective Pools Card */
        .pool-card {
          border-left: 4px solid var(--color-primary);
        }

        .unlocked-card {
          border-color: var(--color-success);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .pool-zip {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
        }

        .pool-service-title {
          font-size: 1.1rem;
          font-weight: 750;
          margin: 0.5rem 0 0.25rem;
        }

        .pool-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .pool-stats {
          margin-bottom: 1rem;
        }

        .pool-pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          background: rgba(0,0,0,0.15);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
        }

        .pricing-col {
          text-align: center;
        }

        .pricing-col .lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
          display: block;
        }

        .pricing-col .val {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .w-100 {
          width: 100%;
        }

        /* Bid list styles inside modal */
        .verified-check {
          color: var(--color-info);
          font-weight: bold;
        }

        .simulating-spinner {
          text-align: center;
          padding: 2.5rem 0;
        }

        .spinner {
          border: 3px solid rgba(255,255,255,0.05);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border-left-color: var(--color-primary);
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }

        .simulating-spinner p {
          font-size: 0.9rem;
          color: #fff;
          font-weight: 600;
          line-height: 1.4;
        }

        .simulating-spinner p span {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .bidding-tip {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
          margin-top: 1rem;
        }

        @media (max-width: 1024px) {
          .marketplace-layout {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  )
}
