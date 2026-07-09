import React, { useState, useEffect } from 'react'

export default function PropertiesView({ properties, onAddProperty, onUpdateProperty, onDeleteProperty }) {
  // Navigation & Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState('portfolio') // 'portfolio' (Zillow Search Map), 'compare'
  
  // Selection states
  const [selectedPropertyId, setSelectedPropertyId] = useState(null)
  const [comparedPropertyIds, setComparedPropertyIds] = useState([])
  const [activeDetailProp, setActiveDetailProp] = useState(null)

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [maxRentFilter, setMaxRentFilter] = useState('Any')
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('Any')
  const [minBedsFilter, setMinBedsFilter] = useState('Any')

  // Modals & Forms
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  
  // Property Form States
  const [address, setAddress] = useState('')
  const [type, setType] = useState('Single Family')
  const [rent, setRent] = useState('')
  const [tenantName, setTenantName] = useState('')
  const [tenantEmail, setTenantEmail] = useState('')
  const [leaseStart, setLeaseStart] = useState('')
  const [leaseEnd, setLeaseEnd] = useState('')
  const [status, setStatus] = useState('Occupied')

  // Financial Inputs
  const [purchasePrice, setPurchasePrice] = useState(320000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(25)
  const [interestRate, setInterestRate] = useState(7.0)
  const [loanTermYears, setLoanTermYears] = useState(30)
  const [otherPurchaseCosts, setOtherPurchaseCosts] = useState(6000)
  const [repairCost, setRepairCost] = useState(20000)
  const [annualPropertyTax, setAnnualPropertyTax] = useState(9000)
  const [taxIncreasePercent, setTaxIncreasePercent] = useState(3)
  const [annualInsurance, setAnnualInsurance] = useState(1200)
  const [insuranceIncreasePercent, setInsuranceIncreasePercent] = useState(3)
  const [monthlyHOA, setMonthlyHOA] = useState(0)
  const [hoaIncreasePercent, setHoaIncreasePercent] = useState(3)
  const [annualMaintenance, setAnnualMaintenance] = useState(2000)
  const [maintenanceIncreasePercent, setMaintenanceIncreasePercent] = useState(3)
  const [otherExpenses, setOtherExpenses] = useState(500)
  const [otherExpensesIncreasePercent, setOtherExpensesIncreasePercent] = useState(3)
  const [vacancyRatePercent, setVacancyRatePercent] = useState(5)
  const [managementFeePercent, setManagementFeePercent] = useState(0)
  const [appreciationRatePercent, setAppreciationRatePercent] = useState(3)
  const [holdingPeriodYears, setHoldingPeriodYears] = useState(5)
  const [sellingCostPercent, setSellingCostPercent] = useState(5)

  // Zillow/Geographical Inputs
  const [schoolElementary, setSchoolElementary] = useState(8.5)
  const [schoolMiddle, setSchoolMiddle] = useState(9.0)
  const [schoolHigh, setSchoolHigh] = useState(8.8)
  const [airQualityIndex, setAirQualityIndex] = useState(32)
  const [fireRisk, setFireRisk] = useState('Low')
  const [soilType, setSoilType] = useState('Clay loam, stable')
  const [mallsNearby, setMallsNearby] = useState('Westfield Valley Fair, Santana Row')
  const [forestPreserves, setForestPreserves] = useState('Alum Rock Park, Sierra Vista Open Space')
  const [latitude, setLatitude] = useState(37.3382)
  const [longitude, setLongitude] = useState(-121.8863)

  // Reset form helper
  const resetForm = () => {
    setAddress('')
    setType('Single Family')
    setRent('')
    setTenantName('')
    setTenantEmail('')
    setLeaseStart('')
    setLeaseEnd('')
    setStatus('Occupied')
    setPurchasePrice(320000)
    setDownPaymentPercent(25)
    setInterestRate(7.0)
    setLoanTermYears(30)
    setOtherPurchaseCosts(6000)
    setRepairCost(20000)
    setAnnualPropertyTax(9000)
    setTaxIncreasePercent(3)
    setAnnualInsurance(1200)
    setInsuranceIncreasePercent(3)
    setMonthlyHOA(0)
    setHoaIncreasePercent(3)
    setAnnualMaintenance(2000)
    setMaintenanceIncreasePercent(3)
    setOtherExpenses(500)
    setOtherExpensesIncreasePercent(3)
    setVacancyRatePercent(5)
    setManagementFeePercent(0)
    setAppreciationRatePercent(3)
    setHoldingPeriodYears(5)
    setSellingCostPercent(5)
    setSchoolElementary(8.5)
    setSchoolMiddle(9.0)
    setSchoolHigh(8.8)
    setAirQualityIndex(32)
    setFireRisk('Low')
    setSoilType('Clay loam, stable')
    setMallsNearby('Westfield Valley Fair, Santana Row')
    setForestPreserves('Alum Rock Park, Sierra Vista Open Space')
    setLatitude(37.3382)
    setLongitude(-121.8863)
    setEditingProperty(null)
  }

  // Edit population
  const handleStartEdit = (prop, e) => {
    e.stopPropagation()
    setEditingProperty(prop)
    setAddress(prop.address)
    setType(prop.type)
    setRent(prop.rent)
    setTenantName(prop.tenantName === 'Vacant' ? '' : prop.tenantName)
    setTenantEmail(prop.tenantEmail === '-' ? '' : prop.tenantEmail)
    setLeaseStart(prop.leaseStart || '')
    setLeaseEnd(prop.leaseEnd || '')
    setStatus(prop.status)
    setPurchasePrice(prop.purchasePrice ?? 320000)
    setDownPaymentPercent(prop.downPaymentPercent ?? 25)
    setInterestRate(prop.interestRate ?? 7.0)
    setLoanTermYears(prop.loanTermYears ?? 30)
    setOtherPurchaseCosts(prop.otherPurchaseCosts ?? 6000)
    setRepairCost(prop.repairCost ?? 20000)
    setAnnualPropertyTax(prop.annualPropertyTax ?? 9000)
    setTaxIncreasePercent(prop.taxIncreasePercent ?? 3)
    setAnnualInsurance(prop.annualInsurance ?? 1200)
    setInsuranceIncreasePercent(prop.insuranceIncreasePercent ?? 3)
    setMonthlyHOA(prop.monthlyHOA ?? 0)
    setHoaIncreasePercent(prop.hoaIncreasePercent ?? 3)
    setAnnualMaintenance(prop.annualMaintenance ?? 2000)
    setMaintenanceIncreasePercent(prop.maintenanceIncreasePercent ?? 3)
    setOtherExpenses(prop.otherExpenses ?? 500)
    setOtherExpensesIncreasePercent(prop.otherExpensesIncreasePercent ?? 3)
    setVacancyRatePercent(prop.vacancyRatePercent ?? 5)
    setManagementFeePercent(prop.managementFeePercent ?? 0)
    setAppreciationRatePercent(prop.appreciationRatePercent ?? 3)
    setHoldingPeriodYears(prop.holdingPeriodYears ?? 5)
    setSellingCostPercent(prop.sellingCostPercent ?? 5)
    setSchoolElementary(prop.schoolElementary ?? 8.5)
    setSchoolMiddle(prop.schoolMiddle ?? 9.0)
    setSchoolHigh(prop.schoolHigh ?? 8.8)
    setAirQualityIndex(prop.airQualityIndex ?? 32)
    setFireRisk(prop.fireRisk ?? 'Low')
    setSoilType(prop.soilType ?? 'Clay loam, stable')
    setMallsNearby(prop.mallsNearby ?? 'Westfield Valley Fair, Santana Row')
    setForestPreserves(prop.forestPreserves ?? 'Alum Rock Park, Sierra Vista Open Space')
    setLatitude(prop.latitude ?? 37.3382)
    setLongitude(prop.longitude ?? -121.8863)
    setShowAddModal(true)
  }

  const getFormData = () => {
    return {
      address,
      type,
      rent: parseFloat(rent) || 0,
      tenantName: tenantName || 'Vacant',
      tenantEmail: tenantEmail || '-',
      leaseStart: leaseStart || '',
      leaseEnd: leaseEnd || '',
      status: tenantName ? status : 'Vacant',
      purchasePrice: parseFloat(purchasePrice) || 0,
      downPaymentPercent: parseFloat(downPaymentPercent) || 0,
      interestRate: parseFloat(interestRate) || 0,
      loanTermYears: parseInt(loanTermYears) || 0,
      otherPurchaseCosts: parseFloat(otherPurchaseCosts) || 0,
      repairCost: parseFloat(repairCost) || 0,
      annualPropertyTax: parseFloat(annualPropertyTax) || 0,
      taxIncreasePercent: parseFloat(taxIncreasePercent) || 0,
      annualInsurance: parseFloat(annualInsurance) || 0,
      insuranceIncreasePercent: parseFloat(insuranceIncreasePercent) || 0,
      monthlyHOA: parseFloat(monthlyHOA) || 0,
      hoaIncreasePercent: parseFloat(hoaIncreasePercent) || 0,
      annualMaintenance: parseFloat(annualMaintenance) || 0,
      maintenanceIncreasePercent: parseFloat(maintenanceIncreasePercent) || 0,
      otherExpenses: parseFloat(otherExpenses) || 0,
      otherExpensesIncreasePercent: parseFloat(otherExpensesIncreasePercent) || 0,
      vacancyRatePercent: parseFloat(vacancyRatePercent) || 0,
      managementFeePercent: parseFloat(managementFeePercent) || 0,
      appreciationRatePercent: parseFloat(appreciationRatePercent) || 0,
      holdingPeriodYears: parseInt(holdingPeriodYears) || 0,
      sellingCostPercent: parseFloat(sellingCostPercent) || 0,
      schoolElementary: parseFloat(schoolElementary) || 0,
      schoolMiddle: parseFloat(schoolMiddle) || 0,
      schoolHigh: parseFloat(schoolHigh) || 0,
      airQualityIndex: parseInt(airQualityIndex) || 0,
      fireRisk: fireRisk || 'Low',
      soilType: soilType || 'Unknown',
      mallsNearby: mallsNearby || 'None',
      forestPreserves: forestPreserves || 'None',
      latitude: parseFloat(latitude) || 0,
      longitude: parseFloat(longitude) || 0
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!address || !rent) return

    if (editingProperty) {
      await onUpdateProperty(editingProperty.id, getFormData())
    } else {
      await onAddProperty(getFormData())
    }
    setShowAddModal(false)
    resetForm()
  }

  const handleDeleteProperty = (id, e) => {
    e.stopPropagation()
    if (confirm("Are you sure you want to remove this property? All associated tenant tracking will be cleared.")) {
      onDeleteProperty(id)
      if (activeDetailProp?.id === id) setActiveDetailProp(null)
    }
  }

  // Financial Engine
  const calculateROI = (prop) => {
    const price = prop.purchasePrice || 320000
    const downPayment = price * ((prop.downPaymentPercent ?? 25) / 100)
    const loanAmount = price - downPayment
    const monthlyInterest = ((prop.interestRate ?? 7.0) / 100) / 12
    const totalPayments = (prop.loanTermYears ?? 30) * 12

    let monthlyMortgage = 0
    if (monthlyInterest > 0 && totalPayments > 0) {
      monthlyMortgage = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) / (Math.pow(1 + monthlyInterest, totalPayments) - 1)
    } else if (totalPayments > 0) {
      monthlyMortgage = loanAmount / totalPayments
    }

    const initialCash = downPayment + (prop.otherPurchaseCosts ?? 6000) + (prop.repairCost ?? 20000)
    const monthlyRent = prop.rent || 0
    const annualRent = monthlyRent * 12
    const vacancyLoss = annualRent * ((prop.vacancyRatePercent ?? 5) / 100)
    const managementCost = (annualRent - vacancyLoss) * ((prop.managementFeePercent ?? 0) / 100)

    const annualExpenses = (prop.annualPropertyTax ?? 9000) + 
                           (prop.annualInsurance ?? 1200) + 
                           ((prop.monthlyHOA ?? 0) * 12) + 
                           (prop.annualMaintenance ?? 2000) + 
                           (prop.otherExpenses ?? 500) + 
                           vacancyLoss + 
                           managementCost

    const noi = Math.max(0, annualRent - annualExpenses)
    const annualDebtService = monthlyMortgage * 12
    const cashFlow = noi - annualDebtService
    
    const capRate = price > 0 ? (noi / price) * 100 : 0
    const cashOnCash = initialCash > 0 ? (cashFlow / initialCash) * 100 : 0

    // Build multi-year projections array
    const years = prop.holdingPeriodYears ?? 5
    const projections = []
    let currentValue = price
    let currentRent = monthlyRent * 12
    let currentTax = prop.annualPropertyTax ?? 9000
    let currentInsurance = prop.annualInsurance ?? 1200
    let currentHOA = (prop.monthlyHOA ?? 0) * 12
    let currentMaint = prop.annualMaintenance ?? 2000
    let currentOther = prop.otherExpenses ?? 500
    let cumulativeCashFlow = 0

    for (let y = 1; y <= years; y++) {
      currentValue = currentValue * (1 + (prop.appreciationRatePercent ?? 3) / 100)
      
      if (y > 1) {
        currentRent = currentRent * (1 + 3 / 100) // Default 3% rent growth
        currentTax = currentTax * (1 + (prop.taxIncreasePercent ?? 3) / 100)
        currentInsurance = currentInsurance * (1 + (prop.insuranceIncreasePercent ?? 3) / 100)
        currentHOA = currentHOA * (1 + (prop.hoaIncreasePercent ?? 3) / 100)
        currentMaint = currentMaint * (1 + (prop.maintenanceIncreasePercent ?? 3) / 100)
        currentOther = currentOther * (1 + (prop.otherExpensesIncreasePercent ?? 3) / 100)
      }

      const yVacancy = currentRent * ((prop.vacancyRatePercent ?? 5) / 100)
      const yManagement = (currentRent - yVacancy) * ((prop.managementFeePercent ?? 0) / 100)
      const yExpenses = currentTax + currentInsurance + currentHOA + currentMaint + currentOther + yVacancy + yManagement
      
      const yNOI = Math.max(0, currentRent - yExpenses)
      const yCashFlow = yNOI - annualDebtService
      cumulativeCashFlow += yCashFlow

      let remainingBalance = 0
      const elapsedMonths = y * 12
      if (monthlyInterest > 0 && totalPayments > 0 && elapsedMonths < totalPayments) {
        remainingBalance = loanAmount * (Math.pow(1 + monthlyInterest, totalPayments) - Math.pow(1 + monthlyInterest, elapsedMonths)) / (Math.pow(1 + monthlyInterest, totalPayments) - 1)
      } else if (elapsedMonths >= totalPayments) {
        remainingBalance = 0
      } else {
        remainingBalance = loanAmount - (loanAmount * (elapsedMonths / totalPayments))
      }

      const equity = Math.max(0, currentValue - remainingBalance)

      projections.push({
        year: y,
        value: Math.round(currentValue),
        income: Math.round(currentRent),
        expenses: Math.round(yExpenses),
        cashFlow: Math.round(yCashFlow),
        equity: Math.round(equity),
        loanBalance: Math.round(remainingBalance)
      })
    }

    return {
      downPayment,
      loanAmount,
      monthlyMortgage,
      initialCash,
      vacancyLoss,
      managementCost,
      annualExpenses,
      noi,
      cashFlow,
      capRate,
      cashOnCash,
      projections
    }
  }

  // Filter listings
  const filteredProperties = properties.filter(prop => {
    // Search query match
    if (searchQuery && !prop.address.toLowerCase().includes(searchQuery.toLowerCase())) return false
    // Max rent match
    if (maxRentFilter !== 'Any' && prop.rent > parseInt(maxRentFilter)) return false
    // Home type match
    if (propertyTypeFilter !== 'Any' && prop.type !== propertyTypeFilter) return false
    return true
  })

  // Set default details prop if null
  useEffect(() => {
    if (filteredProperties.length > 0 && !activeDetailProp) {
      setActiveDetailProp(filteredProperties[0])
    }
  }, [filteredProperties, activeDetailProp])

  // Compare listings
  const toggleCompareSelect = (id, e) => {
    e.stopPropagation()
    if (comparedPropertyIds.includes(id)) {
      setComparedPropertyIds(comparedPropertyIds.filter(pid => pid !== id))
    } else {
      if (comparedPropertyIds.length >= 3) {
        alert("You can compare a maximum of 3 properties side-by-side.")
        return
      }
      setComparedPropertyIds([...comparedPropertyIds, id])
    }
  }

  // ROI Calculator Ad-hoc calculation updates
  const handleLoadPropertyToCalculator = (prop) => {
    setPurchasePrice(prop.purchasePrice ?? 320000)
    setDownPaymentPercent(prop.downPaymentPercent ?? 25)
    setInterestRate(prop.interestRate ?? 7.0)
    setLoanTermYears(prop.loanTermYears ?? 30)
    setOtherPurchaseCosts(prop.otherPurchaseCosts ?? 6000)
    setRepairCost(prop.repairCost ?? 20000)
    setAnnualPropertyTax(prop.annualPropertyTax ?? 9000)
    setTaxIncreasePercent(prop.taxIncreasePercent ?? 3)
    setAnnualInsurance(prop.annualInsurance ?? 1200)
    setInsuranceIncreasePercent(prop.insuranceIncreasePercent ?? 3)
    setMonthlyHOA(prop.monthlyHOA ?? 0)
    setHoaIncreasePercent(prop.hoaIncreasePercent ?? 3)
    setAnnualMaintenance(prop.annualMaintenance ?? 2000)
    setMaintenanceIncreasePercent(prop.maintenanceIncreasePercent ?? 3)
    setOtherExpenses(prop.otherExpenses ?? 500)
    setOtherExpensesIncreasePercent(prop.otherExpensesIncreasePercent ?? 3)
    setVacancyRatePercent(prop.vacancyRatePercent ?? 5)
    setManagementFeePercent(prop.managementFeePercent ?? 0)
    setAppreciationRatePercent(prop.appreciationRatePercent ?? 3)
    setHoldingPeriodYears(prop.holdingPeriodYears ?? 5)
    setSellingCostPercent(prop.sellingCostPercent ?? 5)
  }

  const activeDetailFinancials = activeDetailProp ? calculateROI(activeDetailProp) : null

  return (
    <div className="zillow-platform-container animate-fade-in">
      
      {/* Zillow Top Brand Navigation Header */}
      <header className="zillow-nav-header no-print">
        <div className="nav-left">
          <div className="zillow-brand-logo">RealPal</div>
          <span className="rent-portal-tag">Rentals</span>
        </div>
        <nav className="nav-links">
          <a href="#" className="active">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Sell</a>
          <a href="#">Home Loans</a>
          <a href="#">Agent Finder</a>
          <span className="divider"></span>
          <a href="#" onClick={() => { setActiveSubTab('portfolio'); }}>🔍 Map Search</a>
          <a href="#" onClick={() => { setActiveSubTab('compare'); }}>⚖️ Comparison Matrix ({comparedPropertyIds.length})</a>
        </nav>
        <div className="nav-right">
          <button className="btn-zillow-primary" onClick={() => { resetForm(); setShowAddModal(true); }}>
            ➕ Post Rental Listing
          </button>
        </div>
      </header>

      {/* Sub-Header Zillow Filters Bar */}
      {activeSubTab === 'portfolio' && (
        <div className="zillow-filter-bar no-print">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Address, neighborhood, ZIP..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="zillow-search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-dropdown-group">
            <div className="filter-select-wrapper">
              <label>Max Rent</label>
              <select value={maxRentFilter} onChange={(e) => setMaxRentFilter(e.target.value)} className="zillow-select">
                <option value="Any">Any Price</option>
                <option value="1500">$1,500/mo</option>
                <option value="2500">$2,500/mo</option>
                <option value="3500">$3,500/mo</option>
                <option value="5000">$5,000/mo</option>
              </select>
            </div>

            <div className="filter-select-wrapper">
              <label>Home Type</label>
              <select value={propertyTypeFilter} onChange={(e) => setPropertyTypeFilter(e.target.value)} className="zillow-select">
                <option value="Any">All Types</option>
                <option value="Single Family">Single Family</option>
                <option value="Multi Family">Multi Family</option>
                <option value="Condo">Condo</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
          </div>

          <div className="listing-count-tag">
            {filteredProperties.length} Homes matching search
          </div>
        </div>
      )}

      {/* PORTFOLIO SEARCH VIEW (SPLIT PANEL LAYOUT) */}
      {activeSubTab === 'portfolio' && (
        <div className="zillow-split-container">
          
          {/* Left Panel: Rental Listings Grid */}
          <div className="zillow-left-listings-panel no-print">
            <div className="listings-header">
              <h2>Rental Listings</h2>
              <div className="sort-by">Sort: <strong>Newest</strong></div>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="zillow-empty-state">
                <span className="house-emoji">🏠</span>
                <h3>No rental listings found</h3>
                <p>Adjust your filters or add a new rental property to get started.</p>
                <button className="btn-zillow-outline" onClick={() => setShowAddModal(true)}>Add Property</button>
              </div>
            ) : (
              <div className="zillow-listings-grid">
                {filteredProperties.map(prop => {
                  const isSelected = activeDetailProp?.id === prop.id
                  const financials = calculateROI(prop)
                  return (
                    <div 
                      key={prop.id} 
                      className={`zillow-listing-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => { setActiveDetailProp(prop); handleLoadPropertyToCalculator(prop); }}
                    >
                      <div className="card-image-box">
                        <div className="listing-type-badge">{prop.type}</div>
                        <div className="occupancy-badge">{prop.status}</div>
                        <div className="card-image-placeholder">🏠 RealPal Verified</div>
                        <button className={`compare-bubble-btn ${comparedPropertyIds.includes(prop.id) ? 'active' : ''}`} onClick={(e) => toggleCompareSelect(prop.id, e)} title="Compare property">
                          ⚖️
                        </button>
                      </div>

                      <div className="card-info-box">
                        <div className="price-row">
                          <span className="price">${prop.rent.toLocaleString()}<span className="mo">/mo</span></span>
                        </div>
                        <div className="details-row">
                          <strong>{prop.type === 'Single Family' ? '3 bds' : '2 bds'}</strong> • <strong>2 ba</strong> • <strong>1,450 sqft</strong>
                        </div>
                        <div className="address">{prop.address}</div>

                        <div className="zillow-mini-yields">
                          <span className="yield-pill cap">Cap Rate: {financials.capRate.toFixed(2)}%</span>
                          <span className="yield-pill coc">CoC: {financials.cashOnCash.toFixed(2)}%</span>
                        </div>

                        <div className="environmental-strip">
                          <span className="env-pill aqi">🍃 AQI {prop.airQualityIndex ?? 32}</span>
                          <span className="env-pill fire">🔥 {prop.fireRisk ?? 'Low'} Fire</span>
                          <span className="env-pill school">🎓 School {(prop.schoolMiddle ?? 8.5).toFixed(1)}</span>
                        </div>

                        <div className="card-actions-strip">
                          <button className="action-btn edit-btn" onClick={(e) => handleStartEdit(prop, e)}>Edit</button>
                          <button className="action-btn delete-btn" onClick={(e) => handleDeleteProperty(prop.id, e)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right Panel: Detail Panel Drawer & Map */}
          <div className="zillow-right-detail-panel">
            
            {activeDetailProp ? (
              <div className="zillow-listing-details-sheet print-sheet">
                
                {/* Visual Header */}
                <div className="sheet-image-gallery no-print">
                  <div className="main-gallery-pic">
                    <span className="realpal-guarantee-shield">🛡️ RealPal Guaranteed Rental Data</span>
                    <span className="prop-addr-overlay">{activeDetailProp.address}</span>
                  </div>
                </div>

                <div className="sheet-header-print print-only">
                  <h1>RealPal Property ROI & Environmental Sheet</h1>
                  <p className="address">{activeDetailProp.address}</p>
                  <p className="date">Generated: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Core Property Metrics */}
                <div className="sheet-body-content">
                  
                  <div className="core-details-header">
                    <div className="price-rent-block">
                      <h2>${activeDetailProp.rent.toLocaleString()}/mo</h2>
                      <p>{activeDetailProp.type} • Active Tenant: {activeDetailProp.tenantName}</p>
                    </div>
                    <div className="yields-header-block no-print">
                      <div className="yield-header-metric">
                        <span className="lbl">Cap Rate</span>
                        <span className="val">{activeDetailFinancials.capRate.toFixed(2)}%</span>
                      </div>
                      <div className="yield-header-metric">
                        <span className="lbl">Cash-on-Cash</span>
                        <span className="val text-orange">{activeDetailFinancials.cashOnCash.toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="prop-divider"></div>

                  {/* ROI Calculator Inputs & Variables */}
                  <h3 className="section-title">📊 Acquisition & ROI Parameters</h3>
                  <div className="calculator-two-col-grid">
                    
                    {/* Left Col: ROI values inputs */}
                    <div className="calculator-inline-inputs no-print">
                      <div className="form-grid-2">
                        <div className="inline-form-group">
                          <label>Purchase Price ($)</label>
                          <input type="number" value={purchasePrice} onChange={(e) => { setPurchasePrice(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, purchasePrice: parseFloat(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Down Payment (%)</label>
                          <input type="number" value={downPaymentPercent} onChange={(e) => { setDownPaymentPercent(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, downPaymentPercent: parseFloat(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Interest Rate (%)</label>
                          <input type="number" step="0.01" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, interestRate: parseFloat(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Loan Term (Yrs)</label>
                          <input type="number" value={loanTermYears} onChange={(e) => { setLoanTermYears(parseInt(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, loanTermYears: parseInt(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Taxes ($/yr)</label>
                          <input type="number" value={annualPropertyTax} onChange={(e) => { setAnnualPropertyTax(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, annualPropertyTax: parseFloat(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Insurance ($/yr)</label>
                          <input type="number" value={annualInsurance} onChange={(e) => { setAnnualInsurance(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, annualInsurance: parseFloat(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Maintenance ($/yr)</label>
                          <input type="number" value={annualMaintenance} onChange={(e) => { setAnnualMaintenance(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, annualMaintenance: parseFloat(e.target.value) || 0}); }} />
                        </div>
                        <div className="inline-form-group">
                          <label>Appreciation (%/yr)</label>
                          <input type="number" value={appreciationRatePercent} onChange={(e) => { setAppreciationRatePercent(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, appreciationRatePercent: parseFloat(e.target.value) || 0}); }} />
                        </div>
                      </div>
                      <p className="auto-save-tag">⚡ Inputs save to listing automatically</p>
                    </div>

                    {/* Right Col: ROI calculated table */}
                    <div className="calculator-yields-table">
                      <table className="compact-yields-table">
                        <tbody>
                          <tr><td>Initial Cash Invested</td><td className="text-right font-bold">${Math.round(activeDetailFinancials.initialCash).toLocaleString()}</td></tr>
                          <tr><td>Monthly Mortgage (P&I)</td><td className="text-right text-red">-${Math.round(activeDetailFinancials.monthlyMortgage).toLocaleString()}/mo</td></tr>
                          <tr><td>Taxes & HOI (Monthly)</td><td className="text-right text-red">-${Math.round((annualPropertyTax + annualInsurance) / 12).toLocaleString()}/mo</td></tr>
                          <tr><td>Maintenance & Vacancy (Monthly)</td><td className="text-right text-red">-${Math.round((annualMaintenance + activeDetailFinancials.vacancyLoss) / 12).toLocaleString()}/mo</td></tr>
                          <tr className="border-top"><td>Net Monthly Cash Flow</td><td className="text-right text-green font-bold">${Math.round(activeDetailFinancials.cashFlow / 12).toLocaleString()}/mo</td></tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                  <div className="prop-divider"></div>

                  {/* Multi-year projections */}
                  <h3 className="section-title">📈 Multi-Year Growth Logs</h3>
                  <div className="table-responsive">
                    <table className="projections-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Property Value</th>
                          <th>Annual Rent</th>
                          <th>Expenses</th>
                          <th>Cash Flow</th>
                          <th>Equity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeDetailFinancials.projections.map(proj => (
                          <tr key={proj.year}>
                            <td>Year {proj.year}</td>
                            <td>${proj.value.toLocaleString()}</td>
                            <td>${proj.income.toLocaleString()}</td>
                            <td>${proj.expenses.toLocaleString()}</td>
                            <td className={proj.cashFlow >= 0 ? 'text-green' : 'text-red'}>${proj.cashFlow.toLocaleString()}</td>
                            <td className="text-green font-bold">${proj.equity.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="prop-divider"></div>

                  {/* Environmental & Zillow Nearby Places */}
                  <h3 className="section-title">🎓 GreatSchools™ Nearby Ratings</h3>
                  <div className="schools-rating-grid">
                    <div className="school-rating-bar">
                      <span className="school-lbl">Elementary School</span>
                      <div className="rating-track-wrapper"><div className="rating-track-fill" style={{ width: `${(activeDetailProp.schoolElementary ?? 8.5) * 10}%` }}></div></div>
                      <span className="rating-num">{(activeDetailProp.schoolElementary ?? 8.5).toFixed(1)}/10</span>
                    </div>
                    <div className="school-rating-bar">
                      <span className="school-lbl">Middle School</span>
                      <div className="rating-track-wrapper"><div className="rating-track-fill" style={{ width: `${(activeDetailProp.schoolMiddle ?? 9.0) * 10}%` }}></div></div>
                      <span className="rating-num">{(activeDetailProp.schoolMiddle ?? 9.0).toFixed(1)}/10</span>
                    </div>
                    <div className="school-rating-bar">
                      <span className="school-lbl">High School</span>
                      <div className="rating-track-wrapper"><div className="rating-track-fill" style={{ width: `${(activeDetailProp.schoolHigh ?? 8.8) * 10}%` }}></div></div>
                      <span className="rating-num">{(activeDetailProp.schoolHigh ?? 8.8).toFixed(1)}/10</span>
                    </div>
                  </div>

                  <div className="prop-divider"></div>

                  <h3 className="section-title">🌱 Environment & Location Safety</h3>
                  <table className="environmental-table">
                    <tbody>
                      <tr><td>Air Quality Index (AQI)</td><td><strong>{activeDetailProp.airQualityIndex ?? 32} AQI (Good)</strong></td></tr>
                      <tr><td>Wildfire Hazard Level</td><td className="text-orange font-bold">{activeDetailProp.fireRisk ?? 'Low'}</td></tr>
                      <tr><td>Soil Architecture</td><td>{activeDetailProp.soilType ?? 'Clay loam, stable'}</td></tr>
                      <tr><td>Forest Preserves Nearby</td><td>{activeDetailProp.forestPreserves ?? 'None'}</td></tr>
                      <tr><td>Shopping Malls Nearby</td><td>{activeDetailProp.mallsNearby ?? 'None'}</td></tr>
                    </tbody>
                  </table>

                  {/* Action buttons */}
                  <div className="drawer-action-strip no-print">
                    <button className="btn-zillow-outline" onClick={() => window.print()}>
                      🖨️ Export PDF Property Sheet
                    </button>
                  </div>

                </div>

              </div>
            ) : (
              <div className="no-detail-selected no-print">
                <span className="search-logo-large">🔍</span>
                <h3>Select a listing to view ROI sheets & environment reports</h3>
              </div>
            )}

          </div>

        </div>
      )}

      {/* COMPARISON MATRIX TAB */}
      {activeSubTab === 'compare' && (
        <div className="zillow-compare-container no-print">
          {comparedPropertyIds.length === 0 ? (
            <div className="zillow-empty-state">
              <span className="house-emoji">⚖️</span>
              <h3>No properties selected for comparison</h3>
              <p>Go back to the Search Listings view and click the scales button (⚖️) on up to 3 listings to compare them.</p>
            </div>
          ) : (
            <div className="zillow-compare-sheet glass-card">
              <h2 className="section-title">⚖️ Side-by-Side Property Comparison Matrix</h2>
              <table className="zillow-compare-table">
                <thead>
                  <tr>
                    <th>Feature Metric</th>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <th key={pid} className="text-center">{prop?.address}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🏡 Listing Details</td></tr>
                  <tr>
                    <td className="lbl">Type</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.type}</td>)}
                  </tr>
                  <tr>
                    <td className="lbl">Occupancy Status</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.status}</td>)}
                  </tr>

                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>💰 ROI & Income Details</td></tr>
                  <tr>
                    <td className="lbl">Monthly Rent</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-bold">${properties.find(p => p.id === pid)?.rent.toLocaleString()}</td>)}
                  </tr>
                  <tr>
                    <td className="lbl">Purchase Price</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-bold">${(properties.find(p => p.id === pid)?.purchasePrice ?? 320000).toLocaleString()}</td>)}
                  </tr>
                  <tr>
                    <td className="lbl">Cap Rate</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      const roi = calculateROI(prop)
                      return <td key={pid} className="text-center font-bold text-blue">{roi.capRate.toFixed(2)}%</td>
                    })}
                  </tr>
                  <tr>
                    <td className="lbl">Cash-on-Cash Return</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      const roi = calculateROI(prop)
                      return <td key={pid} className="text-center font-bold text-orange">{roi.cashOnCash.toFixed(2)}%</td>
                    })}
                  </tr>

                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🎓 Schools ratings</td></tr>
                  <tr>
                    <td className="lbl">Middle School</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-bold text-green">{(properties.find(p => p.id === pid)?.schoolMiddle ?? 8.5).toFixed(1)}/10</td>)}
                  </tr>
                  <tr>
                    <td className="lbl">High School</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-bold text-green">{(properties.find(p => p.id === pid)?.schoolHigh ?? 8.5).toFixed(1)}/10</td>)}
                  </tr>

                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🌱 Location Hazards</td></tr>
                  <tr>
                    <td className="lbl">Air Quality Index</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.airQualityIndex ?? 32} AQI</td>)}
                  </tr>
                  <tr>
                    <td className="lbl">Wildfire Risk</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center text-orange font-bold">{properties.find(p => p.id === pid)?.fireRisk ?? 'Low'}</td>)}
                  </tr>
                  <tr>
                    <td className="lbl">Malls Nearby</td>
                    {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-normal">{properties.find(p => p.id === pid)?.mallsNearby}</td>)}
                  </tr>
                </tbody>
              </table>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button onClick={() => setComparedPropertyIds([])} className="btn-zillow-outline">Clear Selections</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add / Edit Property Modal */}
      {showAddModal && (
        <div className="modal-overlay no-print">
          <div className="modal-content">
            <button className="modal-close" onClick={() => { setShowAddModal(false); resetForm(); }}>×</button>
            <h3 className="modal-title">{editingProperty ? 'Edit Rental Listing' : 'Post New Rental Listing'}</h3>
            <p className="modal-subtitle">Configure listing address, pricing, Zillow variables, and mortgage ROI parameters.</p>
            
            <form onSubmit={handleFormSubmit} style={{ marginTop: '1.25rem' }} className="modal-scroll-form">
              
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
                    placeholder="e.g. 3100"
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
                      placeholder="e.g. tenant@domain.com"
                      value={tenantEmail}
                      onChange={(e) => setTenantEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Lease Start</label>
                      <input type="date" value={leaseStart} onChange={(e) => setLeaseStart(e.target.value)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Lease End</label>
                      <input type="date" value={leaseEnd} onChange={(e) => setLeaseEnd(e.target.value)} className="form-input" />
                    </div>
                  </div>
                </>
              )}

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">📊 Acquisition & ROI Parameters</h4>
              
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Purchase Price ($)</label>
                  <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Down Payment (%)</label>
                  <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Interest Rate (%)</label>
                  <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Loan Term (Years)</label>
                  <input type="number" value={loanTermYears} onChange={(e) => setLoanTermYears(parseInt(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Property Tax ($)</label>
                  <input type="number" value={annualPropertyTax} onChange={(e) => setAnnualPropertyTax(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Insurance ($)</label>
                  <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Maintenance ($)</label>
                  <input type="number" value={annualMaintenance} onChange={(e) => setAnnualMaintenance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Appreciation Rate (%)</label>
                  <input type="number" value={appreciationRatePercent} onChange={(e) => setAppreciationRatePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">🎓 GreatSchools™ Nearby Ratings</h4>
              
              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label">Elem. (1-10)</label>
                  <input type="number" step="0.1" value={schoolElementary} onChange={(e) => setSchoolElementary(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Middle (1-10)</label>
                  <input type="number" step="0.1" value={schoolMiddle} onChange={(e) => setSchoolMiddle(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">High (1-10)</label>
                  <input type="number" step="0.1" value={schoolHigh} onChange={(e) => setSchoolHigh(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">🌱 Environment & Location Details</h4>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Air Quality Index</label>
                  <input type="number" value={airQualityIndex} onChange={(e) => setAirQualityIndex(parseInt(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Wildfire Risk</label>
                  <select value={fireRisk} onChange={(e) => setFireRisk(e.target.value)} className="form-select">
                    <option value="Very Low">Very Low</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Soil Framework</label>
                <input type="text" value={soilType} onChange={(e) => setSoilType(e.target.value)} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Nearby Malls</label>
                <input type="text" value={mallsNearby} onChange={(e) => setMallsNearby(e.target.value)} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Nearby Forest Preserves</label>
                <input type="text" value={forestPreserves} onChange={(e) => setForestPreserves(e.target.value)} className="form-input" />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => { setShowAddModal(false); resetForm(); }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1.5 }}>
                  Publish Listing
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Styled sheets specific for Zillow design */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --zillow-blue: #006aff;
          --zillow-bg: #f6f6fa;
          --zillow-border: #e4e4e7;
          --zillow-text: #2a2a3e;
          --zillow-text-secondary: #59596e;
        }

        .zillow-platform-container {
          background-color: var(--zillow-bg);
          color: var(--zillow-text);
          min-height: 100vh;
          font-family: 'Open Sans', 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* Zillow Brand Navigation */
        .zillow-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border-bottom: 1px solid var(--zillow-border);
          padding: 0.8rem 2rem;
          height: 60px;
        }

        .zillow-brand-logo {
          color: var(--zillow-blue);
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .rent-portal-tag {
          font-size: 0.72rem;
          background: rgba(0, 106, 255, 0.08);
          color: var(--zillow-blue);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          margin-left: 0.5rem;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links a {
          color: var(--zillow-text);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.15s;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--zillow-blue);
        }

        .nav-links .divider {
          width: 1px;
          height: 20px;
          background: var(--zillow-border);
        }

        .btn-zillow-primary {
          background: var(--zillow-blue);
          color: #fff;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .btn-zillow-primary:hover {
          background: #0056cc;
        }

        /* Filter Bar */
        .zillow-filter-bar {
          display: flex;
          align-items: center;
          background: #fff;
          border-bottom: 1px solid var(--zillow-border);
          padding: 0.75rem 2rem;
          gap: 1.5rem;
        }

        .search-input-wrapper {
          position: relative;
          width: 320px;
        }

        .zillow-search-input {
          width: 100%;
          border: 1px solid var(--zillow-border);
          padding: 0.55rem 1rem 0.55rem 2.2rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          outline: none;
          color: var(--zillow-text);
        }

        .search-icon {
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--zillow-text-secondary);
        }

        .filter-dropdown-group {
          display: flex;
          gap: 1rem;
        }

        .filter-select-wrapper {
          display: flex;
          flex-direction: column;
          font-size: 0.72rem;
          color: var(--zillow-text-secondary);
          font-weight: 700;
        }

        .zillow-select {
          border: 1px solid var(--zillow-border);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-md);
          outline: none;
          font-size: 0.85rem;
          background: #fff;
          font-weight: 600;
          color: var(--zillow-text);
          margin-top: 2px;
        }

        .listing-count-tag {
          margin-left: auto;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--zillow-text-secondary);
        }

        /* Split Screen Container */
        .zillow-split-container {
          display: flex;
          flex: 1;
          height: calc(100vh - 110px);
          overflow: hidden;
        }

        .zillow-left-listings-panel {
          width: 55%;
          overflow-y: auto;
          padding: 1.5rem;
          border-right: 1px solid var(--zillow-border);
          background: #fff;
        }

        .listings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .listings-header h2 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--zillow-text);
        }

        .zillow-listings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .zillow-listing-card {
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #fff;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
        }

        .zillow-listing-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--zillow-blue);
        }

        .zillow-listing-card.selected {
          border-color: var(--zillow-blue);
          box-shadow: 0 0 0 2px rgba(0, 106, 255, 0.15);
        }

        .card-image-box {
          height: 140px;
          background: linear-gradient(135deg, #006aff 0%, #a5b4fc 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-image-placeholder {
          color: #fff;
          font-weight: 750;
          font-size: 0.95rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }

        .listing-type-badge {
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          background: rgba(0,0,0,0.65);
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .occupancy-badge {
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
          background: #38a169;
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.65rem;
          font-weight: 700;
        }

        .compare-bubble-btn {
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
          background: #fff;
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-full);
          padding: 0.35rem;
          cursor: pointer;
          font-size: 0.75rem;
          transition: all 0.15s;
        }

        .compare-bubble-btn:hover {
          transform: scale(1.1);
        }

        .compare-bubble-btn.active {
          background: var(--zillow-blue);
          color: #fff;
          border-color: var(--zillow-blue);
        }

        .card-info-box {
          padding: 1rem;
        }

        .price-row .price {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--zillow-text);
        }

        .price-row .mo {
          font-size: 0.85rem;
          color: var(--zillow-text-secondary);
          font-weight: 600;
        }

        .details-row {
          font-size: 0.85rem;
          color: var(--zillow-text-secondary);
          margin-top: 0.25rem;
        }

        .address {
          font-size: 0.9rem;
          color: var(--zillow-text);
          margin-top: 0.35rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .zillow-mini-yields {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.6rem;
        }

        .yield-pill {
          font-size: 0.68rem;
          font-weight: 750;
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
        }

        .yield-pill.cap {
          background: rgba(0, 106, 255, 0.08);
          color: var(--zillow-blue);
        }

        .yield-pill.coc {
          background: rgba(221, 107, 32, 0.08);
          color: #dd6b20;
        }

        .environmental-strip {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.6rem;
        }

        .env-pill {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.15rem 0.35rem;
          border-radius: var(--radius-sm);
          background: #f7fafc;
          border: 1px solid #edf2f7;
          color: var(--zillow-text-secondary);
        }

        .card-actions-strip {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.85rem;
          border-top: 1px solid #f4f4f5;
          padding-top: 0.6rem;
        }

        .action-btn {
          flex: 1;
          background: transparent;
          border: 1px solid var(--zillow-border);
          padding: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-sm);
          cursor: pointer;
          color: var(--zillow-text-secondary);
          transition: all 0.15s;
        }

        .action-btn:hover {
          color: var(--zillow-text);
          background: #f7fafc;
        }

        .delete-btn:hover {
          border-color: #fc8181;
          color: #e53e3e;
          background: #fff5f5;
        }

        /* Right Panel: Detail Panel */
        .zillow-right-detail-panel {
          width: 45%;
          background: #fff;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .zillow-listing-details-sheet {
          display: flex;
          flex-direction: column;
        }

        .sheet-image-gallery {
          height: 220px;
          background: linear-gradient(135deg, #1a202c 0%, #4a5568 100%);
          position: relative;
        }

        .main-gallery-pic {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%);
        }

        .realpal-guarantee-shield {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255,255,255,0.95);
          color: var(--zillow-text);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .prop-addr-overlay {
          color: #fff;
          font-size: 1.45rem;
          font-weight: 850;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .sheet-body-content {
          padding: 1.5rem;
        }

        .core-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price-rent-block h2 {
          font-size: 1.85rem;
          font-weight: 850;
          color: var(--zillow-text);
        }

        .price-rent-block p {
          color: var(--zillow-text-secondary);
          font-size: 0.88rem;
          margin-top: 0.2rem;
        }

        .yields-header-block {
          display: flex;
          gap: 1rem;
        }

        .yield-header-metric {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .yield-header-metric .lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--zillow-text-secondary);
          text-transform: uppercase;
        }

        .yield-header-metric .val {
          font-size: 1.35rem;
          font-weight: 850;
          color: var(--zillow-blue);
        }

        .yield-header-metric .val.text-orange {
          color: #dd6b20;
        }

        .prop-divider {
          height: 1px;
          background: var(--zillow-border);
          margin: 1.25rem 0;
        }

        .calculator-two-col-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 1.5rem;
          align-items: start;
        }

        .calculator-inline-inputs {
          background: #f7fafc;
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .inline-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .inline-form-group label {
          font-size: 0.68rem;
          color: var(--zillow-text-secondary);
          font-weight: 750;
        }

        .inline-form-group input {
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.5rem;
          font-size: 0.82rem;
          outline: none;
          color: var(--zillow-text);
        }

        .inline-form-group input:focus {
          border-color: var(--zillow-blue);
        }

        .auto-save-tag {
          font-size: 0.68rem;
          color: #718096;
          font-weight: 650;
          margin-top: 0.75rem;
          text-align: center;
        }

        .compact-yields-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .compact-yields-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--zillow-text-secondary);
        }

        .compact-yields-table tr.border-top td {
          border-top: 2px solid var(--zillow-text);
          color: var(--zillow-text);
          padding-top: 0.6rem;
        }

        .schools-rating-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .environmental-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .environmental-table td {
          padding: 0.5rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--zillow-text-secondary);
        }

        .environmental-table td:last-child {
          color: var(--zillow-text);
          text-align: right;
        }

        .drawer-action-strip {
          margin-top: 1.5rem;
          display: flex;
          justify-content: flex-end;
        }

        .no-detail-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }

        .search-logo-large {
          font-size: 3.5rem;
          color: #cbd5e0;
          margin-bottom: 1rem;
        }

        .no-detail-selected h3 {
          margin-bottom: 0.5rem;
        }

        .no-detail-selected p {
          color: var(--zillow-text-secondary);
        }

        /* Zillow Compare Styles */
        .zillow-compare-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .zillow-compare-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          margin-top: 1rem;
          background: #fff;
          border: 1px solid var(--zillow-border);
          border-radius: var(--radius-md);
        }

        .zillow-compare-table th, .zillow-compare-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--zillow-border);
        }

        .zillow-compare-table th {
          background: #f7fafc;
          font-weight: bold;
        }

        .zillow-compare-table tr.section-row td {
          background: #edf2f7;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
        }

        .btn-zillow-outline {
          background: transparent;
          border: 1px solid var(--zillow-blue);
          color: var(--zillow-blue);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background 0.15s;
        }

        .btn-zillow-outline:hover {
          background: rgba(0, 106, 255, 0.04);
        }

        .zillow-empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }

        .house-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        /* Print Media Override */
        .sheet-header-print {
          display: none;
        }

        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-sheet, .print-sheet * {
            visibility: visible !important;
          }
          .print-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            background: #fff !important;
            color: #000 !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
          }
          .sheet-header-print {
            display: block !important;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #000;
            padding-bottom: 0.5rem;
          }
          .sheet-header-print h1 {
            font-size: 20pt;
            font-weight: bold;
            margin: 0;
          }
          .sheet-header-print .address {
            font-size: 14pt;
            margin: 4px 0;
          }
          .sheet-header-print .date {
            font-size: 9pt;
            color: #555;
          }
          .no-print {
            display: none !important;
          }
        }
      `}} />
    </div>
  )
}
