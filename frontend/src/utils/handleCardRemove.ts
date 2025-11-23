// Handler to remove card

interface HandleCardRemoveParams {
  bag: any;
  columnId: number;
  cardId: number;
}

export default function handleCardRemove({
  bag,
  columnId,
  cardId,
}: HandleCardRemoveParams) {
  bag.removeCard({
    columnId: columnId,
    cardId: cardId,
  });
}
