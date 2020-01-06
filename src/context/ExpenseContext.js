import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const ExpenseContext = createContext();

const ExpenseContextProvider = props => {
  /*  const initialState = JSON.parse(localStorage.getItem('tasks'));*/
  const [expenses, setExpenses] = useState([]);

  /*  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);*/

  const addExpense = (charge, amount) => {
    setExpenses([...expenses, { id: uuid(), charge: charge, amount: amount }]);
  };

  const removeExpense = index => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const clearList = () => {
    setExpenses([]);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, removeExpense, clearList }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
