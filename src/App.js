import React from 'react';
import { useRewardsData } from './hooks/useRewardsData';
import Loader from './components/Loader';
import TransactionsTable from './components/TransactionsTable';
import MonthlyRewardsTable from './components/MonthlyRewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';

const App = () => {
  const { transactions, monthlyRewards, totalRewards, loading, error } =
    useRewardsData();

  if (loading) return <Loader />;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="container">
      <h1>Rewards Program</h1>

      <TransactionsTable transactions={transactions} />
      <MonthlyRewardsTable data={monthlyRewards} />
      <TotalRewardsTable data={totalRewards} />
    </div>
  );
};

export default App;
