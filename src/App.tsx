import { Center, Flex, Text } from "@chakra-ui/react";
import TodoFilter from "./containers/TodoFilter";
import TodoFooter from "./containers/TodoFooter";
import TodoInput from "./containers/TodoInput";
import TodoList from "./containers/TodoList";

function App() {
  return (
    <Center marginY={5}>
      <Flex direction="column" gap={4} maxWidth={500} width="full">
        <Text textStyle="3xl" fontWeight="light">
          My Todo List
        </Text>
        <TodoInput />
        <TodoFilter />
        <TodoList />
        <TodoFooter />
      </Flex>
    </Center>
  );
}

export default App;
