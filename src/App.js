import React from 'react';
import ExpenseContextProvider from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  return (
    <ExpenseContextProvider>
      <h1>Budget Calculator</h1>
      <div className='App'>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseContextProvider>
  );
}

export default App;
