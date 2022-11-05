import { useState } from 'react';
import { ExpenseContext } from './ExpenseContext';

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([
    {
      title: "Rewe",
      id: 1,
      type: "expense",
      date: "2022-10-18",
      amount: 15
    },
    {
      title: "Holiday",
      id: 2,
      type: "expense",
      date: "2022-10-18",
      amount: 1500
    },
    {
      title: "Monthly wage",
      id: 3,
      type: "income",
      date: "2022-10-16",
      amount: 3000
    },
  ]);

  const addExpense = expense => setExpenses([...expenses, expense]);

  const deleteExpense = id => {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(filteredExpenses);
  }

  return (
    <ExpenseContext.Provider value={{ expenses, deleteExpense, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  )
}