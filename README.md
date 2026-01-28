# Rewards Program Dashboard

A production-ready React application that simulates a retail customer rewards program.

The application calculates reward points for customer transactions, aggregates them monthly and annually, and presents the data in a modern, responsive dashboard UI.

This project is built with real-world engineering practices and is structured to meet enterprise and client-grade expectations.

---

## 🚀 Features

### ✅ Core Business Logic
- Reward points calculation per transaction
- Monthly reward aggregation per customer
- Total reward summary per customer
- Supports multi-year transaction history

---

### ✅ Production-Grade Architecture
- Real `fetch()` API simulation
- Async / await with `try / catch / finally`
- Centralized logger utility
- Custom React hooks
- Clean separation of concerns

---

### ✅ User Experience
- Minimum **3-second loader display**
- Friendly error screen with retry option
- Empty-state handling
- Modern SaaS-style UI

---

### ✅ Data Controls
- Pagination
- Dynamic page size selection (2 / 5 / 10 rows)
- Search filtering
- Date range filtering
- Automatically displays **latest three months** of data

---

### ✅ Performance Optimizations
- `useMemo` for expensive calculations
- `useCallback` for stable function references
- No unnecessary re-renders
- Immutable data handling

---

### ✅ Responsive Design
- Desktop, tablet, and mobile support
- Adaptive layout using media queries
- Horizontal table scrolling on small devices
- Touch-friendly controls

---

### ✅ Testing
- Unit tests using Jest
- Extensive edge-case coverage
- Boundary value testing
- Decimal and invalid input handling

---

## 🧮 Reward Calculation Rules

| Purchase Amount | Reward Points |
|-----------------|----------------|
| $0 – $50 | 0 points |
| $51 – $100 | 1 point per dollar over $50 |
| Over $100 | 2 points per dollar over $100 + 50 points |

### Examples

| Amount | Points |
|------|------|
| $75 | 25 |
| $100 | 50 |
| $120 | 90 |
| $150 | 150 |

---

## 🧠 Application Flow

index.js
↓
App.jsx
↓
useRewardsData (custom hook)
↓
transactionsApi (fetch)
↓
rewardCalculator
↓
latest three months filter
↓
monthly aggregation
↓
total aggregation
↓
UI rendering


---

## 📁 Project Structure

public/
└── transactions.json # 70+ mock records

src/
├── api/
│ └── transactionsApi.js
├── components/
│ ├── Loader.jsx
│ ├── ErrorMessage.jsx
│ ├── Pagination.jsx
│ ├── TransactionsTable.jsx
│ ├── MonthlyRewardsTable.jsx
│ └── TotalRewardsTable.jsx
├── hooks/
│ └── useRewardsData.js
├── utils/
│ ├── rewardCalculator.js
│ ├── dateUtils.js
│ ├── aggregationUtils.js
│ └── logger.js
├── styles/
│ └── app.css
├── App.jsx
└── index.js


---

## 🪵 Logging System

A centralized logger utility is implemented to avoid direct usage of `console.log` across the application.

### Logger Features
- Supports log levels:
  - `info`
  - `warn`
  - `error`
  - `debug`
- Automatically disabled in production
- Easily replaceable with monitoring tools such as:
  - Sentry
  - Datadog
  - LogRocket

### Example

```js
import { logger } from "../utils/logger";

logger.info("Fetching transactions");
logger.warn("No transactions found");
logger.error("API request failed", { status: 500 });
