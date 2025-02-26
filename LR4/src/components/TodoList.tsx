import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTodo } from '../store/actions';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
    </ul>
  );
};

export default TodoList;
