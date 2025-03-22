import { Filter } from "@/reducer/todoReducer";
import { createContext, ReactNode, useContext, useState } from "react";

interface TodoContextType {
  activeTab: string;
  handleFilter: (tab: Filter) => void;
}

interface TodoProvider {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: TodoProvider) => {
  const [activeTab, setActiveTab] = useState("全部");

  const handleFilter = (tab: Filter) => setActiveTab(tab);

  return (
    <TodoContext.Provider value={{ activeTab, handleFilter }}>
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
