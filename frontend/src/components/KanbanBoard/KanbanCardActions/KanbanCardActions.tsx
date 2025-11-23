import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog/ConfirmDeleteDialog";
import "./KanbanCardActions.css";

interface KanbanCardActionsProps {
  selectedCard: Record<string, any>;
  selectedBag: any;
  onClose: () => void;
}

const KanbanCardActions = ({
  selectedCard,
  selectedBag,
  onClose,
}: KanbanCardActionsProps) => {
  const [liked, setLiked] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  return (
    <>
      <div className="action-buttons">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <img src={`${assets[liked ? "liked" : "like"]}`} alt="Like" />
        </button>
        <button
          className="delete-card-button"
          onClick={() => {
            setShowConfirmDelete(true);
          }}
        >
          <img src={assets.trash} alt="Delete" />
        </button>
        <button className="more-options-button">
          <img src={assets.threeDots} alt="More Options" />
        </button>
      </div>
      <ConfirmDeleteDialog
        selectedCard={selectedCard}
        selectedBag={selectedBag}
        onClose={onClose}
        setShowConfirmDelete={setShowConfirmDelete}
        show={showConfirmDelete}
      />
    </>
  );
};

export default KanbanCardActions;
