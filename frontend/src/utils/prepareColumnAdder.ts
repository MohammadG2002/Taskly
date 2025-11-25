import handleInputFocus from "./handleInputFocus";

const prepareColumnAdder = (
  setAddingColumn: (value: boolean) => void,
  selector = ".kanban-new-column-input"
) => {
  setAddingColumn(true);
  handleInputFocus({ selector });
};

export default prepareColumnAdder;
