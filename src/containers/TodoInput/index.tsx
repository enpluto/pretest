import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const TodoInput = () => {
  const [text, setText] = useState("");

  return (
    <Flex gap={2}>
      <Input placeholder="輸入待辦事項" value={text} />
      <Button disabled={!text}>新增</Button>
    </Flex>
  );
};

export default TodoInput;
