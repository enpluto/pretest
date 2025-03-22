import { Tabs } from "@chakra-ui/react";

const TodoFilter = () => {
  const tabList = ["全部", "已完成", "待完成"];

  return (
    <Tabs.Root variant="enclosed" fitted defaultValue="全部">
      <Tabs.List>
        {tabList.map((tab) => {
          return (
            <Tabs.Trigger value={tab} key={tab}>
              {tab}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default TodoFilter;
