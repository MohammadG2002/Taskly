import type { BoardCard } from "../types/BoardCard";
import initialBoard from "../mocks/initialBoard";

interface HandleCardRemoveParams {
  columnId: number;
  card: BoardCard;
}

export default function handleCardRemove({
  columnId,
  card,
}: HandleCardRemoveParams) {
  const column = initialBoard.columns.find((col) => col.id === columnId);
  if (column) {
    const cardIndex = column.cards.findIndex((c) => c.id === card.id);
    if (cardIndex !== -1) {
      column.cards.splice(cardIndex, 1);
    }
  }
}
