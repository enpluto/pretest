import { Center, Checkbox } from "@chakra-ui/react";

interface TodoCheckbox {
  completed: boolean;
  id: string;
  handleToggleStatus: (id: string) => void;
}

const TodoCheckbox = ({ completed, id, handleToggleStatus }: TodoCheckbox) => {
  return (
    <Center minWidth={10}>
      <Checkbox.Root
        defaultChecked={completed}
        onChange={() => handleToggleStatus(id)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
      </Checkbox.Root>
    </Center>
  );
};

export default TodoCheckbox;
