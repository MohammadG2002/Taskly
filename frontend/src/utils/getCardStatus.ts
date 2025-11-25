import initialBoard from "../mocks/initialBoard";
import type { BoardCard } from "../types/BoardCard";

const getCardStatus = (card: BoardCard) => {
  const column = initialBoard.columns.find((col) =>
    col.cards.some((c) => c.id === card.id)
  );
  return column ? column.title : "No Status";
};

export default getCardStatus;
