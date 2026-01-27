import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchTransactions } from "../api/transactionsApi";
import { calculateRewardPoints } from "../utils/rewardCalculator";
import {
  aggregateMonthlyRewards,
  aggregateTotalRewards,
  getLatestThreeMonthsData
} from "../utils/aggregationUtils";

const minimumLoaderDelay = (ms = 2000) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const useRewardsData = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [data] = await Promise.all([
        fetchTransactions(),
        minimumLoaderDelay(3000)
      ]);

      const enriched = data.map(txn => ({
        ...txn,
        rewardPoints: calculateRewardPoints(txn.amount)
      }));

      const latestThreeMonths =
        getLatestThreeMonthsData(enriched);

      setTransactions(latestThreeMonths);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const monthlyRewards = useMemo(
    () => aggregateMonthlyRewards(transactions),
    [transactions]
  );

  const totalRewards = useMemo(
    () => aggregateTotalRewards(monthlyRewards),
    [monthlyRewards]
  );

  return {
    transactions,
    monthlyRewards,
    totalRewards,
    loading,
    error,
    refetch: fetchData
  };
};
