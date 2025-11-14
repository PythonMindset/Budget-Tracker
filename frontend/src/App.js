import React, { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <h2>Balance: ${balance}</h2>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
