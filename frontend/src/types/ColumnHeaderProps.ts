import type { BoardCard } from "./BoardCard";
import type { BoardColumn } from "./BoardColumn";
import type { ColumnHeaderBag } from "./ColumnHeaderBag";

export interface ColumnHeaderProps {
  column: BoardColumn;
  bag: ColumnHeaderBag<BoardCard>;
}
