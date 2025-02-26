import { ADD_TODO, TOGGLE_TODO } from './actions';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deadline: string;
}

const initialState: Todo[] = [];

const todos = (state = initialState, action: any): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          deadline: action.deadline,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
