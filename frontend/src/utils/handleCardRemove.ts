// Handler to remove card

export default function handleCardRemove({
  bag,
  columnId,
  cardId,
}: {
  bag: any;
  columnId: number;
  cardId: number;
}) {
  bag.removeCard({
    columnId: columnId,
    cardId: cardId,
  });
}
