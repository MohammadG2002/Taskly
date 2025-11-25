import type { BoardCard } from "../types/BoardCard";
import type { ColumnHeaderBag } from "../types/ColumnHeaderBag";

interface HandleTaskbarCloseParams {
  setShowTaskbar: (show: boolean) => void;
  setSelectedCard: (card: BoardCard | null) => void;
  setSelectedBag: (bag: ColumnHeaderBag<BoardCard> | null) => void;
}

export default function handleTaskbarClose({
  setShowTaskbar,
  setSelectedCard,
  setSelectedBag,
}: HandleTaskbarCloseParams) {
  setShowTaskbar(false);
  setTimeout(() => {
    setSelectedCard(null);
    setSelectedBag(null);
  }, 200);
}
