import React, { useState } from "react";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./KanbanBoard.css";
import initialBoard from "../../mocks/initialBoard";
import ColumnAdder from "./ColumnAdder/ColumnAdder";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import KanbanCard from "./KanbanCard/KanbanCard";
import KanbanTaskbar from "./KanbanTaskbar/KanbanTaskbar";

const KanbanBoard = () => {
  const [addingColumn, setAddingColumn] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedBag, setSelectedBag] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <UncontrolledBoard
        initialBoard={initialBoard}
        allowRenameColumn={true}
        renderColumnHeader={(column, bag) => (
          <ColumnHeader
            column={{ ...column, id: Number(column.id) }}
            bag={bag}
          />
        )}
        allowAddColumn={true}
        renderColumnAdder={({ addColumn }) => (
          <ColumnAdder
            addingColumn={addingColumn}
            setAddingColumn={setAddingColumn}
            addColumn={addColumn}
          />
        )}
        renderCard={(card, bag) => (
          <KanbanCard
            card={card}
            onClick={() => {
              setSelectedCard(card);
              setSelectedBag(bag);
              setIsOpen(true);
            }}
          />
        )}
        allowAddCard={true}
        allowRemoveCard={true}
      />
      <KanbanTaskbar
        show={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCard={selectedCard}
        selectedBag={selectedBag}
      />
    </>
  );
};

export default KanbanBoard;
