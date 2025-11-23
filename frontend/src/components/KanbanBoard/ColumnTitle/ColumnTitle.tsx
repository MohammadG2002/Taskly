import { useRef } from "react";
import createColumnTitleKeyDownHandler from "../../../utils/handleColumnTitleKeyDown";
import useClickOutside from "../../../hooks/useClickOutside";
import type { ColumnTitleProps } from "../../../types/ColumnTitle";
import "./ColumnTitle.css";

const ColumnTitle = ({
  column,
  bag,
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
          onKeyDown={createColumnTitleKeyDownHandler({
            column,
            bag,
            setIsEditable,
            inputRef,
          })}
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
