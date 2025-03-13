import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  return (
    <div>
      <h1>📝 Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;


