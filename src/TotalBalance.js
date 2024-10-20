import React from 'react';

const TotalBalance = ({ expenses }) => {
  const income = expenses
    .filter((expense) => expense.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = expenses
    .filter((expense) => expense.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h3>Total Balance: {balance.toFixed(2)}</h3>
      <p>Income: {income.toFixed(2)}</p>
      <p>Expenses: {expense.toFixed(2)}</p>
    </div>
  );
};

export default TotalBalance;
