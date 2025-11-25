import "./ColumnAdder.css";
import handleColumnAdderKeyDown from "../../../utils/handleColumnAdderKeyDown";
import prepareColumnAdder from "../../../utils/prepareColumnAdder";
import type { ColumnAdderProps } from "../../../types/ColumnAdder";

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
          onKeyDown={(e) =>
            handleColumnAdderKeyDown(e, addColumn, setAddingColumn)
          }
        />
      ) : (
        <button
          className="kanban-add-column-button"
          onClick={() => prepareColumnAdder(setAddingColumn)}
        >
          + Add Column
        </button>
      )}
    </>
  );
};

export default ColumnAdder;
