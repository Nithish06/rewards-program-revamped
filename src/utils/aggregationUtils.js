import { getMonthYear } from './dateUtils';

export const aggregateMonthlyRewards = (transactions) =>
  Object.values(
    transactions.reduce((acc, txn) => {
      const { month, year } = getMonthYear(txn.date);
      const key = `${txn.customerId}-${month}-${year}`;

      if (!acc[key]) {
        acc[key] = {
          customerId: txn.customerId,
          customerName: txn.customerName,
          month,
          year,
          points: 0,
        };
      }

      acc[key].points += txn.rewardPoints;
      return acc;
    }, {})
  );

export const aggregateTotalRewards = (monthlyData) =>
  Object.values(
    monthlyData.reduce((acc, item) => {
      if (!acc[item.customerName]) {
        acc[item.customerName] = {
          customerName: item.customerName,
          points: 0,
        };
      }
      acc[item.customerName].points += item.points;
      return acc;
    }, {})
  );
