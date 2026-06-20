import React, { useState } from 'react'

export default function LandingView({ subscription, setSubscription, setActiveTab }) {
  const [units, setUnits] = useState(3)
  const [activeProblem, setActiveProblem] = useState(0)

  const handleSubscribe = (planId) => {
    setSubscription(planId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      setActiveTab('dashboard')
    }, 400)
  }

  const handleScrollDown = () => {
    document.getElementById('concept-detail-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const landlordProblems = [
    {
      title: "Repairs & Maintenance Costs",
      desc: "An average of $2,000 to $3,000 is spent per unit annually on maintenance. RealPal helps reduce this by 10-15% through competitive bidding and group service pools.",
      icon: "🔧"
    },
    {
      title: "Compliance & Laws",
      desc: "Local, state, and federal leasing regulations change constantly. RealPal tracks statutory inspections, certifications, and compliance deadlines automatically.",
      icon: "📜"
    },
    {
      title: "Tenant Turnover & Rent Loss",
      desc: "Finding and vetting tenants leads to vacant periods that eat into passive income. Keep tenants longer by resolving maintenance issues fast and maintaining transparent comms.",
      icon: "🔑"
    },
    {
      title: "Stress of Property Management",
      desc: "Balancing property emergencies with personal life leads to burnout. RealPal centralizes communications, tasks, reminders, and invoices in one secure workspace.",
      icon: "🧠"
    },
    {
      title: "Accounting & Taxes",
      desc: "Tracking deductible expenses, vendor invoices, rent deposits, and writing off depreciation is complex. Keep records neat and ready for tax seasons.",
      icon: "📊"
    }
  ]

  const calculatedCost = units * 2500
  const calculatedSavings = units * 325 // ~13% average savings

  return (
    <div className="landing-container animate-fade-in" style={{ padding: 0, margin: '-2.5rem -2.5rem 0' }}>
      
      {/* 100vh Typewriter Splash Intro */}
      <section className="typewriter-hero-container">
        <div className="typewriter-wrapper">
          <h1 className="typewriter-bold-title">REAL PAL</h1>
          <p className="typewriter-bold-subtitle">
            A trusted companion for Landlords, Tenants & Service Providers.
          </p>
        </div>

        <button className="scroll-down-btn" onClick={handleScrollDown} aria-label="Scroll Down">
          <span className="scroll-arrow">▼</span>
          <span className="scroll-text">Scroll Down for Details</span>
        </button>
      </section>

      {/* Main Concept Detail Section (Scroll Down Target) */}
      <section id="concept-detail-section" className="concept-detail-section" style={{ padding: '2.5rem' }}>
        
        {/* Hero Showcase */}
        <div className="hero-showcase glass-card" style={{ marginTop: '1rem' }}>
          <div className="hero-text-content">
            <span className="badge badge-primary">Platform Concept</span>
            <h2 className="hero-title" style={{ fontSize: '2rem' }}>Better communities, one rental at a time.</h2>
            <p className="hero-p">
              Independent landlords represent <strong>10 million investors</strong> managing over <strong>23 million rental units</strong> in the US. RealPal bridges the gap between Landlords, Tenants, and Service Providers to streamline property management and reduce the $46 billion annual maintenance burden.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => handleSubscribe('premium')}>
                Activate Trial Demo
              </button>
              <button className="btn btn-secondary" onClick={() => {
                const element = document.getElementById('savings-calculator')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Calculate ROI Savings
              </button>
            </div>
          </div>
          <div className="hero-image-pane">
            <div className="concept-stat-box">
              <div className="stat-num text-gradient">$46B</div>
              <div className="stat-lbl">US Annual Maintenance Spend</div>
            </div>
            <div className="concept-stat-box accent-box">
              <div className="stat-num savings-gradient">10-15%</div>
              <div className="stat-lbl">Target Expense Savings</div>
            </div>
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div id="savings-calculator" className="savings-calc-section grid-2">
          <div className="glass-card flex-column-center">
            <h3 className="section-title">Interactive savings calculator</h3>
            <p className="section-p">
              See how much you can expect to save in repairs, administration, and vacant turnovers using RealPal's smart crowdsourcing and preventive tracking tools.
            </p>

            <div className="calc-slider-wrapper">
              <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Number of Rental Units:</span>
                <span className="slider-val">{units} {units === 1 ? 'Unit' : 'Units'}</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={units}
                onChange={(e) => setUnits(parseInt(e.target.value))}
                className="calc-slider"
              />
            </div>

            <div className="savings-grid">
              <div className="savings-item">
                <span className="savings-lbl">Estimated Annual Spend</span>
                <span className="savings-val">${calculatedCost.toLocaleString()}</span>
              </div>
              <div className="savings-item highlight-savings">
                <span className="savings-lbl">RealPal Saved (13%)</span>
                <span className="savings-val">${calculatedSavings.toLocaleString()}</span>
              </div>
            </div>
            <div className="savings-foot-note">
              *Based on industry averages of $2,000–$3,000 spent per property unit on repairs, plumbing, electrical, and landscaping annually.
            </div>
          </div>

          {/* Problem Accordion */}
          <div className="glass-card">
            <h3 className="section-title">Major Landlord Hassles Addressed</h3>
            <p className="section-p">Click on the challenges below to see how RealPal's specific feature set helps mitigate them.</p>

            <div className="problem-list">
              {landlordProblems.map((prob, idx) => (
                <div
                  key={idx}
                  className={`problem-item ${activeProblem === idx ? 'expanded' : ''}`}
                  onClick={() => setActiveProblem(idx)}
                >
                  <div className="problem-header">
                    <span className="prob-icon">{prob.icon}</span>
                    <span className="prob-title">{prob.title}</span>
                    <span className="prob-arrow">{activeProblem === idx ? '▲' : '▼'}</span>
                  </div>
                  {activeProblem === idx && (
                    <div className="problem-body animate-slide-up">
                      <p>{prob.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Models and Subscriptions */}
        <div className="business-models-section">
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Flexible Business Models</h3>
          <p className="section-p" style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We evaluate multiple revenue avenues to align incentive with landlord savings and ease of adoption. Choose a mock model below to experience the platform.
          </p>

          <div className="grid-3">
            {/* Plan 1 */}
            <div className={`pricing-card glass-card ${subscription === 'basic' ? 'active-plan' : ''}`}>
              {subscription === 'basic' && <div className="active-tag">Active Subscription</div>}
              <div className="plan-name">Basic Flat Fee</div>
              <div className="plan-price">$19<span>/mo</span></div>
              <div className="plan-desc">For small landlords starting their automation journey.</div>
              <ul className="plan-features">
                <li>✓ Manage up to 5 properties</li>
                <li>✓ Core compliance reminders</li>
                <li>✓ Basic digital lease storage</li>
                <li>✓ Crowdsource service listings</li>
              </ul>
              <button
                className={`btn btn-secondary ${subscription === 'basic' ? 'btn-success' : ''}`}
                onClick={() => handleSubscribe('basic')}
              >
                {subscription === 'basic' ? 'Selected Plan' : 'Select Flat Subscription'}
              </button>
            </div>

            {/* Plan 2 */}
            <div className={`pricing-card glass-card premium-card ${subscription === 'premium' ? 'active-plan' : ''}`}>
              {subscription === 'premium' && <div className="active-tag">Active Subscription</div>}
              <div className="plan-badge">Most Popular</div>
              <div className="plan-name">Premium Hub</div>
              <div className="plan-price">$39<span>/mo</span></div>
              <div className="plan-desc">Full dashboard and integrated service provider bidding network.</div>
              <ul className="plan-features">
                <li>✓ Unlimited properties & units</li>
                <li>✓ Interactive maintenance bidding</li>
                <li>✓ Auto-reminders & calendar sync</li>
                <li>✓ Group saving zip pool access</li>
                <li>✓ Live tenant ticket portal</li>
              </ul>
              <button
                className="btn btn-primary"
                onClick={() => handleSubscribe('premium')}
              >
                {subscription === 'premium' ? 'Active Member' : 'Upgrade to Premium'}
              </button>
            </div>

            {/* Plan 3 */}
            <div className={`pricing-card glass-card ${subscription === 'savings' ? 'active-plan' : ''}`}>
              {subscription === 'savings' && <div className="active-tag">Active Subscription</div>}
              <div className="plan-name">Share of Savings</div>
              <div className="plan-price">10%<span>of savings</span></div>
              <div className="plan-desc">Zero subscription fees. Pay only a percentage of verified repair savings.</div>
              <ul className="plan-features">
                <li>✓ Unlimited properties & units</li>
                <li>✓ Full provider bidding simulator</li>
                <li>✓ RealPal bulk service pricing</li>
                <li>✓ Pay only when we save you money</li>
                <li>✓ Quarterly savings report</li>
              </ul>
              <button
                className={`btn btn-secondary ${subscription === 'savings' ? 'btn-success' : ''}`}
                onClick={() => handleSubscribe('savings')}
              >
                {subscription === 'savings' ? 'Selected Plan' : 'Select Pay-on-Savings'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .scroll-down-btn {
          position: absolute;
          bottom: 2rem;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Courier New', Courier, monospace;
          font-weight: 700;
          font-size: 0.85rem;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .scroll-down-btn:hover {
          transform: translateY(5px);
          opacity: 0.8;
        }

        .scroll-arrow {
          font-size: 1.5rem;
          color: var(--color-primary);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        .hero-showcase {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(5, 5, 5, 0.95) 100%);
        }

        .hero-text-content {
          flex: 1.3;
        }

        .hero-title {
          font-weight: 800;
          line-height: 1.25;
          margin: 0.85rem 0;
          letter-spacing: -0.03em;
        }

        .hero-p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
          font-size: 1.05rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .hero-image-pane {
          flex: 0.8;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .concept-stat-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .concept-stat-box.accent-box {
          border-color: var(--border-color-active);
          background: rgba(229, 62, 62, 0.04);
        }

        .stat-num {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .stat-lbl {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .savings-calc-section {
          margin-bottom: 2.5rem;
        }

        .flex-column-center {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .section-title {
          font-size: 1.35rem;
          font-weight: 750;
          margin-bottom: 0.5rem;
        }

        .section-p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .calc-slider-wrapper {
          width: 100%;
          margin: 1.5rem 0;
          background: rgba(0, 0, 0, 0.3);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .slider-val {
          color: var(--color-warning);
          font-weight: 700;
          font-size: 1.05rem;
        }

        .calc-slider {
          width: 100%;
          -webkit-appearance: none;
          height: 6px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.15);
          outline: none;
          margin-top: 0.75rem;
        }

        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-primary);
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .savings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          width: 100%;
          margin-bottom: 1.25rem;
        }

        .savings-item {
          background: rgba(0, 0, 0, 0.3);
          padding: 1rem;
          border-radius: var(--radius-sm);
          text-align: center;
          border: 1px solid var(--border-color);
        }

        .savings-item.highlight-savings {
          background: var(--color-warning-light);
          border-color: rgba(236, 201, 75, 0.2);
        }

        .savings-lbl {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }

        .savings-val {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
        }

        .highlight-savings .savings-val {
          color: var(--color-warning);
        }

        .savings-foot-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .problem-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .problem-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.9rem 1.2rem;
          background: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .problem-item:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .problem-item.expanded {
          border-color: var(--border-color-active);
          background: rgba(229, 62, 62, 0.02);
        }

        .problem-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .prob-icon {
          font-size: 1.15rem;
        }

        .prob-title {
          font-weight: 600;
          color: #fff;
          flex: 1;
        }

        .prob-arrow {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .problem-body {
          margin-top: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.5;
          padding-left: 1.9rem;
          border-left: 2px solid var(--color-primary);
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.25rem 2rem;
          background: rgba(10, 10, 10, 0.8);
        }

        .pricing-card.premium-card {
          background: linear-gradient(180deg, rgba(229, 62, 62, 0.06) 0%, rgba(10, 10, 10, 0.8) 100%);
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px -10px rgba(229, 62, 62, 0.2);
        }

        .active-plan {
          border-color: var(--color-warning);
          box-shadow: 0 0 15px rgba(236, 201, 75, 0.1);
        }

        .active-tag {
          position: absolute;
          top: -10px;
          right: 20px;
          background-color: var(--color-warning);
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .plan-badge {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background-color: var(--color-primary);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .plan-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .plan-price {
          font-size: 2.25rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .plan-price span {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .plan-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.4;
          min-height: 2.8rem;
        }

        .plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex: 1;
        }

        .plan-features li {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .hero-showcase {
            flex-direction: column;
            padding: 1.5rem;
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .pricing-card {
            margin-bottom: 1rem;
          }
        }
      `}} />
    </div>
  )
}
