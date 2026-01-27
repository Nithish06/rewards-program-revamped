import { useEffect, useState } from 'react';
import { fetchTransactions } from '../api/rewardsApi';
import { calculateRewardPoints } from '../utils/rewardCalculator';
import {
  aggregateMonthlyRewards,
  aggregateTotalRewards,
} from '../utils/aggregationUtils';

export const useRewardsData = () => {
  const [transactions, setTransactions] = useState([]);
  const [monthlyRewards, setMonthlyRewards] = useState([]);
  const [totalRewards, setTotalRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then((res) => {
        const enriched = res.data
          .map((txn) => ({
            ...txn,
            rewardPoints: calculateRewardPoints(txn.amount),
          }))
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        const monthly = aggregateMonthlyRewards(enriched);
        const total = aggregateTotalRewards(monthly);

        setTransactions(enriched);
        setMonthlyRewards(monthly);
        setTotalRewards(total);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { transactions, monthlyRewards, totalRewards, loading, error };
};
