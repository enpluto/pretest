import { AbsoluteCenter, Card, Editable, Flex } from "@chakra-ui/react";
import { useState } from "react";
import TodoActions from "../../components/TodoList/TodoActions";
import TodoCheckbox from "../../components/TodoList/TodoCheckbox";
import { useTodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const [hoveredId, setHoveredId] = useState("");
  const [editingId, setEditingId] = useState("");
  const { filteredTodos, dispatch, activeTab } = useTodoContext();

  // 篩選後的清單是否存在項目
  const emptyFilteredList = filteredTodos.length < 1;

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

  // 編輯待辦事項
  const handleTextChange = (id: string, newText: string) => {
    dispatch({
      type: "EDIT",
      payload: { id, text: newText },
    });
    setEditingId("");
  };

  const isEditing = (id: string) => {
    return id === editingId;
  };

  // 變更待辦事項狀態
  const handleToggleStatus = (id: string) => {
    dispatch({
      type: "TOGGLE",
      payload: { id: id },
    });
  };

  // 刪除單一待辦事項
  const handleDeleteTodo = (id: string) => {
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  };

  return (
    <>
      {emptyFilteredList ? (
        <Card.Root height="58px">
          <AbsoluteCenter axis="both">無{activeTab}事項</AbsoluteCenter>
        </Card.Root>
      ) : (
        <Flex direction="column" gap={1}>
          {filteredTodos.map((todo) => {
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
                    <TodoCheckbox
                      completed={completed}
                      id={id}
                      handleToggleStatus={handleToggleStatus}
                    />
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
                      <TodoActions
                        completed={completed}
                        id={id}
                        handleSetEditing={handleSetEditing}
                        handleDeleteTodo={handleDeleteTodo}
                      />
                    )}
                  </Card.Root>
                )}
              </>
            );
          })}
        </Flex>
      )}
    </>
  );
};

export default TodoList;
