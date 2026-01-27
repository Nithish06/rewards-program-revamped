import PropTypes from 'prop-types';
import React from 'react';

const MonthlyRewardsTable = ({ data }) => (
  <>
    <h2>Monthly Rewards</h2>
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Month</th>
          <th>Year</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.customerName}</td>
            <td>{item.month}</td>
            <td>{item.year}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

MonthlyRewardsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MonthlyRewardsTable;
