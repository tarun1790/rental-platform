import React, { useState, useEffect } from 'react'

export default function PropertiesView({ properties, onAddProperty, onUpdateProperty, onDeleteProperty }) {
  // Navigation & Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState('portfolio') // 'portfolio' (Map & Grid), 'spreadsheet' (Spreadsheet Log), 'compare'
  
  // Selection states
  const [comparedPropertyIds, setComparedPropertyIds] = useState([])
  const [activeDetailProp, setActiveDetailProp] = useState(null)
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false)

  // Leaflet Map states
  const [mapInstance, setMapInstance] = useState(null)
  const [markers, setMarkers] = useState([])

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [maxRentFilter, setMaxRentFilter] = useState('Any')
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('Any')

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

  // Geographical & RealPal Columns
  const [schoolElementary, setSchoolElementary] = useState(8.5)
  const [schoolMiddle, setSchoolMiddle] = useState(9.0)
  const [schoolHigh, setSchoolHigh] = useState(8.8)
  const [airQualityIndex, setAirQualityIndex] = useState(32)
  const [fireRisk, setFireRisk] = useState('Low')
  const [soilType, setSoilType] = useState('Sandy clay, stable')
  const [mallsNearby, setMallsNearby] = useState('Water Tower Place')
  const [forestPreserves, setForestPreserves] = useState('Lincoln Park')
  const [latitude, setLatitude] = useState(41.9082)
  const [longitude, setLongitude] = useState(-87.6322)
  const [market, setMarket] = useState('Chicago')
  const [units, setUnits] = useState(1)
  const [valueAddPotential, setValueAddPotential] = useState('')
  const [dealStatus, setDealStatus] = useState('Passed')

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
    setSoilType('Sandy clay, stable')
    setMallsNearby('Water Tower Place')
    setForestPreserves('Lincoln Park')
    setLatitude(41.9082)
    setLongitude(-87.6322)
    setMarket('Chicago')
    setUnits(1)
    setValueAddPotential('')
    setDealStatus('Passed')
    setEditingProperty(null)
  }

  // Edit populator
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
    setSoilType(prop.soilType ?? 'Sandy clay, stable')
    setMallsNearby(prop.mallsNearby ?? 'Water Tower Place')
    setForestPreserves(prop.forestPreserves ?? 'Lincoln Park')
    setLatitude(prop.latitude ?? 41.9082)
    setLongitude(prop.longitude ?? -87.6322)
    setMarket(prop.market ?? 'Chicago')
    setUnits(prop.units ?? 1)
    setValueAddPotential(prop.valueAddPotential ?? '')
    setDealStatus(prop.dealStatus ?? 'Passed')
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
      longitude: parseFloat(longitude) || 0,
      market: market || 'Chicago',
      units: parseInt(units) || 1,
      valueAddPotential: valueAddPotential || '',
      dealStatus: dealStatus || 'Passed'
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
      if (activeDetailProp?.id === id) {
        setActiveDetailProp(null)
        setIsDetailDrawerOpen(false)
      }
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

    const years = prop.holdingPeriodYears ?? 5
    const projections = []
    let currentValue = price
    let currentRent = monthlyRent * 12
    let currentTax = prop.annualPropertyTax ?? 9000
    let currentInsurance = prop.annualInsurance ?? 1200
    let currentHOA = (prop.monthlyHOA ?? 0) * 12
    let currentMaint = prop.annualMaintenance ?? 2000
    let currentOther = prop.otherExpenses ?? 500

    for (let y = 1; y <= years; y++) {
      currentValue = currentValue * (1 + (prop.appreciationRatePercent ?? 3) / 100)
      
      if (y > 1) {
        currentRent = currentRent * (1 + 3 / 100)
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
    if (searchQuery && !prop.address.toLowerCase().includes(searchQuery.toLowerCase()) && !(prop.market && prop.market.toLowerCase().includes(searchQuery.toLowerCase()))) return false
    if (maxRentFilter !== 'Any' && prop.rent > parseInt(maxRentFilter)) return false
    return true
  })

  // Set default active detail prop
  useEffect(() => {
    if (filteredProperties.length > 0 && !activeDetailProp) {
      setActiveDetailProp(filteredProperties[0])
    }
  }, [filteredProperties, activeDetailProp])

  // OpenStreetMap / Leaflet Setup
  useEffect(() => {
    if (window.L && !mapInstance && activeSubTab === 'portfolio') {
      const map = window.L.map('map-viewport').setView([41.8781, -87.6298], 11)
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)
      setMapInstance(map)
    }
  }, [activeSubTab, mapInstance])

  useEffect(() => {
    if (mapInstance && window.L) {
      // Clear pins
      markers.forEach(m => m.remove())
      const newMarkers = []

      filteredProperties.forEach(prop => {
        if (prop.latitude && prop.longitude) {
          const formattedPrice = prop.purchasePrice 
            ? `$${Math.round(prop.purchasePrice / 1000)}K` 
            : `$${Math.round(prop.rent / 100) / 10}K`

          // Custom Green Circular Tag marker matching screenshot style
          const greenIcon = window.L.divIcon({
            className: 'custom-map-pin-badge',
            html: `<div class="map-pin-inner">${formattedPrice}</div>`,
            iconSize: [52, 26]
          })

          const marker = window.L.marker([prop.latitude, prop.longitude], { icon: greenIcon })
            .addTo(mapInstance)
            .bindPopup(`<strong>${prop.address}</strong><br/>Rent: $${prop.rent.toLocaleString()}/mo`)
          
          marker.on('click', () => {
            setActiveDetailProp(prop)
            handleLoadPropertyToCalculator(prop)
            setIsDetailDrawerOpen(true)
          })

          newMarkers.push(marker)
        }
      })
      setMarkers(newMarkers)
    }
  }, [mapInstance, filteredProperties])

  // Zoom on active prop
  useEffect(() => {
    if (mapInstance && activeDetailProp && activeDetailProp.latitude && activeDetailProp.longitude) {
      mapInstance.setView([activeDetailProp.latitude, activeDetailProp.longitude], 13)
    }
  }, [activeDetailProp, mapInstance])

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
    <div className="realpal-dashboard-container animate-fade-in">
      
      {/* 1. Left Vertical Icon Sidebar (Matching Search, Updates, Favorites in screenshot) */}
      <aside className="left-icon-sidebar no-print">
        <div className="sidebar-logo">RP</div>
        <div className="sidebar-icons-list">
          <button className={`sidebar-icon-btn ${activeSubTab === 'portfolio' ? 'active' : ''}`} onClick={() => { setActiveSubTab('portfolio'); setIsDetailDrawerOpen(false); }} title="Search Maps & Listings">
            🔍<span className="lbl">Search</span>
          </button>
          <button className={`sidebar-icon-btn ${activeSubTab === 'spreadsheet' ? 'active' : ''}`} onClick={() => { setActiveSubTab('spreadsheet'); setIsDetailDrawerOpen(false); }} title="Spreadsheet Underwriting Sheet">
            📄<span className="lbl">Sheet</span>
          </button>
          <button className={`sidebar-icon-btn ${activeSubTab === 'compare' ? 'active' : ''}`} onClick={() => { setActiveSubTab('compare'); setIsDetailDrawerOpen(false); }} title="Comparison Matrix">
            ⚖️<span className="lbl">Compare</span>
          </button>
          <button className="sidebar-icon-btn" onClick={() => { resetForm(); setShowAddModal(true); }} title="Post Rental Listing">
            ⚙️<span className="lbl">List</span>
          </button>
        </div>
      </aside>

      {/* Main content wrapper next to sidebar */}
      <div className="main-viewport-content">

        {/* 2. Top Navigation Header & Zillow-style Filter Bar */}
        <header className="top-search-filter-bar no-print">
          <div className="search-bar-input-box">
            <input 
              type="text" 
              placeholder="Chicago, IL"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="top-search-address-field"
            />
            {searchQuery && <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>}
            <button className="search-trigger-btn">🔍</button>
          </div>

          <div className="top-dropdown-filters">
            <select value={maxRentFilter} onChange={(e) => setMaxRentFilter(e.target.value)} className="top-dropdown-select">
              <option value="Any">Any Price</option>
              <option value="1500">Max $1,500/mo</option>
              <option value="2500">Max $2,500/mo</option>
              <option value="3500">Max $3,500/mo</option>
              <option value="5000">Max $5,000/mo</option>
            </select>

            <select value={propertyTypeFilter} onChange={(e) => setPropertyTypeFilter(e.target.value)} className="top-dropdown-select">
              <option value="Any">Home Type</option>
              <option value="Single Family">Single Family</option>
              <option value="Multi Family">Multi Family</option>
              <option value="Condo">Condo</option>
              <option value="Apartment">Apartment</option>
            </select>

            <button className="btn-filter-more">Filters ⚙️</button>
          </div>

          <button className="btn-save-search-green">Save Search</button>
        </header>

        {/* 3. Dashboard views */}

        {/* MAP SEARCH VIEW (Split pane matching screenshot) */}
        {activeSubTab === 'portfolio' && (
          <div className="dashboard-split-screen">
            
            {/* Left Side Pane: Leaflet Map */}
            <div className="split-left-map-viewport no-print">
              <div id="map-viewport"></div>
            </div>

            {/* Right Side Pane: Listings Cards Grid / Details Drawer */}
            <div className="split-right-listings-grid-pane">
              
              {!isDetailDrawerOpen ? (
                // Listings Grid Pane (2-columns matching screenshot)
                <div className="listings-grid-scroller no-print">
                  <div className="listings-scroller-header">
                    <h3>Chicago, IL Real Estate & Homes For Rent</h3>
                    <span>{filteredProperties.length} results • Sort: <strong>Homes for You</strong></span>
                  </div>

                  {filteredProperties.length === 0 ? (
                    <div className="empty-grid-state">
                      <span className="large-emoji-display">🏠</span>
                      <h4>No listings match your search</h4>
                      <p>Try clearing your queries or check different price parameters.</p>
                    </div>
                  ) : (
                    <div className="listings-two-col-grid">
                      {filteredProperties.map(prop => {
                        const financials = calculateROI(prop)
                        return (
                          <div 
                            key={prop.id} 
                            className="listing-grid-card"
                            onClick={() => { 
                              setActiveDetailProp(prop); 
                              handleLoadPropertyToCalculator(prop); 
                              setIsDetailDrawerOpen(true); 
                            }}
                          >
                            <div className="card-media-gallery">
                              <span className="card-top-left-badge">Spacious layout</span>
                              <span className="card-favorite-heart">❤️</span>
                              
                              {/* Dots indicator at the bottom-center of image */}
                              <div className="card-dots-carousel">
                                <span className="dot active"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                              </div>
                            </div>

                            <div className="card-description-box">
                              <div className="price-line">
                                <h3>${prop.rent.toLocaleString()}/mo</h3>
                              </div>
                              <div className="details-line">
                                <strong>{prop.units} Units</strong> • <strong>{prop.type}</strong> • <strong>1,450 sqft</strong> • Active
                              </div>
                              <div className="address-line">
                                {prop.address}
                              </div>
                              <div className="agency-line">
                                RealPal Underwritten Listing • {prop.dealStatus}
                              </div>

                              <div className="underwriting-badge-row">
                                <span className="badge cap">Cap Rate: {financials.capRate.toFixed(1)}%</span>
                                <span className="badge coc">CoC: {financials.cashOnCash.toFixed(1)}%</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ) : (
                // Detailed ROI Underwriting Drawer (Covering the listings grid)
                <div className="sliding-detail-drawer print-sheet">
                  
                  <div className="drawer-nav-header no-print">
                    <button className="btn-close-drawer" onClick={() => setIsDetailDrawerOpen(false)}>
                      ← Back to listings
                    </button>
                    <button className="btn-print-pdf-green" onClick={() => window.print()}>
                      🖨️ Export PDF Property Sheet
                    </button>
                  </div>

                  <div className="print-header print-only">
                    <h2>RealPal Property Underwriting Log</h2>
                    <h3>{activeDetailProp.address}</h3>
                    <p>Market: {activeDetailProp.market} | Units: {activeDetailProp.units} | Status: {activeDetailProp.dealStatus}</p>
                    <p>Generated Date: {new Date().toLocaleDateString()}</p>
                  </div>

                  <div className="drawer-body-scrollable">
                    <div className="drawer-hero-block">
                      <span className="badge-guarantee">🛡️ RealPal Certified Sheet</span>
                      <h2>{activeDetailProp.address}</h2>
                      <p>{activeDetailProp.units} Units • {activeDetailProp.market}</p>
                    </div>

                    {/* Financial stats yields row */}
                    <div className="yields-grid-row">
                      <div className="yield-mini-card">
                        <span className="lbl">Rent/mo</span>
                        <span className="val">${activeDetailProp.rent.toLocaleString()}</span>
                      </div>
                      <div className="yield-mini-card">
                        <span className="lbl">Cap Rate</span>
                        <span className="val text-green">{activeDetailFinancials.capRate.toFixed(2)}%</span>
                      </div>
                      <div className="yield-mini-card">
                        <span className="lbl">Cash-on-Cash</span>
                        <span className={`val ${activeDetailFinancials.cashOnCash >= 0 ? 'text-green' : 'text-red'}`}>
                          {activeDetailFinancials.cashOnCash.toFixed(2)}%
                        </span>
                      </div>
                    </div>

                    <div className="prop-divider"></div>

                    {/* Underwriting notes */}
                    <div className="underwriting-notes-panel">
                      <h4>💡 Underwriting & Value-Add Details</h4>
                      <p>{activeDetailProp.valueAddPotential || 'No value-add potential registered for this listing.'}</p>
                      <div className="status-badge-lbl">Status: <strong>{activeDetailProp.dealStatus}</strong></div>
                    </div>

                    <div className="prop-divider"></div>

                    {/* ROI Calculator Inputs */}
                    <h3 className="section-title">📊 ROI Parameters & Variable Calculator</h3>
                    
                    <div className="inline-calculator-block">
                      
                      <div className="inputs-strip no-print">
                        <div className="form-grid-3">
                          <div className="form-field-box">
                            <label>Purchase Price ($)</label>
                            <input type="number" value={purchasePrice} onChange={(e) => { setPurchasePrice(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, purchasePrice: parseFloat(e.target.value) || 0}); }} />
                          </div>
                          <div className="form-field-box">
                            <label>Down Payment (%)</label>
                            <input type="number" value={downPaymentPercent} onChange={(e) => { setDownPaymentPercent(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, downPaymentPercent: parseFloat(e.target.value) || 0}); }} />
                          </div>
                          <div className="form-field-box">
                            <label>Interest Rate (%)</label>
                            <input type="number" step="0.01" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, interestRate: parseFloat(e.target.value) || 0}); }} />
                          </div>
                          <div className="form-field-box">
                            <label>Property Tax ($/yr)</label>
                            <input type="number" value={annualPropertyTax} onChange={(e) => { setAnnualPropertyTax(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, annualPropertyTax: parseFloat(e.target.value) || 0}); }} />
                          </div>
                          <div className="form-field-box">
                            <label>HOI / Insurance ($/yr)</label>
                            <input type="number" value={annualInsurance} onChange={(e) => { setAnnualInsurance(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, annualInsurance: parseFloat(e.target.value) || 0}); }} />
                          </div>
                          <div className="form-field-box">
                            <label>Maintenance ($/yr)</label>
                            <input type="number" value={annualMaintenance} onChange={(e) => { setAnnualMaintenance(parseFloat(e.target.value) || 0); onUpdateProperty(activeDetailProp.id, {...activeDetailProp, annualMaintenance: parseFloat(e.target.value) || 0}); }} />
                          </div>
                        </div>
                        <p className="auto-save-warning">⚡ Changes save to listing immediately</p>
                      </div>

                      <div className="outputs-table-box">
                        <table className="compact-roi-yield-table">
                          <tbody>
                            <tr><td>Initial Capital Invested</td><td className="text-right font-bold">${Math.round(activeDetailFinancials.initialCash).toLocaleString()}</td></tr>
                            <tr><td>Monthly Mortgage (P&I)</td><td className="text-right text-red">-${Math.round(activeDetailFinancials.monthlyMortgage).toLocaleString()}</td></tr>
                            <tr><td>Taxes & HOI (Monthly)</td><td className="text-right text-red">-${Math.round((annualPropertyTax + annualInsurance) / 12).toLocaleString()}</td></tr>
                            <tr><td>Maintenance & Vacancy (Monthly)</td><td className="text-right text-red">-${Math.round((annualMaintenance + activeDetailFinancials.vacancyLoss) / 12).toLocaleString()}</td></tr>
                            <tr className="border-t font-bold"><td>Net Cash Flow</td><td className="text-right text-green">${Math.round(activeDetailFinancials.cashFlow).toLocaleString()}/yr</td></tr>
                          </tbody>
                        </table>
                      </div>

                    </div>

                    <div className="prop-divider"></div>

                    {/* Projections logs */}
                    <h3 className="section-title">📈 Growth Log & Projections</h3>
                    <div className="table-responsive">
                      <table className="projections-log-table">
                        <thead>
                          <tr>
                            <th>Year</th>
                            <th>Property Value</th>
                            <th>Rental Income</th>
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

                    {/* Schools ratings */}
                    <h3 className="section-title">🎓 GreatSchools™ Nearby Ratings</h3>
                    <div className="schools-bars-group">
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

                    {/* Location safety hazards */}
                    <h3 className="section-title">🌱 Environment & Safety Indicators</h3>
                    <table className="env-summary-table">
                      <tbody>
                        <tr><td>Air Quality Index (AQI)</td><td><strong>{activeDetailProp.airQualityIndex ?? 32} AQI (Good)</strong></td></tr>
                        <tr><td>Wildfire Risk</td><td className="text-orange font-bold">{activeDetailProp.fireRisk ?? 'Low'}</td></tr>
                        <tr><td>Soil Framework</td><td>{activeDetailProp.soilType ?? 'Sandy clay, stable'}</td></tr>
                        <tr><td>Forest Preserves Nearby</td><td>{activeDetailProp.forestPreserves ?? 'None'}</td></tr>
                        <tr><td>Shopping Malls Nearby</td><td>{activeDetailProp.mallsNearby ?? 'None'}</td></tr>
                      </tbody>
                    </table>

                    <div className="sheet-actions no-print" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                      <button className="btn-print-pdf-green" onClick={() => window.print()}>
                        🖨️ Export PDF Property Sheet
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>
        )}

        {/* SPREADSHEET UNDERWRITING LOG VIEW (Perfect recreation of uploaded image) */}
        {activeSubTab === 'spreadsheet' && (
          <div className="spreadsheet-view-container no-print">
            <div className="spreadsheet-card-container">
              <h2 className="spreadsheet-title">📋 Real Estate Investment Underwriting log</h2>
              <p className="spreadsheet-subtitle">Chicago Area Portfolios Underwriting Log</p>
              
              <div className="table-responsive">
                <table className="spreadsheet-underwriting-table">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Market</th>
                      <th className="text-center">Units</th>
                      <th className="text-right">Ask Price ($)</th>
                      <th className="text-right">Gross Income ($/yr)</th>
                      <th className="text-right">Total Expenses ($/yr)</th>
                      <th className="text-right">NOI ($/yr)</th>
                      <th className="text-center">Adj Cap Rate</th>
                      <th className="text-right">Cash Flow ($/yr)</th>
                      <th className="text-center">CoC Return</th>
                      <th>Value-Add Potential</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProperties.map(prop => {
                      const financials = calculateROI(prop)
                      const isPassed = prop.dealStatus && prop.dealStatus.toLowerCase().includes('passed')
                      
                      return (
                        <tr key={prop.id}>
                          <td className="font-semibold">{prop.address}</td>
                          <td>{prop.market || 'Chicago'}</td>
                          <td className="text-center text-blue font-semibold">{prop.units || 1}</td>
                          <td className="text-right text-blue font-semibold">${(prop.purchasePrice ?? 320000).toLocaleString()}</td>
                          <td className="text-right">${Math.round(prop.rent * 12).toLocaleString()}</td>
                          <td className="text-right">${Math.round(financials.annualExpenses).toLocaleString()}</td>
                          <td className="text-right font-semibold">${Math.round(financials.noi).toLocaleString()}</td>
                          <td className="text-center text-blue font-semibold">{financials.capRate.toFixed(1)}%</td>
                          <td className={`text-right font-semibold ${financials.cashFlow >= 0 ? '' : 'text-red'}`}>
                            {financials.cashFlow >= 0 ? '' : '('}${Math.abs(Math.round(financials.cashFlow)).toLocaleString()}${financials.cashFlow >= 0 ? '' : ')'}
                          </td>
                          <td className={`text-center font-semibold ${financials.cashOnCash >= 0 ? '' : 'text-red'}`}>
                            {financials.cashOnCash.toFixed(1)}%
                          </td>
                          <td className="value-add-text-cell">{prop.valueAddPotential || 'Stabilized property.'}</td>
                          <td className="status-cell">
                            <span className={`status-badge-lbl ${isPassed ? 'passed' : 'pursue'}`}>
                              {prop.dealStatus || 'Passed'}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn-print-pdf-green" onClick={() => window.print()}>
                  🖨️ Print Underwriting Log
                </button>
              </div>
            </div>
          </div>
        )}

        {/* COMPARISON VIEW TAB */}
        {activeSubTab === 'compare' && (
          <div className="spreadsheet-view-container no-print">
            {comparedPropertyIds.length === 0 ? (
              <div className="empty-grid-state">
                <span className="large-emoji-display">⚖️</span>
                <h4>No properties selected for comparison</h4>
                <p>Go back to the Search Listings view and select the balance icon (⚖️) on up to 3 listings to compare them.</p>
              </div>
            ) : (
              <div className="spreadsheet-card-container">
                <h2 className="spreadsheet-title">⚖️ Side-by-Side Underwriting Comparison</h2>
                <table className="comparison-underwriting-table">
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
                    <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🏡 Basic Parameters</td></tr>
                    <tr>
                      <td className="lbl">Type</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.type}</td>)}
                    </tr>
                    <tr>
                      <td className="lbl">Market</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.market}</td>)}
                    </tr>
                    <tr>
                      <td className="lbl">Units</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.units}</td>)}
                    </tr>

                    <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>💰 Underwriting Yields</td></tr>
                    <tr>
                      <td className="lbl">Monthly Rent</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-bold">${properties.find(p => p.id === pid)?.rent.toLocaleString()}</td>)}
                    </tr>
                    <tr>
                      <td className="lbl">Ask Price</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center font-bold">${(properties.find(p => p.id === pid)?.purchasePrice ?? 320000).toLocaleString()}</td>)}
                    </tr>
                    <tr>
                      <td className="lbl">Adjusted Cap Rate</td>
                      {comparedPropertyIds.map(pid => {
                        const prop = properties.find(p => p.id === pid)
                        const roi = calculateROI(prop)
                        return <td key={pid} className="text-center font-bold text-green">{roi.capRate.toFixed(2)}%</td>
                      })}
                    </tr>
                    <tr>
                      <td className="lbl">CoC Return</td>
                      {comparedPropertyIds.map(pid => {
                        const prop = properties.find(p => p.id === pid)
                        const roi = calculateROI(prop)
                        return <td key={pid} className={`text-center font-bold ${roi.cashOnCash >= 0 ? 'text-green' : 'text-red'}`}>{roi.cashOnCash.toFixed(2)}%</td>
                      })}
                    </tr>

                    <tr className="section-row"><td colSpan={comparedPropertyIds.length + 1}>🌱 Location Hazard Profile</td></tr>
                    <tr>
                      <td className="lbl">Air Quality Index</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center">{properties.find(p => p.id === pid)?.airQualityIndex ?? 32} AQI</td>)}
                    </tr>
                    <tr>
                      <td className="lbl">Wildfire Risk</td>
                      {comparedPropertyIds.map(pid => <td key={pid} className="text-center text-orange font-bold">{properties.find(p => p.id === pid)?.fireRisk ?? 'Low'}</td>)}
                    </tr>
                  </tbody>
                </table>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button onClick={() => setComparedPropertyIds([])} className="btn-print-pdf-green">Clear Selections</button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Add / Edit Listing Modal */}
      {showAddModal && (
        <div className="modal-overlay no-print">
          <div className="modal-content">
            <button className="modal-close" onClick={() => { setShowAddModal(false); resetForm(); }}>×</button>
            <h3 className="modal-title">{editingProperty ? 'Edit Underwriting Listing' : 'Post Underwriting Listing'}</h3>
            <p className="modal-subtitle">Fill in details to build cash flow sheet and map pins in Chicago.</p>
            
            <form onSubmit={handleFormSubmit} style={{ marginTop: '1.25rem' }} className="modal-scroll-form">
              
              <div className="form-group">
                <label className="form-label">Property Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1422 N La Salle Dr, Chicago, IL 60610"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label">Market *</label>
                  <input type="text" required placeholder="e.g. Uptown, Chicago" value={market} onChange={(e) => setMarket(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Units *</label>
                  <input type="number" required min="1" value={units} onChange={(e) => setUnits(parseInt(e.target.value) || 1)} className="form-input" />
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
                  <label className="form-label">Deal Status</label>
                  <select value={dealStatus} onChange={(e) => setDealStatus(e.target.value)} className="form-select">
                    <option value="Passed">Passed</option>
                    <option value="Passed at ask">Passed at ask</option>
                    <option value="PURSUE - request T12">PURSUE - request T12</option>
                    <option value="Pending - backup offer?">Pending - backup offer?</option>
                    <option value="Pull rent roll">Pull rent roll</option>
                    <option value="Verify listing">Verify listing</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Value-Add Potential Description</label>
                <textarea 
                  value={valueAddPotential} 
                  onChange={(e) => setValueAddPotential(e.target.value)} 
                  className="form-input" 
                  style={{ height: '70px', resize: 'vertical' }}
                  placeholder="Notes on rent reposition, cosmetic renovation, heat bill-back..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Tenant Full Name (Optional)</label>
                <input type="text" placeholder="Vacant" value={tenantName} onChange={(e) => setTenantName(e.target.value)} className="form-input" />
              </div>

              {tenantName && (
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
              )}

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">📊 Acquisition & ROI Parameters</h4>
              
              <div className="grid-3">
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
                  <label className="form-label">Annual Taxes ($/yr)</label>
                  <input type="number" value={annualPropertyTax} onChange={(e) => setAnnualPropertyTax(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Insurance ($/yr)</label>
                  <input type="number" value={annualInsurance} onChange={(e) => setAnnualInsurance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Annual Maintenance ($/yr)</label>
                  <input type="number" value={annualMaintenance} onChange={(e) => setAnnualMaintenance(parseFloat(e.target.value) || 0)} className="form-input" />
                </div>
              </div>

              <div className="prop-divider"></div>
              <h4 className="modal-section-title">📍 Map Coordinates (Chicago Area)</h4>
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
                  Publish Listing
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Styled Sheets CSS overriding to Light Green & White Corporate Theme */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --primary-green: #2e7d32;
          --primary-hover: #1b5e20;
          --light-green-bg: #f1f8e9;
          --white: #ffffff;
          --border-color: #cbd5e0;
          --text-dark: #2d3748;
          --text-muted: #718096;
        }

        .realpal-dashboard-container {
          display: flex;
          background-color: #f4f7f6;
          color: var(--text-dark);
          min-height: 100vh;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          overflow: hidden;
        }

        /* 1. Vertical Sidebar */
        .left-icon-sidebar {
          width: 75px;
          background: var(--white);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 0;
          flex-shrink: 0;
        }

        .sidebar-logo {
          color: var(--primary-green);
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: -0.05em;
          margin-bottom: 2rem;
        }

        .sidebar-icons-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
          align-items: center;
        }

        .sidebar-icon-btn {
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          cursor: pointer;
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          transition: all 0.15s;
        }

        .sidebar-icon-btn:hover, .sidebar-icon-btn.active {
          color: var(--primary-green);
          background: var(--light-green-bg);
        }

        .sidebar-icon-btn .lbl {
          font-size: 0.65rem;
          font-weight: 750;
        }

        /* Viewport content next to sidebar */
        .main-viewport-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }

        /* 2. Top Navigation Bar */
        .top-search-filter-bar {
          display: flex;
          align-items: center;
          background: var(--white);
          border-bottom: 1px solid var(--border-color);
          padding: 0.8rem 2rem;
          gap: 1.5rem;
          height: 65px;
          flex-shrink: 0;
        }

        .search-bar-input-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 320px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--white);
        }

        .top-search-address-field {
          width: 100%;
          border: none;
          padding: 0.55rem 1rem;
          font-size: 0.88rem;
          outline: none;
          color: var(--text-dark);
          font-weight: 600;
        }

        .clear-search-btn {
          background: transparent;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          color: var(--text-muted);
          padding: 0 0.5rem;
        }

        .search-trigger-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0 0.75rem;
          color: var(--text-muted);
        }

        .top-dropdown-filters {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .top-dropdown-select {
          border: 1px solid var(--border-color);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-md);
          outline: none;
          font-size: 0.85rem;
          background: var(--white);
          font-weight: 600;
          color: var(--text-dark);
        }

        .btn-filter-more {
          background: var(--white);
          border: 1px solid var(--border-color);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          color: var(--text-dark);
        }

        .btn-filter-more:hover {
          background: #f7fafc;
        }

        .btn-save-search-green {
          background: var(--primary-green);
          color: var(--white);
          border: none;
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 750;
          cursor: pointer;
          font-size: 0.9rem;
          margin-left: auto;
          transition: background 0.15s;
        }

        .btn-save-search-green:hover {
          background: var(--primary-hover);
        }

        /* 3. Split Screen Layout */
        .dashboard-split-screen {
          display: flex;
          flex: 1;
          height: calc(100vh - 65px);
          overflow: hidden;
        }

        .split-left-map-viewport {
          width: 50%;
          height: 100%;
          background: #e5e9f0;
          border-right: 1px solid var(--border-color);
        }

        .split-right-listings-grid-pane {
          width: 50%;
          height: 100%;
          position: relative;
          background: var(--white);
          overflow: hidden;
        }

        /* Scroller for listings grid */
        .listings-grid-scroller {
          height: 100%;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .listings-scroller-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
          gap: 0.25rem;
        }

        .listings-scroller-header h3 {
          font-size: 1.25rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .listings-scroller-header span {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .listings-two-col-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        /* Listing Grid Card (Matching screenshot style) */
        .listing-grid-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--white);
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
        }

        .listing-grid-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-green);
        }

        .card-media-gallery {
          height: 150px;
          background: linear-gradient(135deg, var(--primary-green) 0%, #a5d6a7 100%);
          position: relative;
        }

        .card-top-left-badge {
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-dark);
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .card-favorite-heart {
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
          font-size: 1.1rem;
          cursor: pointer;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
        }

        /* Dots indicator overlay on image bottom */
        .card-dots-carousel {
          position: absolute;
          bottom: 0.6rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.25rem;
        }

        .card-dots-carousel .dot {
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }

        .card-dots-carousel .dot.active {
          background: var(--white);
          width: 6px;
          height: 6px;
        }

        .card-description-box {
          padding: 1rem;
        }

        .price-line h3 {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .details-line {
          font-size: 0.82rem;
          color: var(--text-dark);
          font-weight: 600;
          margin-top: 0.25rem;
        }

        .address-line {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 650;
          margin-top: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .agency-line {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }

        .underwriting-badge-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.6rem;
        }

        .underwriting-badge-row .badge {
          font-size: 0.68rem;
          font-weight: 750;
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
        }

        .underwriting-badge-row .badge.cap {
          background: rgba(46, 125, 50, 0.08);
          color: var(--primary-green);
        }

        .underwriting-badge-row .badge.coc {
          background: rgba(221, 107, 32, 0.08);
          color: #dd6b20;
        }

        /* 4. Sliding Detail Drawer (Slides from the right) */
        .sliding-detail-drawer {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: var(--white);
          z-index: 10;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.25s ease-out;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          background: var(--white);
        }

        .btn-close-drawer {
          background: transparent;
          border: none;
          color: var(--primary-green);
          font-size: 0.95rem;
          font-weight: 750;
          cursor: pointer;
        }

        .btn-print-pdf-green {
          background: var(--white);
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 750;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.15s;
        }

        .btn-print-pdf-green:hover {
          background: var(--light-green-bg);
        }

        .drawer-body-scrollable {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .drawer-hero-block h2 {
          font-size: 1.4rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .drawer-hero-block p {
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .badge-guarantee {
          display: inline-block;
          font-size: 0.65rem;
          background: var(--light-green-bg);
          color: var(--primary-green);
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .yields-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .yield-mini-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--light-green-bg);
          border: 1px solid rgba(46, 125, 50, 0.15);
          padding: 0.6rem;
          border-radius: var(--radius-md);
        }

        .yield-mini-card .lbl {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 750;
          text-transform: uppercase;
        }

        .yield-mini-card .val {
          font-size: 1.15rem;
          font-weight: 850;
          margin-top: 0.15rem;
        }

        .yield-mini-card .val.text-green {
          color: var(--primary-green);
        }

        .yield-mini-card .val.text-red {
          color: #e53e3e;
        }

        .underwriting-notes-panel {
          background: #f7fafc;
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .underwriting-notes-panel h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-dark);
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .underwriting-notes-panel p {
          font-size: 0.82rem;
          line-height: 1.4;
          color: var(--text-muted);
        }

        .prop-divider {
          height: 1px;
          background: var(--border-color);
          margin: 1.5rem 0;
        }

        .section-title {
          font-size: 0.88rem;
          font-weight: 850;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.75rem;
        }

        .inline-calculator-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .inputs-strip {
          background: #f7fafc;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .form-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .form-field-box {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .form-field-box label {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 750;
        }

        .form-field-box input {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.5rem;
          font-size: 0.82rem;
          outline: none;
          color: var(--text-dark);
        }

        .form-field-box input:focus {
          border-color: var(--primary-green);
        }

        .auto-save-warning {
          text-align: center;
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 0.55rem;
          font-weight: 600;
        }

        .compact-roi-yield-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .compact-roi-yield-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--text-muted);
        }

        .compact-roi-yield-table tr.border-t td {
          border-top: 2px solid var(--text-dark);
          color: var(--text-dark);
          padding-top: 0.6rem;
        }

        .projections-log-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
        }

        .projections-log-table th, .projections-log-table td {
          padding: 0.5rem;
          border-bottom: 1px solid #edf2f7;
          text-align: left;
        }

        .projections-log-table th {
          background: #f7fafc;
          font-weight: 700;
          color: var(--text-muted);
        }

        .schools-bars-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .school-rating-bar {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          gap: 0.5rem;
        }

        .school-lbl {
          flex: 1.5;
          color: var(--text-muted);
          font-weight: 600;
        }

        .rating-track-wrapper {
          flex: 2;
          height: 6px;
          background: rgba(0,0,0,0.06);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .rating-track-fill {
          height: 100%;
          background: linear-gradient(90deg, #ecc94b 0%, var(--primary-green) 100%);
          border-radius: var(--radius-full);
        }

        .rating-num {
          flex: 0.8;
          text-align: right;
          font-weight: 750;
          color: var(--primary-green);
        }

        .env-summary-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .env-summary-table td {
          padding: 0.45rem 0;
          border-bottom: 1px solid #edf2f7;
          color: var(--text-muted);
        }

        .env-summary-table td:last-child {
          text-align: right;
          color: var(--text-dark);
        }

        /* Divicon circular pin on map (Hoffman Estates IL screenshot style) */
        .custom-map-pin-badge {
          background: var(--primary-green);
          color: var(--white);
          border: 2px solid var(--white);
          border-radius: 12px;
          font-size: 0.72rem;
          font-weight: 850;
          text-align: center;
          line-height: 22px;
          box-shadow: var(--shadow-sm);
        }

        /* 5. Spreadsheet View tab (uploaded image) */
        .spreadsheet-view-container {
          padding: 2rem;
          overflow-y: auto;
          flex: 1;
        }

        .spreadsheet-card-container {
          background: var(--white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
        }

        .spreadsheet-title {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--text-dark);
        }

        .spreadsheet-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 0.2rem;
          margin-bottom: 1.5rem;
        }

        .spreadsheet-underwriting-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
        }

        .spreadsheet-underwriting-table th, .spreadsheet-underwriting-table td {
          padding: 0.75rem 0.5rem;
          border-bottom: 1px solid var(--border-color);
          text-align: left;
        }

        .spreadsheet-underwriting-table th {
          background: #edf2f7;
          color: var(--text-dark);
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .spreadsheet-underwriting-table tr:hover {
          background: #f7fafc;
        }

        .value-add-text-cell {
          font-size: 0.75rem;
          line-height: 1.4;
          color: var(--text-muted);
          max-width: 260px;
        }

        .status-badge-lbl {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
        }

        .status-badge-lbl.passed {
          background: #edf2f7;
          color: var(--text-dark);
        }

        .status-badge-lbl.pursue {
          background: #feebc8;
          color: #c05621;
        }

        /* Comparison table */
        .comparison-underwriting-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .comparison-underwriting-table th, .comparison-underwriting-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .comparison-underwriting-table th {
          background: #edf2f7;
          font-weight: bold;
        }

        .comparison-underwriting-table tr.section-row td {
          background: var(--light-green-bg);
          font-weight: 850;
          color: var(--primary-green);
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .comparison-underwriting-table .lbl {
          font-weight: 700;
          color: var(--text-muted);
        }

        /* Utility classes */
        .text-green { color: var(--primary-green) !important; }
        .text-red { color: #e53e3e !important; }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .font-semibold { font-weight: 650; }
        .font-bold { font-weight: 750; }
        .table-responsive { overflow-x: auto; }

        .empty-grid-state {
          text-align: center;
          padding: 5rem 2rem;
        }

        .large-emoji-display {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        /* Print Override */
        .print-header { display: none; }

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
            box-shadow: none !important;
            border: none !important;
          }
          .print-header {
            display: block !important;
            border-bottom: 2px solid #000;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
          }
          .no-print {
            display: none !important;
          }
        }
      `}} />
    </div>
  )
}
