import { useState } from "react";
import "./TaskAttachments.css";
import type { BoardCard } from "../../../../types/BoardCard";
import { handleRemoveAttachment } from "../../../../utils/handleRemoveAttachment";
import { handleAddAttachment } from "../../../../utils/handleAddAttachment";
import Tooltip from "../../../../utils/Tooltip/Tooltip";
import getAttachmentName from "../../../../utils/getAttachmentName";
import { assets } from "../../../../assets/assets";

const TaskAttachments = ({ card }: { card: BoardCard }) => {
  const [, forceUpdate] = useState({});

  return (
    <div className="task-attachments">
      {card.attachments.map((attachment, index) => {
        const attachmentName = getAttachmentName(attachment);
        return (
          <Tooltip key={index} text={attachmentName}>
            <div key={index} className="attachment-item">
              <img src={attachment} alt="attachment" />
              <button
                className="remove-attachment-btn"
                onClick={() =>
                  handleRemoveAttachment(card, index, () => forceUpdate({}))
                }
              >
                ✕
              </button>
            </div>
          </Tooltip>
        );
      })}
      <button
        className="add-attachment-btn"
        onClick={() => handleAddAttachment(card, () => forceUpdate({}))}
      >
        <img src={assets.upload} alt="Add Attachment" />
      </button>
    </div>
  );
};

export default TaskAttachments;
