import React from 'react';
import '../../scss/TodoItem.scss';
import { FaCheck } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import cn from 'classnames';

const TodoItem = ({ item, remove, check }) => {
  const { id, title, done } = item;

  return (
    <li className='todo-list-item'>
      <div
        className={cn('check-circle', { active: done })}
        onClick={() => check(id, done)}
      >
        <FaCheck />
      </div>
      <span className={cn('text', { finish: done })}>
        {title}
      </span>
      <div className='remove'>
        <MdDelete onClick={() => remove(id)} />
      </div>
    </li>
  );
};

export default TodoItem;
