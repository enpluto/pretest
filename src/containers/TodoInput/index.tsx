import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  // 更新 input value 狀態
  const handleTypeIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 使用鍵盤 enter 送出
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e.nativeEvent.isComposing 檢查是否屬於輸入法組字狀態
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleSubmit();
    }
  };

  // 新增待辦事項並清空 input value
  const handleSubmit = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
      },
    });
    setText("");
  };

  return (
    <Flex gap={2}>
      <Input
        placeholder="輸入待辦事項"
        value={text}
        onChange={(e) => handleTypeIn(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button disabled={!text} onClick={handleSubmit}>
        新增
      </Button>
    </Flex>
  );
};

export default TodoInput;
