export default function MonthlyRewardsTable({ data }) {
  return (
    <div className="table-wrapper">
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
        {data.map(row => (
          <tr key={`${row.customerId}-${row.month}-${row.year}`}>
            <td>{row.customerName}</td>
            <td>{row.month}</td>
            <td>{row.year}</td>
            <td>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
