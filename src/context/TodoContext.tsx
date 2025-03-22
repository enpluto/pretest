import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  Action,
  Filter,
  getInitialState,
  Todo,
  todoReducer,
} from "../reducer/todoReducer";

interface TodoContextType {
  activeTab: string;
  handleFilter: (tab: Filter) => void;
  todos: Todo[];
  filteredTodos: Todo[];
  dispatch: React.Dispatch<Action>;
}

interface TodoProvider {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: TodoProvider) => {
  const [activeTab, setActiveTab] = useState<Filter>("全部");
  const [todos, dispatch] = useReducer(todoReducer, getInitialState());

  const handleFilter = (tab: Filter) => setActiveTab(tab);

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "全部") return true;
    if (activeTab === "已完成") return todo.completed;
    if (activeTab === "未完成") return !todo.completed;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ activeTab, handleFilter, todos, filteredTodos, dispatch }}
    >
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
