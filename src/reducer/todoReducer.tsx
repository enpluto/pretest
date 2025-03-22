export type Filter = "全部" | "已完成" | "待完成";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "TOGGLE" }
  | { type: "EDIT" }
  | { type: "DELETE" }
  | { type: "DELETE_ALL_COMPLETED" };

export const initialState = [];

export const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
