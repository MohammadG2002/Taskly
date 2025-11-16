import React, { useState, type Dispatch, type SetStateAction } from "react";
import { assets } from "../../../assets/assets";
import type { ColumnHeaderProps } from "../ColumnHeader/ColumnHeader";
import "./ColumnOptionsBtn.css";
import useClickOutside from "../../../hooks/useClickOutside";
import { addColumn } from "@caldwell619/react-kanban";

interface ColumnOptionsBtnProps extends ColumnHeaderProps {
  setIsEditable: Dispatch<SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ColumnOptionsBtn = ({
  column,
  bag,
  containerRef,
  setIsEditable,
}: ColumnOptionsBtnProps) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  useClickOutside<HTMLDivElement>({
    ref: containerRef,
    onClickOutside: () => setOptionsVisible(false),
  });
  return (
    <div className="kanban-column-options-container">
      <button
        className="kanban-options-button"
        onClick={() =>
          setOptionsVisible((prevOptionsVisible) => !prevOptionsVisible)
        }
      >
        <img src={assets.threeDots} alt="Options" />
      </button>
      {optionsVisible && (
        <div className="kanban-column-options" ref={containerRef}>
          <button
            className="kanban-column-rename-button"
            onClick={() => {
              setIsEditable(true);
              setOptionsVisible(false);
            }}
          >
            <img src={assets.pencil} alt="Rename" /> Rename
          </button>
          <button
            className="kanban-column-clear-button"
            onClick={() => {
              setOptionsVisible(false);
              column.cards.splice(0, column.cards.length);
              bag.renameColumn(column.title as string);
            }}
          >
            <img src={assets.eraser} alt="Clear" /> Clear
          </button>
          <button
            className="kanban-column-delete-button"
            onClick={() => bag.removeColumn()}
          >
            <img src={assets.trash} alt="Delete" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ColumnOptionsBtn;
