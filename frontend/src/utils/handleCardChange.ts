import type { BoardCard } from "../types/BoardCard";
import initialBoard from "../mocks/initialBoard";

interface HandleCardChangeParams {
  cardId: number;
  updates: Partial<BoardCard>;
}

export default function handleCardChange({
  cardId,
  updates,
}: HandleCardChangeParams) {
  for (const column of initialBoard.columns) {
    const card = column.cards.find((c) => c.id === cardId);
    if (card) {
      Object.assign(card, updates);
      break;
    }
  }
}
