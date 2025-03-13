import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleTodo, removeTodo } from "../store/todoSlice";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? "❌" : "✅"}
          </button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>🗑</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

