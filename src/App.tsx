import { Center, Flex, Text } from "@chakra-ui/react";
import NoContent from "./components/common/NoContent";
import TodoFilter from "./containers/TodoFilter";
import TodoFooter from "./containers/TodoFooter";
import TodoInput from "./containers/TodoInput";
import TodoList from "./containers/TodoList";
import { useTodoContext } from "./context/TodoContext";

function App() {
  const { todos } = useTodoContext();

  // 確認待辦事項是否為空
  const hasTodoList = todos.length > 0;

  return (
    <Center marginY={5}>
      <Flex direction="column" gap={4} maxWidth={500} width="full">
        <Text textStyle="3xl" fontWeight="light">
          My Todo List
        </Text>
        <TodoInput />
        {hasTodoList ? (
          <>
            <TodoFilter />
            <TodoList />
            <TodoFooter />
          </>
        ) : (
          <NoContent />
        )}
      </Flex>
    </Center>
  );
}

export default App;
