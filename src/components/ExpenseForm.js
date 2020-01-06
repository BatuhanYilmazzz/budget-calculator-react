import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { MdSend } from 'react-icons/md';

const ExpenseForm = () => {
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
      <div className='form-center'>
        <div className='form-group'>
          <label>Charge</label>
          <input
            value={charge}
            type='text'
            className='form-control'
            placeholder='e.g rent'
            onChange={e => setCharge(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Amount</label>
          <input
            type='number'
            className='form-control'
            placeholder='price'
            onChange={e => setAmount(e.target.value)}
            value={amount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        Submit
        <MdSend className='btn-icon' />
      </button>
    </form>
  );
};

export default ExpenseForm;
