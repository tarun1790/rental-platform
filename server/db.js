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
    const hasMarket = tableInfo.some(col => col.name === 'market');
    if (tableInfo.length > 0 && !hasMarket) {
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

  // 2. Properties Table (Upgraded with ROI and Environmental fields)
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
      longitude REAL,
      market TEXT,
      units INTEGER,
      valueAddPotential TEXT,
      dealStatus TEXT
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
      (1, '1422 N La Salle Dr, Chicago, IL 60610', 'Single Family', 3100, 'John Herman', 'john.herman@gmail.com', '2025-01-01', '2026-12-31', 'Occupied',
       320000, 25, 7.0, 30, 6000, 20000,
       9000, 3, 1200, 3, 0, 3,
       2000, 3, 500, 3,
       5, 0, 3, 5, 5,
       8.5, 9.0, 8.8, 32, 'Low', 'Sandy clay, stable', 'Water Tower Place, 900 N Michigan', 'Lincoln Park, Oak Street Beach',
       41.9082, -87.6322),
      (2, '730 W Wrightwood Ave, Apt 2B, Chicago, IL 60614', 'Apartment', 2200, 'Sarah Jenkins', 'sarah.j@outlook.com', '2025-07-01', '2026-06-30', 'Occupied',
       280000, 20, 6.8, 30, 5000, 5000,
       3600, 2, 900, 2, 250, 2,
       1500, 2, 300, 2,
       4, 8, 4, 10, 6,
       9.0, 8.5, 9.2, 45, 'Very Low', 'Sandy loam, stable', 'Lincoln Common, Clark & Belmont', 'Lincoln Park Zoo',
       41.9291, -87.6475),
      (3, '505 N Lake Shore Dr, Condominium 3210, Chicago, IL 60611', 'Condo', 2600, 'Vacant', '-', '', '', 'Vacant',
       450000, 25, 7.2, 30, 8000, 0,
       5400, 3, 1000, 3, 350, 3,
       2000, 3, 400, 3,
       5, 10, 3.5, 7, 5,
       8.0, 8.0, 8.5, 28, 'Low', 'Clay loam, stable', 'Navy Pier, Shops at North Bridge', 'Lakefront Trail, Milton Lee Olive Park',
       41.8914, -87.6139),
      (4, '2111 W Division St, Chicago, IL 60622', 'Single Family', 2900, 'Vacant', '-', '', '', 'Vacant',
       380000, 25, 7.1, 30, 6000, 10000,
       7200, 3, 1100, 3, 0, 3,
       1800, 3, 450, 3,
       5, 0, 3.0, 5, 5,
       7.8, 8.2, 8.0, 36, 'Low', 'Clay loam, stable', 'Wicker Park Plaza', 'Humboldt Park',
       41.9034, -87.6802),
      (5, '1224 W Adams St, Apt 4F, Chicago, IL 60607', 'Apartment', 2400, 'Michael Chang', 'mchang@gmail.com', '2025-03-01', '2026-02-28', 'Occupied',
       300000, 25, 6.9, 30, 5500, 3000,
       4800, 3, 950, 3, 150, 3,
       1600, 3, 350, 3,
       5, 0, 3.2, 5, 5,
       8.2, 8.0, 8.4, 40, 'Low', 'Loamy silt, stable', 'West Loop Galleria', 'Mary Bartelme Park',
       41.8794, -87.6582),
      (6, '835 W Grand Ave, Chicago, IL 60622', 'Townhouse', 2800, 'Vacant', '-', '', '', 'Vacant',
       340000, 25, 7.0, 30, 6000, 8000,
       6000, 3, 1150, 3, 100, 3,
       1700, 3, 400, 3,
       5, 0, 3.0, 5, 5,
       7.5, 7.8, 8.0, 35, 'Low', 'Sandy clay, stable', 'Fulton Market Gateway', 'Union Park',
       41.8912, -87.6492),
      (7, '1610 W Belden Ave, Chicago, IL 60614', 'Single Family', 3300, 'David Rossi', 'drossi@gmail.com', '2025-05-01', '2026-04-30', 'Occupied',
       390000, 25, 6.8, 30, 7000, 12000,
       8200, 3, 1250, 3, 0, 3,
       2100, 3, 500, 3,
       5, 0, 3.5, 5, 5,
       9.2, 9.0, 9.5, 30, 'Low', 'Sandy loam, stable', 'Webster Place, Lincoln Common', 'Trebes Park',
       41.9238, -87.6685),
      (8, '2930 N Pine Grove Ave, Apt 5A, Chicago, IL 60657', 'Apartment', 2050, 'Anna Kowalski', 'akowalski@outlook.com', '2025-09-01', '2026-08-31', 'Occupied',
       260000, 20, 6.7, 30, 4800, 2000,
       3400, 2, 850, 2, 200, 2,
       1400, 2, 300, 2,
       4, 8, 4.0, 6, 5,
       8.8, 8.5, 9.0, 42, 'Very Low', 'Sandy loam, stable', 'Lakeview Plaza, Clark & Belmont', 'Waveland Park, Belmont Harbor',
       41.9355, -87.6415),
      (9, '600 N Lake Shore Dr, Condo 1404, Chicago, IL 60611', 'Condo', 2700, 'Emily Taylor', 'etaylor@gmail.com', '2025-11-01', '2026-10-31', 'Occupied',
       480000, 25, 7.3, 30, 9000, 1000,
       5800, 3, 1100, 3, 400, 3,
       2200, 3, 450, 3,
       5, 10, 3.8, 8, 5,
       8.5, 8.5, 8.8, 30, 'Low', 'Clay loam, stable', 'Navy Pier Shops, Water Tower Place', 'Lakefront Trail, Ohio Street Beach',
       41.8931, -87.6142),
      (10, '1845 N Halsted St, Chicago, IL 60614', 'Single Family', 3500, 'Vacant', '-', '', '', 'Vacant',
       420000, 25, 7.0, 30, 7500, 15000,
       9500, 3, 1300, 3, 0, 3,
       2400, 3, 600, 3,
       5, 0, 3.5, 5, 5,
       9.5, 9.2, 9.5, 31, 'Low', 'Sandy clay, stable', 'Lincoln Common, Clybourn Corridor', 'Oz Park',
       41.9158, -87.6481)
    `)

    // Seed Reminders
    await dbQuery.run(`
      INSERT INTO reminders (title, date, priority, category, propertyId, propertyName, completed) VALUES
      ('Schedule annual gas safety inspection', '2026-07-15', 'High', 'Compliance', '1', '1422 N La Salle Dr, Chicago, IL 60610', 0),
      ('Confirm receipt of June Rent', '2026-06-05', 'Medium', 'Rent', '2', '730 W Wrightwood Ave, Apt 2B, Chicago, IL 60614', 1),
      ('Replace furnace filters & test alarms', '2026-06-25', 'High', 'Maintenance', '1', '1422 N La Salle Dr, Chicago, IL 60610', 0),
      ('Submit quarterly rental tax filings', '2026-07-31', 'Medium', 'Tax', 'General', 'General Admin', 0)
    `)

    // Seed Jobs
    await dbQuery.run(`
      INSERT INTO jobs (id, title, propertyId, propertyName, category, description, budget, status, datePosted, acceptedBid) VALUES
      (1, 'Hot Water Heater Leakage', '1', '1422 N La Salle Dr, Chicago, IL 60610', 'Plumbing', 'Tank valve is leaking minor pooling under hot water unit. Needs inspection and fitting replacement.', 350, 'bidding', '2026-06-18', NULL)
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
