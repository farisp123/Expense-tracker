import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount,
      category
    };
    addExpense(expense);
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
        <option value="" >Select a category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Others">Others</option>
      </select>
      </div>
      <button type="submit" className="add-expense-btn" style={{cursor:'pointer'}}>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
