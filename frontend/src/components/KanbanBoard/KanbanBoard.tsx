import React, { useState } from "react";
import type { BoardCard } from "../../types/BoardCard";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./KanbanBoard.css";
import initialBoard from "../../mocks/initialBoard";
import ColumnAdder from "./ColumnAdder/ColumnAdder";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import KanbanCard from "./KanbanCard/KanbanCard";
import usePersistentColumnTitles from "../../hooks/usePersistentColumnTitles";

const KanbanBoard = () => {
  const [selectedCard, setSelectedCard] = useState<BoardCard | null>(null);
  const [addingColumn, setAddingColumn] = useState(false);
  const { boardTitles, persistRename } =
    usePersistentColumnTitles(initialBoard);

  return (
    <UncontrolledBoard
      initialBoard={initialBoard}
      allowRenameColumn={true}
      renderColumnHeader={(column, bag) => {
        const wrappedBag = {
          ...bag,
          renameColumn: (newTitle: string) => {
            bag.renameColumn(newTitle);
            persistRename(Number(column.id), newTitle);
          },
        };
        const persistedTitle = boardTitles[Number(column.id)] ?? column.title;
        return (
          <ColumnHeader
            column={{ ...column, id: Number(column.id), title: persistedTitle }}
            bag={wrappedBag}
          />
        );
      }}
      allowAddColumn={true}
      renderColumnAdder={({ addColumn }) => (
        <ColumnAdder
          addingColumn={addingColumn}
          setAddingColumn={setAddingColumn}
          addColumn={addColumn}
        />
      )}
      renderCard={(card) => (
        <KanbanCard card={card} setSelectedCard={setSelectedCard} />
      )}
      allowAddCard={true}
    />
  );
};

export default KanbanBoard;
