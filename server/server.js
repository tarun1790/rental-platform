import express from 'express'
import cors from 'cors'
import { initDb, dbQuery } from './db.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// --- API ROUTES ---

// 1. Settings / Subscription
app.get('/api/subscription', async (req, res) => {
  try {
    const row = await dbQuery.get("SELECT value FROM settings WHERE key = 'subscription'")
    res.json({ subscription: row ? row.value : 'none' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/subscription', async (req, res) => {
  try {
    const { subscription } = req.body
    await dbQuery.run("INSERT OR REPLACE INTO settings (key, value) VALUES ('subscription', ?)", [subscription])
    res.json({ success: true, subscription })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 2. Properties
app.get('/api/properties', async (req, res) => {
  try {
    const rows = await dbQuery.all('SELECT * FROM properties ORDER BY id DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/properties', async (req, res) => {
  try {
    const {
      address, type, rent, tenantName, tenantEmail, leaseStart, leaseEnd, status,
      purchasePrice, downPaymentPercent, interestRate, loanTermYears, otherPurchaseCosts, repairCost,
      annualPropertyTax, taxIncreasePercent, annualInsurance, insuranceIncreasePercent, monthlyHOA, hoaIncreasePercent,
      annualMaintenance, maintenanceIncreasePercent, otherExpenses, otherExpensesIncreasePercent,
      vacancyRatePercent, managementFeePercent, appreciationRatePercent, holdingPeriodYears, sellingCostPercent,
      schoolElementary, schoolMiddle, schoolHigh, airQualityIndex, fireRisk, soilType, mallsNearby, forestPreserves,
      latitude, longitude, market, units, valueAddPotential, dealStatus
    } = req.body

    const result = await dbQuery.run(
      `INSERT INTO properties (
        address, type, rent, tenantName, tenantEmail, leaseStart, leaseEnd, status,
        purchasePrice, downPaymentPercent, interestRate, loanTermYears, otherPurchaseCosts, repairCost,
        annualPropertyTax, taxIncreasePercent, annualInsurance, insuranceIncreasePercent, monthlyHOA, hoaIncreasePercent,
        annualMaintenance, maintenanceIncreasePercent, otherExpenses, otherExpensesIncreasePercent,
        vacancyRatePercent, managementFeePercent, appreciationRatePercent, holdingPeriodYears, sellingCostPercent,
        schoolElementary, schoolMiddle, schoolHigh, airQualityIndex, fireRisk, soilType, mallsNearby, forestPreserves,
        latitude, longitude, market, units, valueAddPotential, dealStatus
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        address, type, parseFloat(rent) || 0, tenantName || 'Vacant', tenantEmail || '-', leaseStart || '', leaseEnd || '', tenantName ? status : 'Vacant',
        parseFloat(purchasePrice) || 0, parseFloat(downPaymentPercent) || 0, parseFloat(interestRate) || 0, parseInt(loanTermYears) || 0, parseFloat(otherPurchaseCosts) || 0, parseFloat(repairCost) || 0,
        parseFloat(annualPropertyTax) || 0, parseFloat(taxIncreasePercent) || 0, parseFloat(annualInsurance) || 0, parseFloat(insuranceIncreasePercent) || 0, parseFloat(monthlyHOA) || 0, parseFloat(hoaIncreasePercent) || 0,
        parseFloat(annualMaintenance) || 0, parseFloat(maintenanceIncreasePercent) || 0, parseFloat(otherExpenses) || 0, parseFloat(otherExpensesIncreasePercent) || 0,
        parseFloat(vacancyRatePercent) || 0, parseFloat(managementFeePercent) || 0, parseFloat(appreciationRatePercent) || 0, parseInt(holdingPeriodYears) || 0, parseFloat(sellingCostPercent) || 0,
        parseFloat(schoolElementary) || 0, parseFloat(schoolMiddle) || 0, parseFloat(schoolHigh) || 0, parseInt(airQualityIndex) || 0, fireRisk || 'Low', soilType || 'Unknown', mallsNearby || 'None', forestPreserves || 'None',
        parseFloat(latitude) || 0, parseFloat(longitude) || 0,
        market || 'Chicago', parseInt(units) || 1, valueAddPotential || '', dealStatus || 'Passed'
      ]
    )
    const newProp = await dbQuery.get('SELECT * FROM properties WHERE id = ?', [result.id])
    res.json(newProp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.put('/api/properties/:id', async (req, res) => {
  try {
    const {
      address, type, rent, tenantName, tenantEmail, leaseStart, leaseEnd, status,
      purchasePrice, downPaymentPercent, interestRate, loanTermYears, otherPurchaseCosts, repairCost,
      annualPropertyTax, taxIncreasePercent, annualInsurance, insuranceIncreasePercent, monthlyHOA, hoaIncreasePercent,
      annualMaintenance, maintenanceIncreasePercent, otherExpenses, otherExpensesIncreasePercent,
      vacancyRatePercent, managementFeePercent, appreciationRatePercent, holdingPeriodYears, sellingCostPercent,
      schoolElementary, schoolMiddle, schoolHigh, airQualityIndex, fireRisk, soilType, mallsNearby, forestPreserves,
      latitude, longitude, market, units, valueAddPotential, dealStatus
    } = req.body
    const propId = req.params.id
    
    await dbQuery.run(
      `UPDATE properties SET 
        address = ?, type = ?, rent = ?, tenantName = ?, tenantEmail = ?, leaseStart = ?, leaseEnd = ?, status = ?,
        purchasePrice = ?, downPaymentPercent = ?, interestRate = ?, loanTermYears = ?, otherPurchaseCosts = ?, repairCost = ?,
        annualPropertyTax = ?, taxIncreasePercent = ?, annualInsurance = ?, insuranceIncreasePercent = ?, monthlyHOA = ?, hoaIncreasePercent = ?,
        annualMaintenance = ?, maintenanceIncreasePercent = ?, otherExpenses = ?, otherExpensesIncreasePercent = ?,
        vacancyRatePercent = ?, managementFeePercent = ?, appreciationRatePercent = ?, holdingPeriodYears = ?, sellingCostPercent = ?,
        schoolElementary = ?, schoolMiddle = ?, schoolHigh = ?, airQualityIndex = ?, fireRisk = ?, soilType = ?, mallsNearby = ?, forestPreserves = ?,
        latitude = ?, longitude = ?, market = ?, units = ?, valueAddPotential = ?, dealStatus = ?
       WHERE id = ?`,
      [
        address, type, parseFloat(rent) || 0, tenantName || 'Vacant', tenantEmail || '-', leaseStart || '', leaseEnd || '', tenantName ? status : 'Vacant',
        parseFloat(purchasePrice) || 0, parseFloat(downPaymentPercent) || 0, parseFloat(interestRate) || 0, parseInt(loanTermYears) || 0, parseFloat(otherPurchaseCosts) || 0, parseFloat(repairCost) || 0,
        parseFloat(annualPropertyTax) || 0, parseFloat(taxIncreasePercent) || 0, parseFloat(annualInsurance) || 0, parseFloat(insuranceIncreasePercent) || 0, parseFloat(monthlyHOA) || 0, parseFloat(hoaIncreasePercent) || 0,
        parseFloat(annualMaintenance) || 0, parseFloat(maintenanceIncreasePercent) || 0, parseFloat(otherExpenses) || 0, parseFloat(otherExpensesIncreasePercent) || 0,
        parseFloat(vacancyRatePercent) || 0, parseFloat(managementFeePercent) || 0, parseFloat(appreciationRatePercent) || 0, parseInt(holdingPeriodYears) || 0, parseFloat(sellingCostPercent) || 0,
        parseFloat(schoolElementary) || 0, parseFloat(schoolMiddle) || 0, parseFloat(schoolHigh) || 0, parseInt(airQualityIndex) || 0, fireRisk || 'Low', soilType || 'Unknown', mallsNearby || 'None', forestPreserves || 'None',
        parseFloat(latitude) || 0, parseFloat(longitude) || 0,
        market || 'Chicago', parseInt(units) || 1, valueAddPotential || '', dealStatus || 'Passed',
        propId
      ]
    )
    
    // Update property name in reminders associated with this property
    await dbQuery.run('UPDATE reminders SET propertyName = ? WHERE propertyId = ?', [address, propId])
    
    const updatedProp = await dbQuery.get('SELECT * FROM properties WHERE id = ?', [propId])
    res.json(updatedProp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.delete('/api/properties/:id', async (req, res) => {
  try {
    const propId = req.params.id
    await dbQuery.run('DELETE FROM properties WHERE id = ?', [propId])
    // Also remove associated reminders or set them to General
    await dbQuery.run("UPDATE reminders SET propertyId = 'General', propertyName = 'General Admin' WHERE propertyId = ?", [propId])
    res.json({ success: true, message: 'Property deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 3. Reminders
app.get('/api/reminders', async (req, res) => {
  try {
    const rows = await dbQuery.all('SELECT * FROM reminders ORDER BY completed ASC, id DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/reminders', async (req, res) => {
  try {
    const { title, date, priority, category, propertyId, propertyName } = req.body
    const result = await dbQuery.run(
      `INSERT INTO reminders (title, date, priority, category, propertyId, propertyName, completed) 
       VALUES (?, ?, ?, ?, ?, ?, 0)`,
      [title, date, priority, category, propertyId, propertyName]
    )
    const newReminder = await dbQuery.get('SELECT * FROM reminders WHERE id = ?', [result.id])
    res.json(newReminder)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.put('/api/reminders/:id', async (req, res) => {
  try {
    const reminderId = req.params.id
    const reminder = await dbQuery.get('SELECT completed FROM reminders WHERE id = ?', [reminderId])
    if (!reminder) {
      return res.status(404).json({ error: 'Reminder not found' })
    }
    const newStatus = reminder.completed === 1 ? 0 : 1
    await dbQuery.run('UPDATE reminders SET completed = ? WHERE id = ?', [newStatus, reminderId])
    const updated = await dbQuery.get('SELECT * FROM reminders WHERE id = ?', [reminderId])
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.delete('/api/reminders/:id', async (req, res) => {
  try {
    await dbQuery.run('DELETE FROM reminders WHERE id = ?', [req.params.id])
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 4. Maintenance Jobs & Bids
app.get('/api/jobs', async (req, res) => {
  try {
    const rows = await dbQuery.all('SELECT * FROM jobs ORDER BY id DESC')
    // Parse acceptedBid JSON string
    const parsedRows = rows.map(r => ({
      ...r,
      acceptedBid: r.acceptedBid ? JSON.parse(r.acceptedBid) : null
    }))
    res.json(parsedRows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/jobs/:id/bids', async (req, res) => {
  try {
    const rows = await dbQuery.all('SELECT * FROM bids WHERE jobId = ?', [req.params.id])
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/jobs', async (req, res) => {
  try {
    const { title, propertyId, propertyName, category, description, budget } = req.body
    const datePosted = new Date().toLocaleDateString()
    
    const result = await dbQuery.run(
      `INSERT INTO jobs (title, propertyId, propertyName, category, description, budget, status, datePosted, acceptedBid) 
       VALUES (?, ?, ?, ?, ?, ?, 'bidding', ?, NULL)`,
      [title, propertyId, propertyName, category, description, parseFloat(budget), datePosted]
    )

    const newJob = await dbQuery.get('SELECT * FROM jobs WHERE id = ?', [result.id])
    
    // Trigger dynamic auto-bidding simulation in backend
    simulateBids(result.id, category, parseFloat(budget))

    res.json(newJob)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/jobs/:id/accept-bid', async (req, res) => {
  try {
    const jobId = req.params.id
    const { bid } = req.body
    const job = await dbQuery.get('SELECT * FROM jobs WHERE id = ?', [jobId])
    
    if (!job) {
      return res.status(404).json({ error: 'Job not found' })
    }

    const savings = Math.max(0, job.budget - bid.price)
    
    await dbQuery.run(
      "UPDATE jobs SET status = 'active', acceptedBid = ?, savings = ? WHERE id = ?",
      [JSON.stringify(bid), savings, jobId]
    )

    const updatedJob = await dbQuery.get('SELECT * FROM jobs WHERE id = ?', [jobId])
    updatedJob.acceptedBid = JSON.parse(updatedJob.acceptedBid)
    
    res.json(updatedJob)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 5. ZIP Code Collective Pools
app.get('/api/group-deals', async (req, res) => {
  try {
    const rows = await dbQuery.all('SELECT * FROM group_deals')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/group-deals/:id/toggle', async (req, res) => {
  try {
    const dealId = req.params.id
    const deal = await dbQuery.get('SELECT * FROM group_deals WHERE id = ?', [dealId])
    if (!deal) {
      return res.status(404).json({ error: 'Deal not found' })
    }

    const newJoined = deal.joined === 1 ? 0 : 1
    const newCount = newJoined === 1 ? deal.currentCount + 1 : deal.currentCount - 1
    const newUnlocked = newCount >= deal.targetCount ? 1 : 0

    await dbQuery.run(
      'UPDATE group_deals SET joined = ?, currentCount = ?, unlocked = ? WHERE id = ?',
      [newJoined, newCount, newUnlocked, dealId]
    )

    const updated = await dbQuery.get('SELECT * FROM group_deals WHERE id = ?', [dealId])
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 6. Tester Feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const rows = await dbQuery.all('SELECT * FROM feedback ORDER BY id DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/feedback', async (req, res) => {
  try {
    const { name, rating, comment } = req.body
    const date = new Date().toLocaleDateString()
    const result = await dbQuery.run(
      'INSERT INTO feedback (name, rating, comment, date, simulated) VALUES (?, ?, ?, ?, 0)',
      [name, parseInt(rating), comment, date]
    )
    const newFeedback = await dbQuery.get('SELECT * FROM feedback WHERE id = ?', [result.id])
    res.json(newFeedback)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// --- BACKGROUND BID SIMULATOR (SetTimeouts) ---
function simulateBids(jobId, category, budget) {
  const providerNames = {
    Plumbing: ["Apex Plumbing Pros", "BlueFlow Drain Specialists", "Master Plumbers Guild"],
    Electrical: ["VoltSpark Electric", "WireCraft Installations", "Tesla-Grid Experts"],
    HVAC: ["EcoBreeze Heat & Cooling", "ThermalGuard Systems", "AeroVent Techs"],
    Roofing: ["Summit Shingles & Roofs", "RainShield Contracting", "Apex Elevation Roofing"],
    Landscaping: ["EverGreen Lawn Care", "TerraScapes Design", "BloomWood Gardens"],
    Other: ["QuickFix Handyman Co", "ProMaster Repairs", "Elite Home Solutions"]
  }

  const list = providerNames[category] || providerNames.Other

  // Helper to insert a bid
  const createBid = async (name, multiplier, rating, eta) => {
    try {
      const price = Math.round(budget * multiplier)
      // Check if job is still active / bidding before inserting
      const job = await dbQuery.get('SELECT status FROM jobs WHERE id = ?', [jobId])
      if (job && job.status === 'bidding') {
        await dbQuery.run(
          'INSERT INTO bids (jobId, providerName, price, rating, eta, verified) VALUES (?, ?, ?, ?, ?, 1)',
          [jobId, name, price, rating, eta]
        )
        console.log(`Simulated bid added: ${name} ($${price}) for Job ID ${jobId}`)
      }
    } catch (e) {
      console.error('Bidding simulation error: ', e)
    }
  }

  // Schedule Bid 1: 2s (near budget)
  setTimeout(() => {
    createBid(list[0], 1.05, 4.4, "Today, 4 PM")
  }, 2000)

  // Schedule Bid 2: 4s (saves ~8%)
  setTimeout(() => {
    createBid(list[1] || list[0], 0.92, 4.7, "Tomorrow, 9 AM")
  }, 4500)

  // Schedule Bid 3: 6.5s (saves ~14%)
  setTimeout(() => {
    createBid(list[2] || list[0], 0.86, 4.9, "In 2 days")
  }, 7000)
}

// --- START SERVER ---
async function start() {
  try {
    await initDb()
    app.listen(PORT, () => {
      console.log(`RealPal API Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Server failed to start:', error)
    process.exit(1)
  }
}

start()
