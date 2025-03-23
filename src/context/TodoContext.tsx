import { createContext, useContext } from "react";
import { Action, Filter, Todo } from "../reducer/todoReducer";

interface TodoContextType {
  activeTab: string;
  handleFilter: (tab: Filter) => void;
  todos: Todo[];
  filteredTodos: Todo[];
  dispatch: React.Dispatch<Action>;
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoProvider.");
  }
  return context;
};
