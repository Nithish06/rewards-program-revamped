import { getMonthYearKey, getMonthYearLabel } from "./dateUtils";

export const getLatestThreeMonthsData = transactions => {
  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const monthKeys = [];

  for (const txn of sorted) {
    const key = getMonthYearKey(txn.date);
    if (!monthKeys.includes(key)) monthKeys.push(key);
    if (monthKeys.length === 3) break;
  }

  return sorted.filter(txn =>
    monthKeys.includes(getMonthYearKey(txn.date))
  );
};

export const aggregateMonthlyRewards = transactions =>
  Object.values(
    transactions.reduce((acc, txn) => {
      const { month, year } = getMonthYearLabel(txn.date);
      const key = `${txn.customerId}-${month}-${year}`;

      if (!acc[key]) {
        acc[key] = {
          customerId: txn.customerId,
          customerName: txn.customerName,
          month,
          year,
          points: 0
        };
      }

      acc[key].points += txn.rewardPoints;
      return acc;
    }, {})
  );

export const aggregateTotalRewards = monthly =>
  Object.values(
    monthly.reduce((acc, row) => {
      if (!acc[row.customerName]) {
        acc[row.customerName] = {
          customerName: row.customerName,
          points: 0
        };
      }
      acc[row.customerName].points += row.points;
      return acc;
    }, {})
  );
