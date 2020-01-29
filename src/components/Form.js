import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import './Form.scss';

const Form = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [charge, setCharge] = useState(['']);
  const [amount, setAmount] = useState(['']);

  const handleSubmit = e => {
    e.preventDefault();
    addExpense(charge, amount);
    setCharge('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <div className='form__group'>
          <label>Expense</label>
          <input
            value={charge}
            type='text'
            className='form__control'
            placeholder='Rent , Food etc.'
            onChange={e => setCharge(e.target.value)}
            required
          />
        </div>
        <div className='form__group'>
          <label>Amount</label>
          <input
            type='number'
            className='form__control'
            placeholder='Price'
            onChange={e => setAmount(e.target.value)}
            value={amount}
            required
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        Add Expense
      </button>
    </form>
  );
};

export default Form;
