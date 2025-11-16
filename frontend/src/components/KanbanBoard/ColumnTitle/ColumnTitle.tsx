import React, { useState, useRef, type RefObject, useEffect } from "react";
import handleKeyDown from "../../../utils/handleKeyDown";
import useClickOutside from "../../../hooks/useClickOutside";

interface ColumnTitleProps {
  column: {
    id: number;
    title: number | string;
    cards: any[];
    [key: string]: any;
  };
  containerRef: RefObject<HTMLDivElement>;
  isEditable?: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColumnTitle = ({
  column,
  containerRef,
  isEditable,
  setIsEditable,
}: ColumnTitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside<HTMLDivElement>({
    ref: containerRef,
    onClickOutside: () => setIsEditable(false),
  });

  return (
    <>
      {isEditable ? (
        <input
          type="text"
          className="kanban-column-title-input"
          defaultValue={column.title}
          autoFocus
          onBlur={() => setIsEditable(false)}
          onKeyDown={(e) => {
            handleKeyDown({
              e,
              onEnter: () => setIsEditable(false),
              onEscape: () => setIsEditable(false),
            });
            if (e.key === "Enter" && inputRef.current) {
              column.title = inputRef.current.value;
            }
          }}
          ref={inputRef}
        />
      ) : (
        <span
          className="kanban-column-title"
          onClick={() => setIsEditable(true)}
        >
          {column.title}
        </span>
      )}
    </>
  );
};

export default ColumnTitle;
