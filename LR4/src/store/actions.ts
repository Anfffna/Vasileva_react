export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextTodoId = 0;

export const addTodo = (text: string, deadline: string) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
  deadline,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const setVisibilityFilter = (filter: string) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
