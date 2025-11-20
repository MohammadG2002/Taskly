import initialBoard from "../mocks/initialBoard";

interface CardStatus {
  [key: string]: any;
  card: Record<string, any>;
}

const getCardStatus = (card: CardStatus) => {
  const column = initialBoard.columns.find((col) =>
    col.cards.some((c) => c.id === card.id)
  );
  return column ? column.title : "No Status";
};

export default getCardStatus;
