import React, { useState } from "react";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./KanbanBoard.css";
import initialBoard from "../../mocks/initialBoard";
import ColumnAdder from "./ColumnAdder/ColumnAdder";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import KanbanCard from "./KanbanCard/KanbanCard";

const KanbanBoard = () => {
  const [selectedCard, setSelectedCard] = useState({});
  const [addingColumn, setAddingColumn] = useState(false);
  return (
    <UncontrolledBoard
      initialBoard={initialBoard}
      allowRenameColumn={true}
      renderColumnHeader={(column) => <ColumnHeader column={column} />}
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
      onCardNew={({ card, column }) => {
        console.log("New card added:", card, "to column:", column);
      }}
    />
  );
};

export default KanbanBoard;
