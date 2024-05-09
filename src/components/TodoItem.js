import React from 'react';
import '../scss/TodoItem.scss';
import { FaCheck } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({ item, remove }) => {
  const { id, title, done } = item;

  return (
    <li className='todo-list-item'>
      <div className='check-circle'>
        <FaCheck />
      </div>
      <span className='text'>{title}</span>
      <div className='remove'>
        <MdDelete onClick={() => remove(item.id)} />
      </div>
    </li>
  );
};

export default TodoItem;
