import sqlite3 from 'sqlite3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ensure server directory exists
const dbDir = __dirname
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

const dbPath = path.join(dbDir, 'realpal.db')
const db = new sqlite3.Database(dbPath)

// Wrap sqlite3 operations in Promises for async/await support
export const dbQuery = {
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        if (err) reject(err)
        else resolve({ id: this.lastID, changes: this.changes })
      })
    })
  },
  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) reject(err)
        else resolve(row)
      })
    })
  },
  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      })
    })
  }
}

export async function initDb() {
  console.log('Initializing RealPal Database...')

  // Detect and perform schema upgrade if properties table is outdated
  try {
    const tableInfo = await dbQuery.all("PRAGMA table_info(properties)");
    const hasPurchasePrice = tableInfo.some(col => col.name === 'purchasePrice');
    if (tableInfo.length > 0 && !hasPurchasePrice) {
      console.log('Detected outdated properties schema. Upgrading database...');
      await dbQuery.run('DROP TABLE IF EXISTS properties');
      await dbQuery.run('DROP TABLE IF EXISTS reminders');
      await dbQuery.run('DROP TABLE IF EXISTS jobs');
      await dbQuery.run('DROP TABLE IF EXISTS bids');
      await dbQuery.run('DROP TABLE IF EXISTS group_deals');
      await dbQuery.run('DROP TABLE IF EXISTS feedback');
    }
  } catch (err) {
    console.error('Error checking schema:', err);
  }
  
  // 1. Settings Table
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    )
  `)

  // 2. Properties Table (Upgraded with ROI and Zillow-like fields)
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      address TEXT NOT NULL,
      type TEXT,
      rent REAL,
      tenantName TEXT,
      tenantEmail TEXT,
      leaseStart TEXT,
      leaseEnd TEXT,
      status TEXT,
      purchasePrice REAL,
      downPaymentPercent REAL,
      interestRate REAL,
      loanTermYears INTEGER,
      otherPurchaseCosts REAL,
      repairCost REAL,
      annualPropertyTax REAL,
      taxIncreasePercent REAL,
      annualInsurance REAL,
      insuranceIncreasePercent REAL,
      monthlyHOA REAL,
      hoaIncreasePercent REAL,
      annualMaintenance REAL,
      maintenanceIncreasePercent REAL,
      otherExpenses REAL,
      otherExpensesIncreasePercent REAL,
      vacancyRatePercent REAL,
      managementFeePercent REAL,
      appreciationRatePercent REAL,
      holdingPeriodYears INTEGER,
      sellingCostPercent REAL,
      schoolElementary REAL,
      schoolMiddle REAL,
      schoolHigh REAL,
      airQualityIndex INTEGER,
      fireRisk TEXT,
      soilType TEXT,
      mallsNearby TEXT,
      forestPreserves TEXT,
      latitude REAL,
      longitude REAL
    )
  `)

  // 3. Reminders Table
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS reminders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      date TEXT,
      priority TEXT,
      category TEXT,
      propertyId TEXT,
      propertyName TEXT,
      completed INTEGER DEFAULT 0
    )
  `)

  // 4. Jobs Table
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      propertyId TEXT,
      propertyName TEXT,
      category TEXT,
      description TEXT,
      budget REAL,
      status TEXT,
      datePosted TEXT,
      acceptedBid TEXT,
      savings REAL DEFAULT 0
    )
  `)

  // 5. Bids Table
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS bids (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      jobId TEXT,
      providerName TEXT,
      price REAL,
      rating REAL,
      eta TEXT,
      verified INTEGER DEFAULT 1
    )
  `)

  // 6. Group Deals Table
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS group_deals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      zipCode TEXT,
      serviceType TEXT,
      description TEXT,
      bulkPrice REAL,
      discountPercent REAL,
      currentCount INTEGER,
      targetCount INTEGER,
      joined INTEGER DEFAULT 0,
      unlocked INTEGER DEFAULT 0
    )
  `)

  // 7. Feedback Table
  await dbQuery.run(`
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      rating INTEGER,
      comment TEXT,
      date TEXT,
      simulated INTEGER DEFAULT 0
    )
  `)

  // --- SEED DEFAULT DATA IF DATABASE IS EMPTY ---
  const propCheck = await dbQuery.get('SELECT COUNT(*) as count FROM properties')
  if (propCheck.count === 0) {
    console.log('Seeding default RealPal dataset...')

    // Seed Settings
    await dbQuery.run("INSERT INTO settings (key, value) VALUES ('subscription', 'premium')")

    // Seed Properties
    await dbQuery.run(`
      INSERT INTO properties (
        id, address, type, rent, tenantName, tenantEmail, leaseStart, leaseEnd, status,
        purchasePrice, downPaymentPercent, interestRate, loanTermYears, otherPurchaseCosts, repairCost,
        annualPropertyTax, taxIncreasePercent, annualInsurance, insuranceIncreasePercent, monthlyHOA, hoaIncreasePercent,
        annualMaintenance, maintenanceIncreasePercent, otherExpenses, otherExpensesIncreasePercent,
        vacancyRatePercent, managementFeePercent, appreciationRatePercent, holdingPeriodYears, sellingCostPercent,
        schoolElementary, schoolMiddle, schoolHigh, airQualityIndex, fireRisk, soilType, mallsNearby, forestPreserves,
        latitude, longitude
      ) VALUES
      (1, '1208 Whispering Pines Dr, San Jose, CA 94043', 'Single Family', 3200, 'John Herman', 'john.herman@gmail.com', '2025-01-01', '2026-12-31', 'Occupied',
       320000, 25, 7.0, 30, 6000, 20000,
       9000, 3, 1200, 3, 0, 3,
       2000, 3, 500, 3,
       5, 0, 3, 5, 5,
       8.5, 9.0, 8.8, 32, 'Low', 'Clay loam, stable', 'Westfield Valley Fair, Santana Row', 'Alum Rock Park, Sierra Vista Open Space',
       37.3382, -121.8863),
      (2, '450 Ocean Breeze Ave, Apt 3B, Santa Monica, CA 90025', 'Apartment', 2200, 'Sarah Jenkins', 'sarah.j@outlook.com', '2025-07-01', '2026-06-30', 'Occupied',
       280000, 20, 6.8, 30, 5000, 5000,
       3600, 2, 900, 2, 250, 2,
       1500, 2, 300, 2,
       4, 8, 4, 10, 6,
       9.0, 8.5, 9.2, 45, 'Very Low', 'Sandy loam, stable', 'Santa Monica Place, Third Street Promenade', 'Santa Monica Mountains Recreation Area',
       34.0194, -118.4912),
      (3, '789 Summit Boulevard, Condominium 12, Seattle, WA 98101', 'Condo', 2400, 'Vacant', '-', '', '', 'Vacant',
       450000, 25, 7.2, 30, 8000, 0,
       5400, 3, 1000, 3, 350, 3,
       2000, 3, 400, 3,
       5, 10, 3.5, 7, 5,
       8.0, 8.0, 8.5, 28, 'Low', 'Glacial till, stable', 'Pacific Place, Westlake Center', 'Discovery Park, Volunteer Park',
       47.6062, -122.3321)
    `)

    // Seed Reminders
    await dbQuery.run(`
      INSERT INTO reminders (title, date, priority, category, propertyId, propertyName, completed) VALUES
      ('Schedule annual gas safety inspection', '2026-07-15', 'High', 'Compliance', '1', '1208 Whispering Pines Dr, San Jose, CA 94043', 0),
      ('Confirm receipt of June Rent', '2026-06-05', 'Medium', 'Rent', '2', '450 Ocean Breeze Ave, Apt 3B, Santa Monica, CA 90025', 1),
      ('Replace furnace filters & test alarms', '2026-06-25', 'High', 'Maintenance', '1', '1208 Whispering Pines Dr, San Jose, CA 94043', 0),
      ('Submit quarterly rental tax filings', '2026-07-31', 'Medium', 'Tax', 'General', 'General Admin', 0)
    `)

    // Seed Jobs
    await dbQuery.run(`
      INSERT INTO jobs (id, title, propertyId, propertyName, category, description, budget, status, datePosted, acceptedBid) VALUES
      (1, 'Hot Water Heater Leakage', '1', '1208 Whispering Pines Dr, San Jose, CA 94043', 'Plumbing', 'Tank valve is leaking minor pooling under hot water unit. Needs inspection and fitting replacement.', 350, 'bidding', '2026-06-18', NULL)
    `)

    // Seed Bids
    await dbQuery.run(`
      INSERT INTO bids (id, jobId, providerName, price, rating, eta, verified) VALUES
      (1, '1', 'Apex Plumbing Pros', 365, 4.4, 'Today, 4 PM', 1),
      (2, '1', 'BlueFlow Drain Specialists', 320, 4.7, 'Tomorrow, 9 AM', 1)
    `)

    // Seed Group Deals
    await dbQuery.run(`
      INSERT INTO group_deals (id, zipCode, serviceType, description, bulkPrice, discountPercent, currentCount, targetCount, joined, unlocked) VALUES
      (1, '94043', 'HVAC Air Filter & Maintenance Package', 'Collective HVAC tune-up service. Standard rate $180, bulk pool drops to $150. Requires 5 properties.', 150, 15, 4, 5, 0, 0),
      (2, '90025', 'Spring Gutter Cleaning & Flushing', 'Collective gutter cleaning package. Group rate drops pricing by 20%. Requires 6 properties in Santa Monica.', 120, 20, 5, 6, 0, 0),
      (3, '98101', 'Semi-annual Carpet Deep Cleaning', 'Pool carpet cleaning orders. Save 10% on service fees. Requires 4 condo units in Seattle.', 200, 10, 1, 4, 0, 0)
    `)

    // Seed Tester Feedback
    await dbQuery.run(`
      INSERT INTO feedback (name, rating, comment, date, simulated) VALUES
      ('John Herman', 5, 'The bidding simulator works great. Pre-negotiated contractor rates will save independent landlords hundreds on repairs.', '2026-06-19', 1),
      ('Rohit Parthi', 5, 'As a landlord, tenant turnover and repairs are my biggest stress. Tracking lease timelines and service dispatching under one dashboard is huge.', '2026-06-18', 1),
      ('Harsha Pilli', 4, 'The collective ZIP code pools make total sense. Grouping common chores like gutter cleaning or HVAC filter updates saves both money and scheduling hassles.', '2026-06-18', 1),
      ('Chandu V', 5, 'Love the look. Clean visual design system. The compliance checklists and alerts are exactly what I need for tax filings.', '2026-06-17', 1)
    `)

    console.log('Database seeded successfully.')
  } else {
    console.log('Existing RealPal database found. Seeding skipped.')
  }
}
