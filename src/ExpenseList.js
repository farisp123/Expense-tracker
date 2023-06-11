import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((expense, index) => (
      <li key={index}>
      <div>Title: {expense.title}</div>
      <div>Amount: {expense.amount}</div>
      <div>Category: {expense.category}</div>
      </li>
      ))}
      </ul>
      );
      }

export default ExpenseList;
