import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Api from "./Api/db.json";

export default function Table() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCustomers(Api.customers);
    setTransactions(Api.transactions);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const customer = customers.find((el) => el.id === transaction.customer_id);
    return customer && customer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <h2 className="text-center">Customer Table</h2>
        <form action="" className="mt-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </form>
        <div className="table-responsive">
          <table className="mx-auto rounded-5 table table-dark table-striped text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Transactions Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => {
                const userName = customers.find((el) => el.id === transaction.customer_id);
                return (
                  <tr key={transaction.id}>
                    <td>{userName ? userName.name : "Unknown Customer"}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}