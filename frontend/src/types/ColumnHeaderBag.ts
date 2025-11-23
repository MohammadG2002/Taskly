import type { BoardCard } from "./BoardCard";

export interface ColumnHeaderBag<TCard = BoardCard> {
  removeColumn: () => void;
  renameColumn: (title: string) => void;
  addCard: (card: TCard, options?: { on: "top" | "bottom" }) => void;
}
