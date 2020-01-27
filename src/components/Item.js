import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { MdEdit, MdDelete } from 'react-icons/md';
import './Item.scss';

const Item = ({ expense }) => {
  const { removeExpense } = useContext(ExpenseContext);
  return (
    <li className='item'>
      <div className='item__info'>
        <span className='item__expense'>{expense.charge}</span>
      </div>
      <div>
        <span className='item__amount'>$ {expense.amount}</span>
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

export default Item;
