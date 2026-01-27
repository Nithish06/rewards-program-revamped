export default function TotalRewardsTable({ data }) {
  return (
    <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.customerName}>
            <td>{row.customerName}</td>
            <td>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
