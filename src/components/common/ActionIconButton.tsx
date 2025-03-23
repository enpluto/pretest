import { IconButton } from "@chakra-ui/react";
import { SlPencil, SlTrash } from "react-icons/sl";

type ActionType = "edit" | "delete";

interface ActionIconButton {
  type: ActionType;
  onClick: () => void;
}

const ActionIconButton = ({ type, onClick }: ActionIconButton) => {
  const config = {
    edit: {
      label: "Edit todo",
      icon: <SlPencil />,
    },
    delete: {
      label: "Delete todo",
      icon: <SlTrash />,
    },
  };

  return (
    <IconButton
      aria-label={config[type].label}
      variant="ghost"
      onClick={onClick}
    >
      {config[type].icon}
    </IconButton>
  );
};

export default ActionIconButton;
