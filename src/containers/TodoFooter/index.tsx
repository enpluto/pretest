import { Flex, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useTodoContext } from "../../context/TodoContext";

const TodoFooter = () => {
  const { todos, dispatch } = useTodoContext();

  // 確認存在已完成項目
  const hasCompletedTodo = todos.some((todo) => todo.completed);

  // 刪除所有已完成項目
  const handleDeleteCompleted = () => {
    if (hasCompletedTodo) {
      Swal.fire({
        text: "確認清除所有已完成項目？",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "gray",
        confirmButtonText: "確定",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: "DELETE_ALL_COMPLETED",
          });
        }
      });
    }
  };

  return (
    <Flex justifyContent="space-between">
      <Text>個待完成項目</Text>
      <Text
        color="gray"
        _hover={{ cursor: "pointer" }}
        onClick={handleDeleteCompleted}
      >
        清除已完成項目
      </Text>
    </Flex>
  );
};

export default TodoFooter;
