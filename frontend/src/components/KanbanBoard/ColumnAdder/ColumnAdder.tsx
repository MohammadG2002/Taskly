import React from "react";
import "./ColumnAdder.css";
import handleInputFocus from "../../../utils/handleInputFocus";

interface ColumnAdderProps {
  addingColumn: boolean;
  setAddingColumn: (value: boolean) => void;
  addColumn: (column: { id: number; title: string; cards: any[] }) => void;
}

const ColumnAdder = ({
  addingColumn,
  setAddingColumn,
  addColumn,
}: ColumnAdderProps) => {
  return (
    <>
      {addingColumn ? (
        <input
          type="text"
          className="kanban-new-column-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!e.currentTarget.value.trim()) return setAddingColumn(false);
              addColumn({
                id: Date.now(),
                title: e.currentTarget.value,
                cards: [],
              });
              setAddingColumn(false);
            }
            if (e.key === "Escape") {
              setAddingColumn(false);
            }
          }}
        />
      ) : (
        <button
          className="kanban-add-column-button"
          onClick={() => {
            setAddingColumn(true);
            handleInputFocus({ selector: ".kanban-new-column-input" });
          }}
        >
          + Add Column
        </button>
      )}
    </>
  );
};

export default ColumnAdder;
