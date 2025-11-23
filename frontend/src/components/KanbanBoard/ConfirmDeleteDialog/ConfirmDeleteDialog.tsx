import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import handleCardRemove from "../../../utils/handleCardRemove";
import "./ConfirmDeleteDialog.css";

interface ConfirmDeleteDialogProps {
  selectedCard: Record<string, any>;
  selectedBag: any;
  onClose: () => void;
  setShowConfirmDelete: (value: boolean) => void;
  show: boolean;
}

const ConfirmDeleteDialog = ({
  selectedCard,
  selectedBag,
  onClose,
  setShowConfirmDelete,
  show,
}: ConfirmDeleteDialogProps) => {
  return createPortal(
    <div
      className={`confirm-delete-dialog-backdrop ${show ? "open" : ""}`}
      onClick={() => setShowConfirmDelete(false)}
    >
      <div
        className="confirm-delete-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Delete</h2>
        <div className="confirm-delete-text">
          Are you sure you want to delete <strong>{selectedCard.title}</strong>?
        </div>
        <div className="dialog-actions">
          <button
            className="delete-button"
            onClick={() => {
              handleCardRemove({
                bag: selectedBag,
                columnId: selectedCard.columnId,
                cardId: selectedCard.id,
              });
              onClose();
              setShowConfirmDelete(false);
            }}
          >
            Delete
          </button>
          <button
            className="cancel-button"
            onClick={() => setShowConfirmDelete(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default ConfirmDeleteDialog;
