import { Filter } from "@/reducer/todoReducer";
import { Tabs } from "@chakra-ui/react";
import { useTodoContext } from "../../context/TodoContext";

const TodoFilter = () => {
  const { handleFilter } = useTodoContext();

  const tabList: Filter[] = ["全部", "已完成", "未完成"];

  return (
    <Tabs.Root variant="enclosed" fitted defaultValue="全部">
      <Tabs.List>
        {tabList.map((tab) => {
          return (
            <Tabs.Trigger
              value={tab}
              key={tab}
              onClick={() => handleFilter(tab)}
            >
              {tab}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default TodoFilter;
