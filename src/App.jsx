import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import LandingView from './components/LandingView'
import DashboardView from './components/DashboardView'
import PropertiesView from './components/PropertiesView'
import CrowdsourceView from './components/CrowdsourceView'
import RemindersView from './components/RemindersView'
import FeedbackView from './components/FeedbackView'

// --- API CONFIGURATION ---
// Local development browser runs on http://localhost:3000
// Local development backend server runs on http://localhost:5000
//
// NOTE FOR PLAY STORE / EMULATOR DEPLOYMENTS:
// 1. Android Emulator: Use 'http://10.0.2.2:5000' to point to your computer's local backend.
// 2. Production Play Store: Replace this with your public HTTPS API server URL (e.g., 'https://api.realpal.com').
const API_BASE_URL = 'http://localhost:5000'; 

export default function App() {
  const [activeTab, setActiveTab] = useState('landing')
  const [subscription, setSubscription] = useState('premium')

  // Full-stack persistent state storage
  const [properties, setProperties] = useState([])
  const [reminders, setReminders] = useState([])
  const [jobs, setJobs] = useState([])
  const [bids, setBids] = useState({})
  const [groupDeals, setGroupDeals] = useState([])
  const [feedback, setFeedback] = useState([])

  // Load datasets from SQLite database on startup
  useEffect(() => {
    // 1. Fetch Subscription settings
    fetch(`${API_BASE_URL}/api/subscription`)
      .then(res => res.json())
      .then(data => setSubscription(data.subscription))
      .catch(err => console.error('Error fetching subscription:', err))

    // 2. Fetch Portfolio properties
    fetch(`${API_BASE_URL}/api/properties`)
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Error fetching properties:', err))

    // 3. Fetch task reminders
    fetch(`${API_BASE_URL}/api/reminders`)
      .then(res => res.json())
      .then(data => setReminders(data))
      .catch(err => console.error('Error fetching reminders:', err))

    // 4. Fetch maintenance jobs and their matching provider bids
    fetch(`${API_BASE_URL}/api/jobs`)
      .then(res => res.json())
      .then(async (jobsList) => {
        setJobs(jobsList)
        const bidsMap = {}
        for (const job of jobsList) {
          if (job.status === 'bidding') {
            try {
              const resBids = await fetch(`${API_BASE_URL}/api/jobs/${job.id}/bids`)
              const bidsData = await resBids.json()
              bidsMap[job.id] = bidsData
            } catch (e) {
              console.error('Error fetching bids for job:', job.id, e)
            }
          }
        }
        setBids(bidsMap)
      })
      .catch(err => console.error('Error fetching jobs:', err))

    // 5. Fetch collective ZIP pools
    fetch(`${API_BASE_URL}/api/group-deals`)
      .then(res => res.json())
      .then(data => setGroupDeals(data))
      .catch(err => console.error('Error fetching group deals:', err))

    // 6. Fetch testimonial feedback
    fetch(`${API_BASE_URL}/api/feedback`)
      .then(res => res.json())
      .then(data => setFeedback(data))
      .catch(err => console.error('Error fetching feedback:', err))
  }, [])

  // Poll server for new contractor bids if any jobs are currently in 'bidding' status
  useEffect(() => {
    const biddingJobs = jobs.filter(j => j.status === 'bidding')
    if (biddingJobs.length === 0) return

    const interval = setInterval(() => {
      biddingJobs.forEach(job => {
        fetch(`${API_BASE_URL}/api/jobs/${job.id}/bids`)
          .then(res => res.json())
          .then(bidsData => {
            setBids(prev => ({
              ...prev,
              [job.id]: bidsData
            }))
          })
          .catch(e => console.error('Error polling bids:', e))
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [jobs])

  // --- DATABASE SYNC HANDLERS ---

  const handleUpdateSubscription = async (planId) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/subscription`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription: planId })
      })
      const data = await res.json()
      if (data.success) {
        setSubscription(planId)
      }
    } catch (e) {
      console.error('Error saving subscription:', e)
    }
  }

  const handleAddProperty = async (propData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/properties`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propData)
      })
      const newProp = await res.json()
      setProperties([newProp, ...properties])
    } catch (e) {
      console.error('Error creating property:', e)
    }
  }

  const handleUpdateProperty = async (id, propData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/properties/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propData)
      })
      const updatedProp = await res.json()
      setProperties(properties.map(p => p.id === id ? updatedProp : p))
      
      // Refresh reminders since they might contain cached property names
      const resRem = await fetch(`${API_BASE_URL}/api/reminders`)
      const updatedRems = await resRem.json()
      setReminders(updatedRems)
    } catch (e) {
      console.error('Error saving property changes:', e)
    }
  }

  const handleDeleteProperty = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/api/properties/${id}`, { method: 'DELETE' })
      setProperties(properties.filter(p => p.id !== id))
      
      // Refresh reminders since deleted property links fallback to General Admin
      const resRem = await fetch(`${API_BASE_URL}/api/reminders`)
      const updatedRems = await resRem.json()
      setReminders(updatedRems)
    } catch (e) {
      console.error('Error deleting property:', e)
    }
  }

  const handleAddReminder = async (remData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/reminders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(remData)
      })
      const newReminder = await res.json()
      setReminders([newReminder, ...reminders])
    } catch (e) {
      console.error('Error creating task:', e)
    }
  }

  const handleToggleReminder = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/reminders/${id}`, { method: 'PUT' })
      const updated = await res.json()
      setReminders(reminders.map(r => r.id === id ? updated : r))
    } catch (e) {
      console.error('Error toggling task completion:', e)
    }
  }

  const handleDeleteReminder = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/api/reminders/${id}`, { method: 'DELETE' })
      setReminders(reminders.filter(r => r.id !== id))
    } catch (e) {
      console.error('Error removing task:', e)
    }
  }

  const handleAddJob = async (jobData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData)
      })
      const newJob = await res.json()
      setJobs([newJob, ...jobs])
      setBids(prev => ({ ...prev, [newJob.id]: [] }))
    } catch (e) {
      console.error('Error posting maintenance ticket:', e)
    }
  }

  const handleAcceptBid = async (jobId, bid) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs/${jobId}/accept-bid`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bid })
      })
      const updatedJob = await res.json()
      setJobs(jobs.map(j => j.id === jobId ? updatedJob : j))
    } catch (e) {
      console.error('Error hiring contractor:', e)
    }
  }

  const handleToggleGroupDeal = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/group-deals/${id}/toggle`, { method: 'POST' })
      const updated = await res.json()
      setGroupDeals(groupDeals.map(d => d.id === id ? updated : d))
    } catch (e) {
      console.error('Error toggling collective pool:', e)
    }
  }

  const handleAddFeedback = async (feedbackData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData)
      })
      const newReview = await res.json()
      setFeedback([newReview, ...feedback])
    } catch (e) {
      console.error('Error posting feedback reviews:', e)
    }
  }

  // Switch Render Views
  const renderActiveView = () => {
    switch (activeTab) {
      case 'landing':
        return (
          <LandingView
            subscription={subscription}
            setSubscription={handleUpdateSubscription}
            setActiveTab={setActiveTab}
          />
        )
      case 'dashboard':
        return (
          <DashboardView
            properties={properties}
            reminders={reminders}
            jobs={jobs}
            groupDeals={groupDeals}
            setActiveTab={setActiveTab}
          />
        )
      case 'properties':
        return (
          <PropertiesView
            properties={properties}
            onAddProperty={handleAddProperty}
            onUpdateProperty={handleUpdateProperty}
            onDeleteProperty={handleDeleteProperty}
          />
        )
      case 'crowdsource':
        return (
          <CrowdsourceView
            properties={properties}
            jobs={jobs}
            onAddJob={handleAddJob}
            bids={bids}
            onAcceptBid={handleAcceptBid}
            groupDeals={groupDeals}
            onToggleGroupDeal={handleToggleGroupDeal}
          />
        )
      case 'reminders':
        return (
          <RemindersView
            properties={properties}
            reminders={reminders}
            onAddReminder={handleAddReminder}
            onToggleReminder={handleToggleReminder}
            onDeleteReminder={handleDeleteReminder}
          />
        )
      case 'feedback':
        return (
          <FeedbackView
            feedback={feedback}
            onAddFeedback={handleAddFeedback}
          />
        )
      default:
        return <LandingView subscription={subscription} setSubscription={handleUpdateSubscription} setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="app-container">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        subscription={subscription}
      />
      <main className="main-content">
        {renderActiveView()}
      </main>
    </div>
  )
}
