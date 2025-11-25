import type { BoardColumn } from "./BoardColumn";
export interface ColumnAdderProps {
  addingColumn: boolean;
  setAddingColumn: (value: boolean) => void;
  addColumn: (column: BoardColumn) => void;
}
