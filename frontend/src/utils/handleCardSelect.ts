import type { BoardCard } from "../types/BoardCard";
import type { ColumnHeaderBag } from "../types/ColumnHeaderBag";

interface HandleCardSelectParams {
  selectedCard: BoardCard;
  columnBagsRef: React.RefObject<Map<number, ColumnHeaderBag<BoardCard>>>;
  setSelectedCard: (card: BoardCard) => void;
  setSelectedBag: (bag: ColumnHeaderBag<BoardCard>) => void;
  setShowTaskbar: (show: boolean) => void;
}

export default function handleCardSelect({
  selectedCard,
  columnBagsRef,
  setSelectedCard,
  setSelectedBag,
  setShowTaskbar,
}: HandleCardSelectParams) {
  setSelectedCard(selectedCard);
  const bag = columnBagsRef.current?.get(selectedCard.columnId);
  if (bag) {
    setSelectedBag(bag);
    requestAnimationFrame(() => {
      setShowTaskbar(true);
    });
  }
}
