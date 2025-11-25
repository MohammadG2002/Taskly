import React, { useState, useRef } from "react";
import type { BoardCard } from "../../types/BoardCard";
import type { ColumnHeaderBag } from "../../types/ColumnHeaderBag";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./KanbanBoard.css";
import initialBoard from "../../mocks/initialBoard";
import ColumnAdder from "./ColumnAdder/ColumnAdder";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import KanbanCard from "./KanbanCard/KanbanCard";
import usePersistentColumnTitles from "../../hooks/usePersistentColumnTitles";
import KanbanTaskbar from "./KanbanTaskbar/KanbanTaskbar";

const KanbanBoard = () => {
  const [selectedCard, setSelectedCard] = useState<BoardCard | null>(null);
  const [selectedBag, setSelectedBag] =
    useState<ColumnHeaderBag<BoardCard> | null>(null);
  const [showTaskbar, setShowTaskbar] = useState(false);
  const [addingColumn, setAddingColumn] = useState(false);
  const { boardTitles, persistRename } =
    usePersistentColumnTitles(initialBoard);
  const columnBagsRef = useRef<Map<number, ColumnHeaderBag<BoardCard>>>(
    new Map()
  );

  return (
    <>
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
          columnBagsRef.current.set(Number(column.id), wrappedBag);

          const persistedTitle = boardTitles[Number(column.id)] ?? column.title;
          return (
            <ColumnHeader
              column={{
                ...column,
                id: Number(column.id),
                title: persistedTitle,
              }}
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
          <KanbanCard
            card={card}
            setSelectedCard={(selectedCard) => {
              setSelectedCard(selectedCard);
              const bag = columnBagsRef.current.get(selectedCard.columnId);
              if (bag) {
                setSelectedBag(bag);
                requestAnimationFrame(() => {
                  setShowTaskbar(true);
                });
              }
            }}
          />
        )}
        allowAddCard={true}
      />
      {selectedCard && selectedBag && (
        <KanbanTaskbar
          show={showTaskbar}
          onClose={() => {
            setShowTaskbar(false);
            setTimeout(() => {
              setSelectedCard(null);
              setSelectedBag(null);
            }, 200);
          }}
          selectedCard={selectedCard}
          selectedBag={selectedBag}
        />
      )}
    </>
  );
};

export default KanbanBoard;
