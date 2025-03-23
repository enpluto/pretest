import { Card, Editable } from "@chakra-ui/react";

interface EditableInput {
  text: string;
  id: string;
  handleTextChange: (id: string, value: string) => void;
}

const EditableInput = ({ text, id, handleTextChange }: EditableInput) => {
  return (
    <Card.Root
      display="flex"
      justifyContent="center"
      width="full"
      minHeight="58px"
      padding={2}
    >
      <Editable.Root
        textAlign="start"
        defaultValue={text}
        onValueCommit={(e) => handleTextChange(id, e.value)}
      >
        <Editable.Preview
          width="full"
          marginLeft={11}
          paddingLeft={4}
          fontSize="md"
        />
        <Editable.Input
          width="full"
          marginLeft={11}
          paddingLeft={4}
          fontSize="md"
        />
      </Editable.Root>
    </Card.Root>
  );
};

export default EditableInput;
