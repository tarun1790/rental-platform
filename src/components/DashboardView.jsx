import React from 'react'

export default function DashboardView({ properties, reminders, jobs, groupDeals, setActiveTab }) {
  // 1. KPI Counts
  const totalProperties = properties.length
  const occupiedCount = properties.filter(p => p.status === 'Occupied').length
  const occupancyRate = totalProperties > 0 ? Math.round((occupiedCount / totalProperties) * 100) : 0
  
  // Total Monthly Rent Roll
  const totalRentRoll = properties.reduce((sum, p) => sum + (p.status === 'Occupied' ? p.rent : 0), 0)

  // Maintenance Savings
  // A. Savings from jobs (budget - bid price)
  const jobSavings = jobs.filter(j => j.status === 'active' && j.savings).reduce((sum, j) => sum + j.savings, 0)
  // B. Savings from active group pools (if joined AND unlocked)
  const poolSavings = groupDeals
    .filter(d => d.joined && d.unlocked)
    .reduce((sum, d) => sum + (d.bulkPrice * (d.discountPercent / 100)), 0)
  const totalSavings = jobSavings + poolSavings

  // Pending items
  const pendingTasks = reminders.filter(r => !r.completed)
  const urgentTasks = pendingTasks.filter(r => r.priority === 'High')
  
  const biddingJobs = jobs.filter(j => j.status === 'bidding')

  // 2. Custom SVG Chart Data
  // Months: Jan, Feb, Mar, Apr, May, Jun
  const chartData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    rent: [3200, 3200, 4800, 4800, 5400, totalRentRoll || 5400],
    expense: [850, 400, 1200, 300, 1600, biddingJobs.length * 150 + 200]
  }

  // Draw Line SVG coordinates mapping
  // Chart dimensions: 500 x 200
  const maxVal = 6000
  const getCoordinates = (values) => {
    return values.map((val, idx) => {
      const x = 30 + (idx * 90)
      const y = 170 - ((val / maxVal) * 150)
      return `${x},${y}`
    }).join(' ')
  }

  const rentPoints = getCoordinates(chartData.rent)
  const expensePoints = getCoordinates(chartData.expense)

  return (
    <div className="dashboard-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1 className="view-title text-gradient">Dashboard Overview</h1>
          <p className="view-description">Real-time financials, property occupancies, and operational actions.</p>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        {/* KPI 1 */}
        <div className="glass-card kpi-card" onClick={() => setActiveTab('properties')}>
          <div className="kpi-icon-wrapper" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
            🏠
          </div>
          <div className="kpi-info">
            <span className="kpi-val">{totalProperties}</span>
            <span className="kpi-lbl">Properties</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-card kpi-card" onClick={() => setActiveTab('properties')}>
          <div className="kpi-icon-wrapper" style={{ background: 'var(--color-info-light)', color: 'var(--color-info)' }}>
            👥
          </div>
          <div className="kpi-info">
            <span className="kpi-val">{occupancyRate}%</span>
            <span className="kpi-lbl">Occupancy Rate</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-card kpi-card" onClick={() => setActiveTab('crowdsource')}>
          <div className="kpi-icon-wrapper" style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
            🪙
          </div>
          <div className="kpi-info">
            <span className="kpi-val" style={{ color: 'var(--color-warning)' }}>${totalSavings.toLocaleString()}</span>
            <span className="kpi-lbl">Saved on Repairs</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-card kpi-card" onClick={() => setActiveTab('reminders')}>
          <div className="kpi-icon-wrapper" style={{ background: 'rgba(46, 125, 50, 0.08)', color: 'var(--primary-green)' }}>
            🔔
          </div>
          <div className="kpi-info">
            <span className="kpi-val">
              {pendingTasks.length}
              {urgentTasks.length > 0 && <span className="kpi-sub-val" style={{ color: 'var(--color-primary)' }}>({urgentTasks.length} High)</span>}
            </span>
            <span className="kpi-lbl">Active Reminders</span>
          </div>
        </div>
      </div>

      {/* Financial Chart and Alerts Row */}
      <div className="chart-alerts-layout">
        {/* Chart Card */}
        <div className="glass-card chart-card">
          <h3 className="section-title">Rent Roll vs. Repair Costs</h3>
          <p className="section-p">Consolidated cashflow comparison across the current portfolio (Last 6 Months).</p>

          <div className="svg-chart-container">
            <svg viewBox="0 0 500 200" className="dashboard-svg-chart">
              <defs>
                <linearGradient id="rent-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0"/>
                </linearGradient>
                <linearGradient id="exp-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0"/>
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="30" y1="20" x2="480" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="30" y1="70" x2="480" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="30" y1="120" x2="480" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="30" y1="170" x2="480" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Y Axis Labels */}
              <text x="5" y="25" fill="var(--text-muted)" fontSize="8">$6.0K</text>
              <text x="5" y="75" fill="var(--text-muted)" fontSize="8">$4.0K</text>
              <text x="5" y="125" fill="var(--text-muted)" fontSize="8">$2.0K</text>
              <text x="5" y="175" fill="var(--text-muted)" fontSize="8">$0</text>

              {/* X Axis Labels */}
              {chartData.months.map((m, idx) => (
                <text key={m} x={30 + (idx * 90)} y="190" textAnchor="middle" fill="var(--text-muted)" fontSize="9" fontWeight="600">{m}</text>
              ))}

              {/* Rent Line & Area */}
              <polygon
                points={`30,170 ${rentPoints} 480,170`}
                fill="url(#rent-grad)"
              />
              <polyline
                fill="none"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinecap="round"
                points={rentPoints}
              />

              {/* Expense Line & Area */}
              <polygon
                points={`30,170 ${expensePoints} 480,170`}
                fill="url(#exp-grad)"
              />
              <polyline
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3.5"
                strokeLinecap="round"
                points={expensePoints}
              />

              {/* Interactive Dots on final month */}
              <circle cx={30 + 5 * 90} cy={170 - ((chartData.rent[5] / maxVal) * 150)} r="5" fill="#ffffff" stroke="#000" strokeWidth="2" />
              <circle cx={30 + 5 * 90} cy={170 - ((chartData.expense[5] / maxVal) * 150)} r="5" fill="var(--color-primary)" stroke="#000" strokeWidth="2" />
            </svg>
          </div>

          <div className="chart-legend">
            <div className="legend-item">
              <span className="dot" style={{ backgroundColor: '#ffffff' }}></span>
              <span>Rent Roll (${totalRentRoll.toLocaleString()}/mo)</span>
            </div>
            <div className="legend-item">
              <span className="dot" style={{ backgroundColor: 'var(--color-primary)' }}></span>
              <span>Maintenance Expenses (${chartData.expense[5]}/mo)</span>
            </div>
          </div>
        </div>

        {/* Action Center Card */}
        <div className="glass-card alerts-card">
          <h3 className="section-title">Operational Hub</h3>
          <p className="section-p">Actions requiring immediate attention.</p>

          <div className="alerts-stack" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {/* Urgently bidding jobs */}
            {biddingJobs.map(job => (
              <div key={job.id} className="alert-item alert-job glass-card" onClick={() => setActiveTab('crowdsource')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-warning">Bid Response Pending</span>
                  <span className="pulse-indicator"></span>
                </div>
                <h4 className="alert-item-title">{job.title}</h4>
                <p className="alert-item-desc">Quotations are formulating on this maintenance ticket. Select a vendor.</p>
              </div>
            ))}

            {/* High priority tasks */}
            {urgentTasks.slice(0, 2).map(task => (
              <div key={task.id} className="alert-item alert-task glass-card" onClick={() => setActiveTab('reminders')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-danger">High Priority Task</span>
                  <span className="alert-date">📅 {new Date(task.date).toLocaleDateString()}</span>
                </div>
                <h4 className="alert-item-title">{task.title}</h4>
                <p className="alert-item-desc">Associated Property: {task.propertyName}</p>
              </div>
            ))}

            {/* If no alerts */}
            {biddingJobs.length === 0 && urgentTasks.length === 0 && (
              <div className="all-clear-state">
                <div className="all-clear-icon">✓</div>
                <h4>All systems operating normally</h4>
                <p>No critical leasing deadlines or bidding alerts require processing today.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RealPal Feature Quick-Access */}
      <div className="quick-actions-bar glass-card" style={{ marginTop: '2rem' }}>
        <h4 style={{ marginBottom: '0.75rem' }}>Quick Landlord Utilities</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('properties')}>
            + Register New Property
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('crowdsource')}>
            🔧 Request Contractor Bid
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('reminders')}>
            📅 Schedule Compliance Check
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('landing')}>
            📊 Check Pricing ROI
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
          background: var(--bg-card);
        }

        .kpi-card:hover {
          transform: translateY(-4px);
        }

        .kpi-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .kpi-info {
          display: flex;
          flex-direction: column;
        }

        .kpi-val {
          font-size: 1.65rem;
          font-weight: 850;
          color: var(--text-primary);
          line-height: 1.1;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .kpi-sub-val {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .kpi-lbl {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
          font-weight: 600;
        }

        .chart-alerts-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        .chart-card {
          display: flex;
          flex-direction: column;
        }

        .svg-chart-container {
          background: #f7fafc;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1rem;
          margin: 1rem 0;
          flex: 1;
        }

        .dashboard-svg-chart {
          width: 100%;
          height: 100%;
          display: block;
        }

        .chart-legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          font-size: 0.825rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .legend-item .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Alerts Stack */
        .alerts-card {
          background: var(--bg-card);
        }

        .alert-item {
          padding: 1rem;
          background: #f7fafc;
          cursor: pointer;
          border-left: 3px solid transparent;
        }

        .alert-item:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary);
        }

        .alert-job {
          border-left-color: var(--color-warning);
        }

        .alert-task {
          border-left-color: var(--color-danger);
        }

        .alert-item-title {
          font-size: 0.95rem;
          font-weight: 750;
          color: var(--text-primary);
          margin-top: 0.35rem;
        }

        .alert-item-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
          line-height: 1.4;
        }

        .alert-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .all-clear-state {
          text-align: center;
          padding: 3rem 1.5rem;
        }

        .all-clear-icon {
          width: 44px;
          height: 44px;
          background: var(--color-success-light);
          color: var(--color-success);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .all-clear-state h4 {
          margin-bottom: 0.25rem;
        }

        .all-clear-state p {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .chart-alerts-layout {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  )
}
