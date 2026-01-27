import React from "react";
import { useRewardsData } from "./hooks/useRewardsData";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import TransactionsTable from "./components/TransactionsTable";
import MonthlyRewardsTable from "./components/MonthlyRewardsTable";
import TotalRewardsTable from "./components/TotalRewardsTable";
import "./styles/app.css";

export default function App() {
  const {
    transactions,
    monthlyRewards,
    totalRewards,
    loading,
    error,
    refetch
  } = useRewardsData();

  if (loading) return <Loader />;

  if (error)
    return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className="container">
  <h1>Rewards Program Dashboard</h1>

  <div className="section">
    <h2>Transactions (Latest 3 Months)</h2>
    <TransactionsTable data={transactions} />
  </div>

  <div className="section">
    <h2>Monthly Rewards</h2>
    <MonthlyRewardsTable data={monthlyRewards} />
  </div>

  <div className="section">
    <h2>Total Rewards</h2>
    <TotalRewardsTable data={totalRewards} />
  </div>
</div>

  );
}
