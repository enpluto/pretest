import { ReactNode, useEffect, useReducer, useState } from "react";
import { Filter, getInitialState, todoReducer } from "../reducer/todoReducer";
import { TodoContext } from "./TodoContext";

interface TodoProvider {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProvider) => {
  const [activeTab, setActiveTab] = useState<Filter>("全部");
  const [todos, dispatch] = useReducer(todoReducer, getInitialState());

  // 選擇查看待辦事項的類型
  const handleFilter = (tab: Filter) => setActiveTab(tab);

  // 篩選待辦事項清單的狀態
  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "全部") return true;
    if (activeTab === "已完成") return todo.completed;
    if (activeTab === "未完成") return !todo.completed;
  });

  // 待辦事項改變時更新 localStorage 儲存內容
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

export default TodoProvider;
