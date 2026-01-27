import { useMemo, useState } from "react";
import Pagination from "./Pagination";

export default function TransactionsTable({ data }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredData = useMemo(() => {
    return data.filter(txn => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        txn.customerName.toLowerCase().includes(searchText) ||
        txn.product.toLowerCase().includes(searchText) ||
        txn.id.toLowerCase().includes(searchText);

      const txnDate = new Date(txn.date).getTime();
      const from = fromDate ? new Date(fromDate).getTime() : null;
      const to = toDate ? new Date(toDate).getTime() : null;

      const matchesDate =
        (!from || txnDate >= from) &&
        (!to || txnDate <= to);

      return matchesSearch && matchesDate;
    });
  }, [data, search, fromDate, toDate]);


  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);


  const resetPage = () => setPage(1);

  return (
    <>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by customer, product or ID"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            resetPage();
          }}
        />

        <input
          type="date"
          value={fromDate}
          onChange={e => {
            setFromDate(e.target.value);
            resetPage();
          }}
        />

        <input
          type="date"
          value={toDate}
          onChange={e => {
            setToDate(e.target.value);
            resetPage();
          }}
        />


        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
            resetPage();
          }}
        >
          <option value={2}>2 / page</option>
          <option value={5}>5 / page</option>
          <option value={10}>10 / page</option>
        </select>
      </div>

      <div className="table-wrapper">
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
            {paginatedData.map(txn => (
              <tr key={txn.id}>
                <td>{txn.id}</td>
                <td>{txn.customerName}</td>
                <td>{txn.date}</td>
                <td>{txn.product}</td>
                <td className="amount">${txn.amount}</td>
                <td className="points">{txn.rewardPoints}</td>
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan="6" className="empty">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        pageSize={pageSize}
        total={filteredData.length}
        onChange={setPage}
      />
    </>
  );
}
