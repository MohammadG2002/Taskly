import { useState } from "react";
import "./TaskAttachments.css";
import type { BoardCard } from "../../../../types/BoardCard";
import { handleRemoveAttachment } from "../../../../utils/handleRemoveAttachment";
import { handleAddAttachment } from "../../../../utils/handleAddAttachment";

const TaskAttachments = ({ card }: { card: BoardCard }) => {
  const [, forceUpdate] = useState({});

  return (
    <div className="task-attachments">
      {card.attachments.map((attachment, index) => (
        <div key={index} className="attachment-item">
          <span className="attachment-name">
            <img src={attachment} alt="attachment" />
          </span>
          <button
            className="remove-attachment-btn"
            onClick={() =>
              handleRemoveAttachment(card, index, () => forceUpdate({}))
            }
          >
            x
          </button>
        </div>
      ))}
      <button
        className="add-attachment-btn"
        onClick={() => handleAddAttachment(card, () => forceUpdate({}))}
      >
        + Add Attachment
      </button>
    </div>
  );
};

export default TaskAttachments;
