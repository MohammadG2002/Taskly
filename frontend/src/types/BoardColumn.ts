import type { BoardCard } from "./BoardCard";

export interface BoardColumn {
  id: number;
  title: string;
  cards: BoardCard[];
}
