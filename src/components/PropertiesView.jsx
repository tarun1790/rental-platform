import React, { useState, useEffect } from 'react'

export default function PropertiesView({ properties, onAddProperty, onUpdateProperty, onDeleteProperty }) {
  const [activeSubTab, setActiveSubTab] = useState('portfolio') // 'portfolio', 'roi', 'compare'
  
  // Selection states
  const [selectedPropertyId, setSelectedPropertyId] = useState('')
  const [comparedPropertyIds, setComparedPropertyIds] = useState([])
  const [expandedPropertyId, setExpandedPropertyId] = useState(null)

  // Modals & Forms
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  
  // Property Form States (Upgraded with ROI & Zillow columns)
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

  // Populate form with existing property details when editing
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

  const handleAddSubmit = async (e) => {
    e.preventDefault()
    if (!address || !rent) return
    await onAddProperty(getFormData())
    setShowAddModal(false)
    resetForm()
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    if (!address || !rent) return
    await onUpdateProperty(editingProperty.id, getFormData())
    resetForm()
  }

  const handleDeleteProperty = (id) => {
    if (confirm("Are you sure you want to remove this property? All associated tenant tracking will be cleared.")) {
      onDeleteProperty(id)
    }
  }

  // ROI Calculation Engine (Matching calculator.net formulas)
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
      // Appreciation
      currentValue = currentValue * (1 + (prop.appreciationRatePercent ?? 3) / 100)
      
      // Rent & Expenses inflation
      if (y > 1) {
        currentRent = currentRent * (1 + (prop.crentincrease ?? 3) / 100)
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

      // Remaining Loan Balance
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

  // Handle comparison selections
  const toggleCompareSelect = (id) => {
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

  // Set calculator inputs when a property is loaded in the calculator tab
  const handleLoadPropertyToCalculator = (propId) => {
    const prop = properties.find(p => p.id === parseInt(propId))
    if (!prop) return
    setSelectedPropertyId(propId)
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

  // Compute stats for current ad-hoc calculator state
  const getActiveCalculatorStats = () => {
    const mockProp = {
      purchasePrice,
      downPaymentPercent,
      interestRate,
      loanTermYears,
      otherPurchaseCosts,
      repairCost,
      annualPropertyTax,
      taxIncreasePercent,
      annualInsurance,
      insuranceIncreasePercent,
      monthlyHOA,
      hoaIncreasePercent,
      annualMaintenance,
      maintenanceIncreasePercent,
      otherExpenses,
      otherExpensesIncreasePercent,
      vacancyRatePercent,
      managementFeePercent,
      appreciationRatePercent,
      holdingPeriodYears,
      sellingCostPercent,
      rent: properties.find(p => p.id === parseInt(selectedPropertyId))?.rent || 2000
    }
    return calculateROI(mockProp)
  }

  // Print/Export Sheet
  const handlePrintSheet = () => {
    window.print()
  }

  return (
    <div className="properties-view animate-fade-in">
      
      {/* Sub-tab view header */}
      <div className="view-header no-print">
        <div>
          <h1 className="view-title text-gradient">Zillow Rentals & Financial Analyzer</h1>
          <p className="view-description">Analyze property values, view neighborhood environments, calculate yields, and generate financial reports.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Property
        </button>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="sub-tabs-container no-print">
        <button className={`sub-tab-btn ${activeSubTab === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveSubTab('portfolio')}>
          📂 Portfolio List
        </button>
        <button className={`sub-tab-btn ${activeSubTab === 'roi' ? 'active' : ''}`} onClick={() => { setActiveSubTab('roi'); if (properties.length > 0 && !selectedPropertyId) handleLoadPropertyToCalculator(properties[0].id); }}>
          📊 ROI Calculator
        </button>
        <button className={`sub-tab-btn ${activeSubTab === 'compare' ? 'active' : ''}`} onClick={() => setActiveSubTab('compare')}>
          ⚖️ Compare Sheet ({comparedPropertyIds.length}/3)
        </button>
      </div>

      {/* PORTFOLIO TAB */}
      {activeSubTab === 'portfolio' && (
        <>
          {properties.length === 0 ? (
            <div className="empty-properties-state glass-card no-print">
              <div className="empty-icon">🏠</div>
              <h3>No properties added yet</h3>
              <p>Register your first property to view Zillow maps, nearby schools, environmental data, and compute cash flow yields.</p>
              <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>Add Property Now</button>
            </div>
          ) : (
            <div className="grid-3 no-print">
              {properties.map((prop) => {
                const isExpanded = expandedPropertyId === prop.id
                const progress = calculateLeaseProgress(prop.leaseStart, prop.leaseEnd)
                const financial = calculateROI(prop)
                
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

                    <div className="small-financial-yields">
                      <div className="yield-mini-badge">
                        <span className="yield-lbl">Cap Rate</span>
                        <span className="yield-val text-primary">{financial.capRate.toFixed(2)}%</span>
                      </div>
                      <div className="yield-mini-badge">
                        <span className="yield-lbl">Cash-on-Cash</span>
                        <span className="yield-val text-warning">{financial.cashOnCash.toFixed(2)}%</span>
                      </div>
                    </div>

                    <div className="prop-divider"></div>

                    <div className="tenant-details">
                      <div className="details-row">
                        <span className="detail-lbl">Tenant:</span>
                        <span className="detail-val">{prop.tenantName}</span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="expanded-zillow-details animate-fade-in">
                        <div className="prop-divider"></div>
                        
                        {/* Nearby Schools ratings */}
                        <h4 className="expanded-section-title">🎓 GreatSchools™ Rating</h4>
                        <div className="schools-rating-box">
                          <div className="school-rating-bar">
                            <span className="school-lbl">Elementary School</span>
                            <div className="rating-track-wrapper">
                              <div className="rating-track-fill" style={{ width: `${(prop.schoolElementary ?? 8) * 10}%` }}></div>
                            </div>
                            <span className="rating-num">{(prop.schoolElementary ?? 8.0).toFixed(1)}/10</span>
                          </div>
                          <div className="school-rating-bar">
                            <span className="school-lbl">Middle School</span>
                            <div className="rating-track-wrapper">
                              <div className="rating-track-fill" style={{ width: `${(prop.schoolMiddle ?? 8) * 10}%` }}></div>
                            </div>
                            <span className="rating-num">{(prop.schoolMiddle ?? 8.0).toFixed(1)}/10</span>
                          </div>
                          <div className="school-rating-bar">
                            <span className="school-lbl">High School</span>
                            <div className="rating-track-wrapper">
                              <div className="rating-track-fill" style={{ width: `${(prop.schoolHigh ?? 8) * 10}%` }}></div>
                            </div>
                            <span className="rating-num">{(prop.schoolHigh ?? 8.5).toFixed(1)}/10</span>
                          </div>
                        </div>

                        {/* Environmental Hazards */}
                        <div className="prop-divider"></div>
                        <h4 className="expanded-section-title">🌱 Environment & Geography</h4>
                        <div className="environ-info-grid">
                          <div className="environ-card">
                            <span className="env-title">Air Quality Index</span>
                            <span className="env-val">{prop.airQualityIndex ?? 32} AQI (Good)</span>
                          </div>
                          <div className="environ-card">
                            <span className="env-title">Wildfire Risk</span>
                            <span className="env-val font-semibold text-warning">{prop.fireRisk ?? 'Low'}</span>
                          </div>
                          <div className="environ-card">
                            <span className="env-title">Soil Framework</span>
                            <span className="env-val">{prop.soilType ?? 'Clay loam, stable'}</span>
                          </div>
                        </div>

                        {/* Malls & Parks */}
                        <div className="prop-divider"></div>
                        <h4 className="expanded-section-title">🛍️ Nearby Amenities</h4>
                        <div className="amenities-box">
                          <div className="amenity-row">
                            <span className="amenity-lbl">Forest Preserves:</span>
                            <span className="amenity-val">{prop.forestPreserves ?? 'None'}</span>
                          </div>
                          <div className="amenity-row">
                            <span className="amenity-lbl">Shopping Malls:</span>
                            <span className="amenity-val">{prop.mallsNearby ?? 'None'}</span>
                          </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="prop-divider"></div>
                        <h4 className="expanded-section-title">📍 Zillow Interactive Map Coordinates</h4>
                        <div className="mock-map-box">
                          <div className="mock-map-marker">📍</div>
                          <div className="mock-map-details">
                            <strong>Lat/Long:</strong> {prop.latitude ?? '37.33'}, {prop.longitude ?? '-121.88'}<br/>
                            <span className="text-muted">Interactive Map Overlay (OpenStreetMap/Leaflet Layer Loaded)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="card-actions">
                      <button className="btn btn-secondary btn-sm" style={{ flex: 1.5 }} onClick={() => setExpandedPropertyId(isExpanded ? null : prop.id)}>
                        {isExpanded ? 'Hide Zillow Info' : 'Zillow & environment'}
                      </button>
                      <button className="btn btn-secondary btn-sm" style={{ flex: 1 }} onClick={() => handleStartEdit(prop)}>
                        Edit
                      </button>
                      
                      <button className={`btn btn-sm ${comparedPropertyIds.includes(prop.id) ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '0.5rem' }} onClick={() => toggleCompareSelect(prop.id)} title="Add to comparison sheet">
                        ⚖️
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
        </>
      )}

      {/* ROI CALCULATOR TAB */}
      {activeSubTab === 'roi' && (
        <div className="roi-calculator-container">
          {properties.length === 0 ? (
            <div className="empty-properties-state glass-card no-print">
              <div className="empty-icon">📊</div>
              <h3>Please add a property first</h3>
              <p>You need to have at least one property registered in your portfolio to compute ROI cash flow models.</p>
            </div>
          ) : (
            <div className="calculator-layout-grid">
              
              {/* Left Column: Form Inputs (Hidden in Print) */}
              <div className="calculator-inputs-column glass-card no-print">
                <h3 className="section-title">Calculator Inputs</h3>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label font-bold">Select Portfolio Property</label>
                  <select value={selectedPropertyId} onChange={(e) => handleLoadPropertyToCalculator(e.target.value)} className="form-select">
                    {properties.map(p => (
                      <option key={p.id} value={p.id}>{p.address}</option>
                    ))}
                  </select>
                </div>

                <div className="prop-divider"></div>

                <div className="inputs-section">
                  <h4 className="inputs-group-title">💰 Loan & Purchase</h4>
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
                      <label className="form-label">Other Purchase Costs ($)</label>
                      <input type="number" value={otherPurchaseCosts} onChange={(e) => setOtherPurchaseCosts(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Repair Costs ($)</label>
                      <input type="number" value={repairCost} onChange={(e) => setRepairCost(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                  </div>
                </div>

                <div className="inputs-section" style={{ marginTop: '1.5rem' }}>
                  <h4 className="inputs-group-title">📈 Income, Fees & Appreciation</h4>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Appreciation Rate (%/yr)</label>
                      <input type="number" step="0.1" value={appreciationRatePercent} onChange={(e) => setAppreciationRatePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Vacancy Rate (%)</label>
                      <input type="number" value={vacancyRatePercent} onChange={(e) => setVacancyRatePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Management Fee (%)</label>
                      <input type="number" value={managementFeePercent} onChange={(e) => setManagementFeePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Holding Period (Years)</label>
                      <input type="number" value={holdingPeriodYears} onChange={(e) => setHoldingPeriodYears(parseInt(e.target.value) || 0)} className="form-input" />
                    </div>
                  </div>
                </div>

                <div className="inputs-section" style={{ marginTop: '1.5rem' }}>
                  <h4 className="inputs-group-title">🛠️ Recurring Expenses & Growth Rates</h4>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Property Tax ($/yr)</label>
                      <input type="number" value={annualPropertyTax} onChange={(e) => setAnnualPropertyTax(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tax Increase (%/yr)</label>
                      <input type="number" value={taxIncreasePercent} onChange={(e) => setTaxIncreasePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">HOI / Insurance ($/yr)</label>
                      <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">HOI Increase (%/yr)</label>
                      <input type="number" value={insuranceIncreasePercent} onChange={(e) => setInsuranceIncreasePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Monthly HOA ($)</label>
                      <input type="number" value={monthlyHOA} onChange={(e) => setMonthlyHOA(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">HOA Increase (%/yr)</label>
                      <input type="number" value={hoaIncreasePercent} onChange={(e) => setHoaIncreasePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Maintenance ($/yr)</label>
                      <input type="number" value={annualMaintenance} onChange={(e) => setAnnualMaintenance(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Maint. Increase (%/yr)</label>
                      <input type="number" value={maintenanceIncreasePercent} onChange={(e) => setMaintenanceIncreasePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Other Expenses ($/yr)</label>
                      <input type="number" value={otherExpenses} onChange={(e) => setOtherExpenses(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Other Increase (%/yr)</label>
                      <input type="number" value={otherExpensesIncreasePercent} onChange={(e) => setOtherExpensesIncreasePercent(parseFloat(e.target.value) || 0)} className="form-input" />
                    </div>
                  </div>
                </div>

                <button type="button" className="btn btn-primary w-full" style={{ marginTop: '1.5rem' }} onClick={() => {
                  const prop = properties.find(p => p.id === parseInt(selectedPropertyId))
                  if (prop) {
                    onUpdateProperty(prop.id, getFormData())
                    alert("Property financials saved successfully!")
                  }
                }}>
                  💾 Save Inputs to Property
                </button>
              </div>

              {/* Right Column: Calculations & Outputs Sheet (Print Target) */}
              <div className="calculator-outputs-column glass-card print-sheet">
                <div className="sheet-print-header">
                  <h2>RealPal Financial Property Sheet</h2>
                  <p className="address-lbl">{properties.find(p => p.id === parseInt(selectedPropertyId))?.address}</p>
                  <p className="date-stamp">Generated: {new Date().toLocaleDateString()} | ROI model values</p>
                </div>

                <div className="prop-divider print-only"></div>

                {/* Core ROI yield cards */}
                <div className="grid-3 yields-summary-cards">
                  <div className="yield-card glass-card">
                    <span className="card-lbl">Cap Rate</span>
                    <span className="card-val text-primary">{getActiveCalculatorStats().capRate.toFixed(2)}%</span>
                  </div>
                  <div className="yield-card glass-card">
                    <span className="card-lbl">Cash-on-Cash</span>
                    <span className="card-val text-warning">{getActiveCalculatorStats().cashOnCash.toFixed(2)}%</span>
                  </div>
                  <div className="yield-card glass-card">
                    <span className="card-lbl">Net Operating Income</span>
                    <span className="card-val text-success">${Math.round(getActiveCalculatorStats().noi).toLocaleString()}/yr</span>
                  </div>
                </div>

                <div className="prop-divider"></div>

                {/* Cash Flow and Amortization details */}
                <div className="grid-2 financial-details-grid">
                  <div className="calc-sub-box">
                    <h4>📥 Initial Cash Investment Breakdown</h4>
                    <table className="financials-compact-table">
                      <tbody>
                        <tr><td>Down Payment ({downPaymentPercent}%)</td><td className="text-right font-bold">${Math.round(getActiveCalculatorStats().downPayment).toLocaleString()}</td></tr>
                        <tr><td>Purchase Price</td><td className="text-right font-bold">${purchasePrice.toLocaleString()}</td></tr>
                        <tr><td>Loan Amount ({100 - downPaymentPercent}%)</td><td className="text-right">${Math.round(getActiveCalculatorStats().loanAmount).toLocaleString()}</td></tr>
                        <tr><td>Other Closing Costs</td><td className="text-right">${otherPurchaseCosts.toLocaleString()}</td></tr>
                        <tr><td>Initial Repair Budget</td><td className="text-right">${repairCost.toLocaleString()}</td></tr>
                        <tr className="border-t font-semibold"><td>Total Cash Invested</td><td className="text-right text-success">${Math.round(getActiveCalculatorStats().initialCash).toLocaleString()}</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="calc-sub-box">
                    <h4>📤 Cash Flow & Expenses (Year 1)</h4>
                    <table className="financials-compact-table">
                      <tbody>
                        <tr><td>Gross Rent (Monthly)</td><td className="text-right font-bold">${(properties.find(p => p.id === parseInt(selectedPropertyId))?.rent || 0).toLocaleString()}</td></tr>
                        <tr><td>Vacancy Allowance ({vacancyRatePercent}%)</td><td className="text-right text-danger">-${Math.round(getActiveCalculatorStats().vacancyLoss / 12).toLocaleString()}</td></tr>
                        <tr><td>Mortgage Payment (Monthly)</td><td className="text-right text-danger">-${Math.round(getActiveCalculatorStats().monthlyMortgage).toLocaleString()}</td></tr>
                        <tr><td>Taxes & HOI (Monthly)</td><td className="text-right text-danger">-${Math.round((annualPropertyTax + annualInsurance) / 12).toLocaleString()}</td></tr>
                        <tr><td>HOA & Maintenance (Monthly)</td><td className="text-right text-danger">-${Math.round(monthlyHOA + (annualMaintenance / 12)).toLocaleString()}</td></tr>
                        <tr className="border-t font-semibold"><td>Net Monthly Cash Flow</td><td className="text-right text-warning">${Math.round(getActiveCalculatorStats().cashFlow / 12).toLocaleString()}/mo</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="prop-divider"></div>

                {/* Projections Table */}
                <h4 className="section-subtitle">📈 Multi-Year Value & Cash Flow Projections</h4>
                <div className="table-responsive">
                  <table className="projections-table">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Property Value</th>
                        <th>Rental Income</th>
                        <th>Expenses</th>
                        <th>Cash Flow</th>
                        <th>Loan Balance</th>
                        <th>Equity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getActiveCalculatorStats().projections.map(proj => (
                        <tr key={proj.year}>
                          <td>Year {proj.year}</td>
                          <td>${proj.value.toLocaleString()}</td>
                          <td>${proj.income.toLocaleString()}</td>
                          <td>${proj.expenses.toLocaleString()}</td>
                          <td className={proj.cashFlow >= 0 ? 'text-success' : 'text-danger'}>
                            ${proj.cashFlow.toLocaleString()}
                          </td>
                          <td>${proj.loanBalance.toLocaleString()}</td>
                          <td className="font-bold text-success">${proj.equity.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Action button */}
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }} className="no-print">
                  <button onClick={handlePrintSheet} className="btn btn-secondary btn-sm">
                    🖨️ Export PDF Property Sheet
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      )}

      {/* PROPERTY COMPARISON TAB */}
      {activeSubTab === 'compare' && (
        <div className="property-comparison-container no-print">
          {comparedPropertyIds.length === 0 ? (
            <div className="empty-properties-state glass-card">
              <div className="empty-icon">⚖️</div>
              <h3>No properties selected for comparison</h3>
              <p>Go back to the <strong>Portfolio List</strong> tab and check the scale buttons (⚖️) on up to 3 cards to generate a comparison sheet.</p>
            </div>
          ) : (
            <div className="comparison-table-wrapper glass-card">
              <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>⚖️ Property Comparison Sheet</h3>
              
              <table className="compare-sheet-table">
                <thead>
                  <tr>
                    <th>Feature Metric</th>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <th key={pid} className="text-center font-bold text-gradient">{prop?.address}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🏡 Basic Details</td></tr>
                  <tr>
                    <td className="metric-lbl">Property Type</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center">{prop?.type}</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Status</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center">{prop?.status}</td>
                    })}
                  </tr>

                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🎓 GreatSchools™ Ratings</td></tr>
                  <tr>
                    <td className="metric-lbl">Elementary School</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-bold text-success">{(prop?.schoolElementary ?? 8).toFixed(1)}/10</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Middle School</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-bold text-success">{(prop?.schoolMiddle ?? 8).toFixed(1)}/10</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">High School</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-bold text-success">{(prop?.schoolHigh ?? 8.5).toFixed(1)}/10</td>
                    })}
                  </tr>

                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🌱 Location Hazards & Environment</td></tr>
                  <tr>
                    <td className="metric-lbl">Air Quality Index</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center">{prop?.airQualityIndex ?? 32} AQI (Good)</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Wildfire Risk</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center text-warning font-semibold">{prop?.fireRisk ?? 'Low'}</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Soil Context</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center">{prop?.soilType ?? 'Clay loam, stable'}</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Malls Nearby</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-normal">{prop?.mallsNearby ?? 'None'}</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Forest Preserves</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-normal">{prop?.forestPreserves ?? 'None'}</td>
                    })}
                  </tr>

                  <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>💰 ROI & Cash Yields (Year 1)</td></tr>
                  <tr>
                    <td className="metric-lbl">Purchase Price</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-bold">${(prop?.purchasePrice ?? 320000).toLocaleString()}</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Monthly Rent</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      return <td key={pid} className="text-center font-bold">${(prop?.rent ?? 0).toLocaleString()}</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Cap Rate</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      const stats = calculateROI(prop || {})
                      return <td key={pid} className="text-center text-primary font-bold">{stats.capRate.toFixed(2)}%</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Cash-on-Cash Return</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      const stats = calculateROI(prop || {})
                      return <td key={pid} className="text-center text-warning font-bold">{stats.cashOnCash.toFixed(2)}%</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">NOI</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      const stats = calculateROI(prop || {})
                      return <td key={pid} className="text-center text-success">${Math.round(stats.noi).toLocaleString()}/yr</td>
                    })}
                  </tr>
                  <tr>
                    <td className="metric-lbl">Monthly Cash Flow</td>
                    {comparedPropertyIds.map(pid => {
                      const prop = properties.find(p => p.id === pid)
                      const stats = calculateROI(prop || {})
                      return <td key={pid} className="text-center text-success">${Math.round(stats.cashFlow / 12).toLocaleString()}/mo</td>
                    })}
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button onClick={() => setComparedPropertyIds([])} className="btn btn-secondary btn-sm">Clear Selection</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => { setShowAddModal(false); resetForm(); }}>×</button>
            <h3 className="modal-title">Register Property</h3>
            <p className="modal-subtitle">Register property parameters, Zillow locations, and initial ROI variables.</p>
            
            <form onSubmit={handleAddSubmit} style={{ marginTop: '1.25rem' }} className="modal-scroll-form">
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
                  <label className="form-label">Other Closings ($)</label>
                  <input type="number" value={otherPurchaseCosts} onChange={(e) => setOtherPurchaseCosts(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Repair Costs ($)</label>
                  <input type="number" value={repairCost} onChange={(e) => setRepairCost(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Taxes ($/yr)</label>
                  <input type="number" value={annualPropertyTax} onChange={(e) => setAnnualPropertyTax(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Insurance ($/yr)</label>
                  <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Monthly HOA ($)</label>
                  <input type="number" value={monthlyHOA} onChange={(e) => setMonthlyHOA(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Maintenance ($)</label>
                  <input type="number" value={annualMaintenance} onChange={(e) => setAnnualMaintenance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">🎓 Schools & Environments</h4>

              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label">Elem. School (1-10)</label>
                  <input type="number" step="0.1" min="1" max="10" value={schoolElementary} onChange={(e) => setSchoolElementary(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Middle School (1-10)</label>
                  <input type="number" step="0.1" min="1" max="10" value={schoolMiddle} onChange={(e) => setSchoolMiddle(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">High School (1-10)</label>
                  <input type="number" step="0.1" min="1" max="10" value={schoolHigh} onChange={(e) => setSchoolHigh(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Air Quality Index (AQI)</label>
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
                <input type="text" value={soilType} onChange={(e) => setSoilType(e.target.value)} className="form-input" placeholder="e.g. Clay loam, stable" />
              </div>

              <div className="form-group">
                <label className="form-label">Nearby Malls</label>
                <input type="text" value={mallsNearby} onChange={(e) => setMallsNearby(e.target.value)} className="form-input" placeholder="e.g. Westfield, Third Street" />
              </div>

              <div className="form-group">
                <label className="form-label">Nearby Forest Preserves</label>
                <input type="text" value={forestPreserves} onChange={(e) => setForestPreserves(e.target.value)} className="form-input" placeholder="e.g. Alum Rock Park" />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Latitude</label>
                  <input type="number" step="0.0001" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Longitude</label>
                  <input type="number" step="0.0001" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

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
            <p className="modal-subtitle">Modify parameters, ROI data, and Zillow environmental variables.</p>
            
            <form onSubmit={handleUpdateSubmit} style={{ marginTop: '1.25rem' }} className="modal-scroll-form">
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
                  <label className="form-label">Other Closings ($)</label>
                  <input type="number" value={otherPurchaseCosts} onChange={(e) => setOtherPurchaseCosts(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Repair Costs ($)</label>
                  <input type="number" value={repairCost} onChange={(e) => setRepairCost(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Taxes ($/yr)</label>
                  <input type="number" value={annualPropertyTax} onChange={(e) => setAnnualPropertyTax(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Insurance ($/yr)</label>
                  <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Monthly HOA ($)</label>
                  <input type="number" value={monthlyHOA} onChange={(e) => setMonthlyHOA(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Maintenance ($)</label>
                  <input type="number" value={annualMaintenance} onChange={(e) => setAnnualMaintenance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">🎓 Schools & Environments</h4>

              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label">Elem. School (1-10)</label>
                  <input type="number" step="0.1" min="1" max="10" value={schoolElementary} onChange={(e) => setSchoolElementary(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Middle School (1-10)</label>
                  <input type="number" step="0.1" min="1" max="10" value={schoolMiddle} onChange={(e) => setSchoolMiddle(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">High School (1-10)</label>
                  <input type="number" step="0.1" min="1" max="10" value={schoolHigh} onChange={(e) => setSchoolHigh(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Air Quality Index (AQI)</label>
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

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Latitude</label>
                  <input type="number" step="0.0001" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Longitude</label>
                  <input type="number" step="0.0001" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

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

      {/* Styled Sheets & Projections Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .sub-tabs-container {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .sub-tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
          font-weight: 650;
          cursor: pointer;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .sub-tab-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
        }

        .sub-tab-btn.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .small-financial-yields {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .yield-mini-badge {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.35rem;
          border-radius: var(--radius-sm);
        }

        .yield-mini-badge .yield-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
        }

        .yield-mini-badge .yield-val {
          font-size: 0.95rem;
          font-weight: 800;
        }

        .expanded-zillow-details {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .expanded-section-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .schools-rating-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .school-rating-bar {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          gap: 0.5rem;
        }

        .school-lbl {
          flex: 1.5;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .rating-track-wrapper {
          flex: 2;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .rating-track-fill {
          height: 100%;
          background: linear-gradient(90deg, #ecc94b 0%, #48bb78 100%);
          border-radius: var(--radius-full);
        }

        .rating-num {
          flex: 0.8;
          text-align: right;
          font-weight: 750;
          color: #48bb78;
        }

        .environ-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .environ-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .env-title {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
          font-weight: 600;
        }

        .env-val {
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
        }

        .amenities-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .amenity-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .amenity-lbl {
          color: var(--text-muted);
          font-weight: 600;
        }

        .amenity-val {
          color: var(--text-primary);
          font-weight: 600;
          max-width: 60%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mock-map-box {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mock-map-marker {
          font-size: 1.5rem;
        }

        .mock-map-details {
          font-size: 0.75rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }

        .modal-scroll-form {
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .modal-section-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #fff;
          margin: 1.25rem 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* ROI Calculator Styles */
        .calculator-layout-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 1.5rem;
          align-items: start;
        }

        .calculator-inputs-column {
          background: var(--bg-card);
          padding: 1.5rem;
        }

        .calculator-outputs-column {
          background: var(--bg-card);
          padding: 1.75rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
        }

        .inputs-group-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-primary);
          text-transform: uppercase;
          margin-bottom: 0.85rem;
          letter-spacing: 0.04em;
        }

        .yields-summary-cards {
          margin: 1.25rem 0;
        }

        .yield-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
        }

        .yield-card .card-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .yield-card .card-val {
          font-size: 1.45rem;
          font-weight: 850;
        }

        .calc-sub-box h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .financials-compact-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.82rem;
        }

        .financials-compact-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
        }

        .financials-compact-table tr.border-t td {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 0.6rem;
          color: #fff;
        }

        .projections-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
          margin-top: 0.75rem;
        }

        .projections-table th, .projections-table td {
          padding: 0.6rem 0.5rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .projections-table th {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          font-weight: 700;
        }

        .projections-table td {
          color: var(--text-primary);
        }

        .compare-sheet-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .compare-sheet-table th, .compare-sheet-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .compare-sheet-table th {
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
        }

        .compare-sheet-table td {
          color: var(--text-primary);
        }

        .compare-sheet-table tr.section-row td {
          background: rgba(255, 255, 255, 0.03);
          font-weight: 850;
          color: #fff;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        .compare-sheet-table .metric-lbl {
          font-weight: 750;
          color: var(--text-muted);
          width: 25%;
        }

        /* Printable Sheet Styling (Print Media Override) */
        .sheet-print-header {
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
            color: #000 !important;
            background: #fff !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .sheet-print-header {
            display: block !important;
            margin-bottom: 1.5rem;
            color: #000 !important;
            border-bottom: 2px solid #000;
            padding-bottom: 0.5rem;
          }
          .sheet-print-header h2 {
            font-size: 20pt;
            font-weight: bold;
            margin: 0;
          }
          .sheet-print-header .address-lbl {
            font-size: 14pt;
            font-weight: 600;
            margin: 4px 0 0 0;
          }
          .sheet-print-header .date-stamp {
            font-size: 9pt;
            color: #555;
            margin: 4px 0 0 0;
          }
          .no-print {
            display: none !important;
          }
          .yield-card {
            background: #f7fafc !important;
            border: 1px solid #cbd5e0 !important;
            color: #000 !important;
          }
          .yield-card .card-val {
            color: #000 !important;
          }
          .projections-table th {
            background: #edf2f7 !important;
            color: #000 !important;
            border-bottom: 2px solid #cbd5e0 !important;
          }
          .projections-table td {
            color: #000 !important;
            border-bottom: 1px solid #e2e8f0 !important;
          }
          .financials-compact-table td {
            color: #333 !important;
            border-bottom: 1px solid #edf2f7 !important;
          }
          .financials-compact-table tr.border-t td {
            border-top: 2px solid #000 !important;
            color: #000 !important;
          }
          .text-success {
            color: #2f855a !important;
          }
          .text-warning {
            color: #c05621 !important;
          }
          .text-danger {
            color: #9b2c2c !important;
          }
        }
      `}} />
    </div>
  )
}
