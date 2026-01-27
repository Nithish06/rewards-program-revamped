import PropTypes from 'prop-types';
import React from 'react';

const TransactionsTable = ({ transactions }) => (
  <>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.customerName}</td>
            <td>{t.date}</td>
            <td>{t.product}</td>
            <td>${t.amount}</td>
            <td>{t.rewardPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionsTable;
