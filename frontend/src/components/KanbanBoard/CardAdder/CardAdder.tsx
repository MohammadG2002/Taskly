import React from "react";
import handleNewCard from "../../../utils/handleNewCard";

const CardAdder = () => {
  return (
    <button
      className="kanban-add-card-btn"
      onClick={() => {
        handleNewCard({ selector: ".react-kanban-card", title: "New Card" });
      }}
    >
      + Add Card
    </button>
  );
};

export default CardAdder;
