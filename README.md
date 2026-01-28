# Rewards Program Dashboard

A production-ready React application that simulates a retail customer rewards program.

The app calculates reward points for customer transactions, aggregates them monthly and annually, and presents the data using a modern, responsive dashboard UI.

This project is designed to meet real client expectations with clean architecture, scalability, error handling, testing, pagination, filtering, and responsive design.

---

## 🚀 Features

### ✅ Core Functionality
- Reward points calculation per transaction
- Monthly reward aggregation per customer
- Total reward summary per customer
- Supports multi-year transaction data

### ✅ Production-Grade Architecture
- Real `fetch()` API simulation
- Async / await with `try / catch / finally`
- Custom data hook (`useRewardsData`)
- Clear separation of concerns

### ✅ User Experience
- Minimum 3-second loader display
- Friendly error handling with retry option
- Empty-state handling
- Clean dashboard UI

### ✅ Data Controls
- Pagination
- Dynamic page size (2 / 5 / 10 rows)
- Search filter (customer, product, transaction ID)
- Date range filtering
- Latest 3 months data automatically selected

### ✅ Performance Optimizations
- `useMemo` for heavy computations
- `useCallback` for stable function references
- No unnecessary re-renders

### ✅ Responsive Design
- Desktop, tablet, and mobile support
- Horizontal scrolling tables on small screens
- Adaptive filter layout
- Touch-friendly pagination

### ✅ Testing
- Unit tests using Jest
- Edge-case coverage
- Boundary testing
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

