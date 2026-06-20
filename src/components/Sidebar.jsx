import React from 'react'

export default function Sidebar({ activeTab, setActiveTab, subscription }) {
  const getSubscriptionBadge = () => {
    switch (subscription) {
      case 'basic':
        return <span className="badge badge-primary">Basic Plan</span>
      case 'premium':
        return <span className="badge badge-warning">Premium Member</span>
      case 'savings':
        return <span className="badge badge-info">Savings-Share</span>
      default:
        return <span className="badge badge-danger">Unsubscribed</span>
    }
  }

  const menuItems = [
    {
      id: 'landing',
      label: 'Home & Concept',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      )
    },
    {
      id: 'properties',
      label: 'Rental Properties',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      id: 'crowdsource',
      label: 'Crowdsource Hub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'reminders',
      label: 'Reminders & Tasks',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      id: 'feedback',
      label: 'Tester Panel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    }
  ]

  return (
    <aside className="sidebar-container">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ecc94b" />
                <stop offset="100%" stopColor="#e53e3e" />
              </linearGradient>
            </defs>
            <path d="M3 21h18M3 10l9-7 9 7v11H3V10z" />
            <path d="M9 21v-8h6v8" />
          </svg>
        </div>
        <div>
          <h2>RealPal</h2>
          <span className="brand-tagline">Trusted Companion</span>
        </div>
      </div>

      <div className="sidebar-vision">
        <div className="vision-title">VISION & MISSION</div>
        <p className="vision-text">
          To build better communities across the world one at a time by providing a platform for landlords, tenants, and service providers.
        </p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.id === 'reminders' && (
              <span className="nav-badge pulse-indicator"></span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="user-info">
            <div className="user-name">Alex Miller</div>
            <div className="user-role">Independent Landlord</div>
            <div className="sub-status">{getSubscriptionBadge()}</div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .sidebar-container {
          width: var(--sidebar-width);
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 1.75rem 1.25rem;
          height: 100vh;
          position: sticky;
          top: 0;
          flex-shrink: 0;
          z-index: 100;
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .brand-logo {
          background: rgba(229, 62, 62, 0.08);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(229, 62, 62, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-brand h2 {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 40%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          display: block;
          margin-top: -2px;
        }

        .sidebar-vision {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 2rem;
        }

        .vision-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }

        .vision-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: 0.92rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.03);
        }

        .nav-item.active {
          color: #fff;
          background: var(--color-primary-light);
          border-left: 3px solid var(--color-primary);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          opacity: 0.8;
        }

        .nav-item.active .nav-icon {
          color: var(--color-primary);
          opacity: 1;
        }

        .nav-badge {
          position: absolute;
          right: 1rem;
        }

        .sidebar-footer {
          margin-top: auto;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(229, 62, 62, 0.1);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(229, 62, 62, 0.2);
        }

        .user-info {
          flex: 1;
          min-width: 0;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .sub-status {
          display: inline-block;
        }

        @media (max-width: 768px) {
          .sidebar-container {
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            position: relative;
            padding: 1.25rem;
          }
          .sidebar-vision {
            display: none;
          }
          .sidebar-nav {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          .nav-item {
            white-space: nowrap;
          }
        }
      `}} />
    </aside>
  )
}
