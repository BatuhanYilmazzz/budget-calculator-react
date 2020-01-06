import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { ExpenseContext } from '../context/ExpenseContext';
import { MdDelete } from 'react-icons/md';

const ExpenseList = () => {
  const { expenses, clearList } = useContext(ExpenseContext);
  return (
    <div>
      <ul className='list'>
        {expenses.map((expense, index) => {
          return <ExpenseItem key={index} expense={expense} />;
        })}
      </ul>
      <button className='btn' onClick={clearList}>
        Clear <MdDelete className='btn-icon' />
      </button>
    </div>
  );
};

export default ExpenseList;
