import React, { useState, useContext } from 'react';
import ExpenseContextProvider from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { ExpenseContext } from './context/ExpenseContext';
import uuid from 'uuid';
import './App.css';

function App() {
  return (
    <ExpenseContextProvider>
      <h1>Budget Calculator</h1>
      <div className='App'>
        <ExpenseForm />
        <ExpenseList />
      </div>
      <h1>
        Total Spending :<span className='total'></span>
      </h1>
    </ExpenseContextProvider>
  );
}

export default App;
