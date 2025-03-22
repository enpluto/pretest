export type Filter = "全部" | "已完成" | "未完成";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "TOGGLE"; payload: { id: string } }
  | { type: "EDIT" }
  | { type: "DELETE" }
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
    default:
      return state;
  }
};
