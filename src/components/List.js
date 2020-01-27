import React, { useContext } from 'react';
import Item from './Item';
import { ExpenseContext } from '../context/ExpenseContext';
import { MdDelete } from 'react-icons/md';
import './List.scss';

const List = () => {
  const { expenses, clearList } = useContext(ExpenseContext);
  return (
    <div>
      <ul className='list'>
        {expenses.map((expense, index) => {
          return <Item key={index} expense={expense} />;
        })}
      </ul>
      <button className='btn' onClick={clearList}>
        Clear <MdDelete className='btn-icon' />
      </button>
    </div>
  );
};

export default List;
