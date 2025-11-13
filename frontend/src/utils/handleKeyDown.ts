// Handler for key down events

interface HandleKeyDownParams {
  e: React.KeyboardEvent;
  onEnter: () => void;
  onEscape: () => void;
}

const handleKeyDown = ({ e, onEnter, onEscape }: HandleKeyDownParams) => {
  if (e.key === "Enter") {
    onEnter();
  }
  if (e.key === "Escape") {
    onEscape();
  }
};
export default handleKeyDown;
