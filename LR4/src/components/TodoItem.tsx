import React from 'react';
import { getTodoColor } from '../utils/dateUtils';

interface TodoItemProps {
  text: string;
  completed: boolean;
  deadline: string;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, deadline, onToggle }) => {
  return (
    <li
      onClick={onToggle}
      style={{
        color: getTodoColor(deadline, completed),
        textDecoration: completed ? 'line-through' : 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input type="checkbox" checked={completed} onChange={onToggle} style={{ marginRight: 8 }} />
      {text} (до {deadline})
    </li>
  );
};

export default TodoItem;
