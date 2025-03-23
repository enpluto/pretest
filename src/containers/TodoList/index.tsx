import { Flex } from "@chakra-ui/react";
import EmptyList from "../../components/common/EmptyList";
import { useTodoContext } from "../../context/TodoContext";
import SingleCard from "./SingleCard";

const TodoList = () => {
  const { filteredTodos, activeTab } = useTodoContext();

  // 篩選後的清單是否存在項目
  const emptyFilteredList = filteredTodos.length < 1;

  return (
    <>
      {emptyFilteredList ? (
        <EmptyList activeTab={activeTab} />
      ) : (
        <Flex direction="column" gap={1}>
          {filteredTodos.map((todo) => (
            <SingleCard todo={todo} />
          ))}
        </Flex>
      )}
    </>
  );
};

export default TodoList;
