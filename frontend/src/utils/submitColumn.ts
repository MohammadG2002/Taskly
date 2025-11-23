import type { BoardColumn } from "../types/BoardColumn";

const submitColumn = (
  addColumn: (column: any) => unknown,
  setAddingColumn: (value: boolean) => void,
  title: string
) => {
  const newColumn: BoardColumn = { id: Date.now(), title, cards: [] };
  addColumn(newColumn);
  setAddingColumn(false);
};

export default submitColumn;
