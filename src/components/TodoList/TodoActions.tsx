import { Flex } from "@chakra-ui/react";
import ActionIconButton from "../common/ActionIconButton";

interface TodoActions {
  completed: boolean;
  id: string;
  handleSetEditing: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

const TodoActions = ({
  completed,
  id,
  handleSetEditing,
  handleDeleteTodo,
}: TodoActions) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="right"
      gap={1}
      position="absolute"
      right={0}
      _hover={{ bg: "whiteAlpha.700" }}
      width="calc(100% - 40px)"
      height="full"
      rounded={5}
      paddingRight={2}
    >
      {completed || (
        <ActionIconButton type="edit" onClick={() => handleSetEditing(id)} />
      )}
      <ActionIconButton type="delete" onClick={() => handleDeleteTodo(id)} />
    </Flex>
  );
};

export default TodoActions;
