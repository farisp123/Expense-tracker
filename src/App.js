import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseReport from './ExpenseReport';
import './App.css';

const App = () =>  {
  const [expenses, setExpenses] = useState([]);
  const [showReport, setShowReport] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const generateReport = () => {
    setShowReport(true);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <button onClick={generateReport} style={{cursor:'pointer'}}>Generate Report</button>
      {showReport && <ExpenseReport expenses={expenses} />}
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
