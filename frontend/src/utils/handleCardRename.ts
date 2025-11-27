// Handler to handle card renaming
import type { BoardCard } from "../types/BoardCard";

interface HandleCardRenameParams {
  selectedCard: BoardCard;
  newTitle: string;
  onClose?: () => void;
}

const handleCardRename = ({
  selectedCard,
  newTitle,
  onClose,
}: HandleCardRenameParams) => {
  return (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if ("key" in e && e.key !== "Enter" && e.key !== "Escape") {
      return;
    }

    onClose && onClose();
    selectedCard.title = newTitle.trim() || selectedCard.title;
  };
};

export default handleCardRename;
