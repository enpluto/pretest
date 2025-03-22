import { Flex, Text } from "@chakra-ui/react";

const TodoFooter = () => {
  return (
    <Flex justifyContent="space-between">
      <Text>個待完成項目</Text>
      <Text color="gray" _hover={{ cursor: "pointer" }}>
        清除已完成項目
      </Text>
    </Flex>
  );
};

export default TodoFooter;
