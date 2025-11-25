import { useState, useCallback } from "react";
import type { BoardColumn } from "../types/BoardColumn";

interface InitialBoardShape {
  columns: BoardColumn[];
}

export default function usePersistentColumnTitles(
  initialBoard: InitialBoardShape
) {
  const [boardTitles, setBoardTitles] = useState<Record<number, string>>(() =>
    Object.fromEntries(initialBoard.columns.map((c) => [Number(c.id), c.title]))
  );

  const persistRename = useCallback(
    (columnId: number, newTitle: string) => {
      const col = initialBoard.columns.find((c) => Number(c.id) === columnId);
      if (col) col.title = newTitle;
      setBoardTitles((prev) => ({ ...prev, [columnId]: newTitle }));
    },
    [initialBoard]
  );

  return { boardTitles, persistRename };
}
