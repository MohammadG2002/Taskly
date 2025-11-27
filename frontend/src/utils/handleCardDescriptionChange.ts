import type { BoardCard } from "../types/BoardCard";

interface HandleCardDescriptionChangeParams {
  selectedCard: BoardCard;
  newDescription: string;
  onClose: () => void;
}

const handleCardDescriptionChange = ({
  selectedCard,
  newDescription,
  onClose,
}: HandleCardDescriptionChangeParams) => {
  return (e: React.FocusEvent | React.KeyboardEvent) => {
    if ("key" in e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        selectedCard.description = newDescription;
        onClose();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    } else if (e.type === "blur") {
      selectedCard.description = newDescription;
      onClose();
    }
  };
};

export default handleCardDescriptionChange;
