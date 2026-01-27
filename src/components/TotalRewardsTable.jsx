import PropTypes from 'prop-types';
import React from 'react';

const TotalRewardsTable = ({ data }) => (
  <>
    <h2>Total Rewards</h2>
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.customerName}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

TotalRewardsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TotalRewardsTable;
