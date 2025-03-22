import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import {
  Action,
  Filter,
  initialState,
  Todo,
  todoReducer,
} from "../reducer/todoReducer";

interface TodoContextType {
  activeTab: string;
  handleFilter: (tab: Filter) => void;
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}

interface TodoProvider {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: TodoProvider) => {
  const [activeTab, setActiveTab] = useState("全部");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleFilter = (tab: Filter) => setActiveTab(tab);

  return (
    <TodoContext.Provider value={{ activeTab, handleFilter, todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoProvider.");
  }
  return context;
};
