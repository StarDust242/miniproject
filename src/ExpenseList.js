import React from 'react';

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.title}</span> - 
              <span>{expense.amount}</span> ({expense.type}) 
              <button onClick={() => removeExpense(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No expenses recorded yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
