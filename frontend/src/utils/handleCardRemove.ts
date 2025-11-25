import type { BoardCard } from "../types/BoardCard";
import type { ColumnHeaderBag } from "../types/ColumnHeaderBag";
import initialBoard from "../mocks/initialBoard";

interface HandleCardRemoveParams {
  bag: ColumnHeaderBag<BoardCard>;
  columnId: number;
  cardId: number;
}

export default function handleCardRemove({
  bag,
  columnId,
  cardId,
}: HandleCardRemoveParams) {
  // Find the column and remove the card from its cards array
  const column = initialBoard.columns.find((col) => col.id === columnId);
  if (column) {
    const cardIndex = column.cards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      column.cards.splice(cardIndex, 1);
    }
  }
}
