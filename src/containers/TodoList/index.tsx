import {
  Card,
  Center,
  Checkbox,
  Editable,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { SlPencil, SlTrash } from "react-icons/sl";
import { useTodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const [hoveredId, setHoveredId] = useState("");
  const [editingId, setEditingId] = useState("");
  const { todos } = useTodoContext();

  const hasTodoList = todos.length > 0;

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId("");
  };

  const hasHovered = (id: string) => {
    return id === hoveredId;
  };

  const handleSetEditing = (id: string) => {
    setEditingId(id);
  };

  const handleTextChange = (id: string) => {
    setEditingId("");
  };

  const isEditing = (id: string) => {
    return id === editingId;
  };

  return (
    <>
      {hasTodoList ? (
        <Flex direction="column" gap={1}>
          {todos.map((todo) => {
            const { id, text, completed } = todo;
            return (
              <>
                {isEditing(id) ? (
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
                      onValueCommit={() => handleTextChange(id)}
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
                ) : (
                  <Card.Root
                    size="sm"
                    display="flex"
                    flexDirection="row"
                    gap={1}
                    paddingLeft={2}
                    position="relative"
                    key={id}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Center minWidth={10}>
                      <Checkbox.Root defaultChecked={completed}>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                      </Checkbox.Root>
                    </Center>
                    <Card.Body
                      style={
                        completed
                          ? {
                              textDecoration: "line-through",
                              color: "lightgray",
                            }
                          : {}
                      }
                    >
                      {text}
                    </Card.Body>
                    {hasHovered(id) && (
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
                          <IconButton
                            aria-label="Edit todo"
                            variant="ghost"
                            onClick={() => handleSetEditing(id)}
                          >
                            <SlPencil />
                          </IconButton>
                        )}
                        <IconButton aria-label="Delete todo" variant="ghost">
                          <SlTrash />
                        </IconButton>
                      </Flex>
                    )}
                  </Card.Root>
                )}
              </>
            );
          })}
        </Flex>
      ) : (
        <Center height={200}>尚無任何待辦事項</Center>
      )}
    </>
  );
};

export default TodoList;
