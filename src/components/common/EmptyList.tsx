import { AbsoluteCenter, Card } from "@chakra-ui/react";

interface EmptyList {
  activeTab: string;
}

const EmptyList = ({ activeTab }: EmptyList) => {
  return (
    <Card.Root height="58px">
      <AbsoluteCenter axis="both">無{activeTab}事項</AbsoluteCenter>
    </Card.Root>
  );
};

export default EmptyList;
