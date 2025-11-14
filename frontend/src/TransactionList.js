import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            <span className={t.type === "income" ? "income" : "expense"}>
              {t.text} - ${t.amount} ({t.type})
            </span>
            <button className="delete-btn" onClick={() => deleteTransaction(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
