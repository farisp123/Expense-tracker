import React from 'react';

function ExpenseReport({ expenses }) {
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

      return (
        <div>
        <h2>Expense Report</h2>
        <table>
        <thead>
        <tr>
        <th>Title</th>
        <th>Amount</th>
        <th>Category</th>
        </tr>
        </thead>
        <tbody>
        {expenses.map((expense, index) => (
        <tr key={index}>
        <td>{expense.title}</td>
        <td>{expense.amount}</td>
        <td>{expense.category}</td>
        </tr>
        ))}
        </tbody>
        </table>
        <div>Total Expenses: {totalExpenses.toFixed(2)}</div>
        </div>
        );
        }

        export default ExpenseReport;
