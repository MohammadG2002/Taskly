import type { BoardCard } from "../types/BoardCard";

export const handleRemoveAttachment = (
  card: BoardCard,
  index: number,
  forceUpdate: () => void
) => {
  card.attachments.splice(index, 1);
  forceUpdate();
};
