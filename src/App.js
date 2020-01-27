import React from 'react';
import ExpenseContextProvider from './context/ExpenseContext';
import Form from './components/Form';
import List from './components/List';
import './App.scss';

function App() {
  return (
    <ExpenseContextProvider>
      <h1>Budget App</h1>
      <div className='App'>
        <Form />
        <List />
      </div>
    </ExpenseContextProvider>
  );
}

export default App;
