import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { MdEdit, MdDelete } from 'react-icons/md';

const ExpenseItem = ({ expense }) => {
  const { removeExpense } = useContext(ExpenseContext);
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{expense.charge}</span>
        <span className='amoount'>$ {expense.amount}</span>
      </div>
      <div>
        <button className='edit-btn' arial-label='edit button'>
          <MdEdit />
        </button>
        <button
          className='clear-btn'
          arial-label='delete button'
          onClick={removeExpense}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
