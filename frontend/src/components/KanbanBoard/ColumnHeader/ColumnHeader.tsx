import React, { useState, useRef } from "react";
import "./ColumnHeader.css";
import handleKeyDown from "../../../utils/handleKeyDown";
import useClickOutside from "../../../hooks/useClickOutside";

interface ColumnHeaderProps {
  column: {
    title: string;
    cards: Array<any>;
  };
}

const ColumnHeader = ({ column }: ColumnHeaderProps) => {
  const [editable, setEditable] = useState(false);
  const containerRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  );

  useClickOutside<HTMLDivElement>({
    ref: containerRef,
    onClickOutside: () => setEditable(false),
  });

  return (
    <div className="kanban-column-header" ref={containerRef}>
      <span className="kanban-column-counter">{column.cards.length}</span>
      {editable ? (
        <input
          type="text"
          className="kanban-column-title-input"
          defaultValue={column.title}
          autoFocus
          onBlur={() => setEditable(false)}
          onKeyDown={(e) =>
            handleKeyDown({
              e,
              onEnter: () => setEditable(false),
              onEscape: () => setEditable(false),
            })
          }
        />
      ) : (
        <span className="kanban-column-title" onClick={() => setEditable(true)}>
          {column.title}
        </span>
      )}
    </div>
  );
};

export default ColumnHeader;
