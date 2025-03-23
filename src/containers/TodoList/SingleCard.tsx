import { Card } from "@chakra-ui/react";
import { useState } from "react";
import EditableInput from "../../components/TodoList/EditableInput";
import TodoActions from "../../components/TodoList/TodoActions";
import TodoCheckbox from "../../components/TodoList/TodoCheckbox";
import { useTodoContext } from "../../context/TodoContext";
import { Todo } from "../../reducer/todoReducer";

interface SingleCard {
  todo: Todo;
}

const SingleCard = ({ todo }: SingleCard) => {
  const [hoveredId, setHoveredId] = useState("");
  const [editingId, setEditingId] = useState("");
  const { dispatch } = useTodoContext();
  const { id, text, completed } = todo;

  // 設置編輯事項的 id
  const handleSetEditing = (id: string) => {
    setEditingId(id);
  };

  // 確認是否為編輯中的事項
  const isEditing = (id: string) => {
    return id === editingId;
  };

  // 編輯待辦事項
  const handleTextChange = (id: string, newText: string) => {
    dispatch({
      type: "EDIT",
      payload: { id, text: newText },
    });
    setEditingId("");
  };

  // 滑鼠移入時設置 id
  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  // 滑鼠移出時清空 id
  const handleMouseLeave = () => {
    setHoveredId("");
  };

  // 確認是否為 hover 中的事項
  const hasHovered = (id: string) => {
    return id === hoveredId;
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
      {isEditing(id) ? (
        <EditableInput
          text={text}
          id={id}
          handleTextChange={handleTextChange}
        />
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
};

export default SingleCard;
