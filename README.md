# RealPal - Property Management & Maintenance Platform

RealPal is a full-stack landlord dashboard designed to manage rental properties, track compliance tasks, and hire local contractors through a real-time maintenance bidding marketplace.

---

## 📱 How to Install the APK

1. **Download the package**:
   * Navigate to the latest successful build page: **[GitHub Action Run #27867376403](https://github.com/tarun1790/rental-platform/actions/runs/27867376403)**
   * Scroll to the bottom of the page to the **Artifacts** section.
   * Click on **`realpal-release-apk`** to download the ZIP file.
2. **Extract the APK**:
   * Extract the downloaded ZIP to get `app-release-unsigned.apk` (or similar `.apk` file).
   * Rename the file to `RealPal.apk`.
3. **Transfer to phone**:
   * Send the `.apk` file to your Android phone (via USB, email, Google Drive, or by downloading it directly on the phone's browser).
4. **Install**:
   * Open the `.apk` file on your device.
   * If prompted, enable **"Install from Unknown Sources"** or **"Allow installation of apps from this source"** in your Android settings.
   * Proceed and complete the installation wizard.

---

## 🗄️ Database: Where is User Data Stored?

All application data, properties, reminders, maintenance tickets, and service-bids are stored in a relational **SQLite database** file:
* **Database File Path**: `server/realpal.db` (absolute path: [realpal.db](file:///c:/rental%20app/server/realpal.db))
* **Database Controller & Schema**: Defined in [db.js](file:///c:/rental%20app/server/db.js).
* **Seeding**: The database automatically initializes itself with pre-populated dummy properties, active reminders, bids, and bulk deals on its first run so that the app is interactive immediately.

---

## ⚡ Core Application Functionalities

RealPal contains the following fully implemented features:

1. **Dashboard & Subscription Settings**
   * Toggle between **Basic Landlord** status and **Premium Subscription** features (unlocking ZIP code volume discounts).
   * Visual health indicators for portfolio value, active maintenance bids, and pending reminders.

2. **Property Portfolio Management**
   * Track property addresses, rental prices, lease start/end dates, tenant names/emails, and occupancy status.
   * Add new properties, update existing ones, and delete properties (automatically unlinking task checklists).

3. **Smart Reminders & Compliance**
   * Pre-configured and custom task list tracking compliance (e.g. fire alarms, smoke detectors), utility bill dates, and general property tasks.
   * Check off tasks dynamically, persisting status changes to the SQLite DB.

4. **Maintenance Bidding Marketplace**
   * Landlords can post repair tickets specifying the category, problem description, and maximum budget.
   * Real-time polling retrieves bid offers dynamically as they arrive from local service providers.

5. **Real-Time Auto-Bidding Simulator**
   * When a new repair ticket is posted, a background queue simulates bids from three local contractors over 7 seconds. Bids come with pricing, star ratings, estimated arrival time, and professional verification badges.
   * Landlords can select and accept bids, which calculates and displays their total money saved.

6. **Bulk Neighborhood Service Pools**
   * Group discount service requests pooled by ZIP code (e.g. bulk pest control, lawn care).
   * Landlords can join or leave pools to unlock discounted pricing once the target number of participating landlords is met.

7. **Landlord Feedback Portal**
   * Allows landlords to submit ratings and written reviews, which are persisted to the database and listed on the feedback board.

---

## 🛠️ How to Run Locally

### 1. Start the API Server
Runs on port `5000` and serves all SQLite data:
```bash
npm run server
```

### 2. Start the Frontend Client
Runs on port `3000` with hot-reloading enabled:
```bash
npm run dev
```
