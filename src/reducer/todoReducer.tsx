export type Filter = "全部" | "已完成" | "未完成";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "TOGGLE"; payload: { id: string } }
  | { type: "EDIT"; payload: { id: string; text: string } }
  | { type: "DELETE"; payload: { id: string } }
  | { type: "DELETE_ALL_COMPLETED" };

export const getInitialState = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "DELETE_ALL_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
