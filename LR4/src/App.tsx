import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/actions';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !deadline) return;
    dispatch(addTodo(text, deadline));
    setText('');
    setDeadline('');
  };

  return (
    <div>
      <h1>Список дел</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Добавить дело"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;

