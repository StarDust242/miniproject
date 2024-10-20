import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import TotalBalance from './TotalBalance';
import './App.css';


const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <TotalBalance expenses={expenses} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} removeExpense={removeExpense} />
    </div>
  );
};

export default App;
