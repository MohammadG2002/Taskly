import type { BoardCard } from "../types/BoardCard";
import { Priority } from "../types/Priority";

export const handleCardPriority = (
  card: BoardCard,
  newPriority: Priority,
  setActivePriority: (priority: Priority) => void
) => {
  card.priority = newPriority;
  setActivePriority(newPriority);
};
