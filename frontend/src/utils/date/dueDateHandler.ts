const dueDateHandler = (
  setDue: (date: Date) => void,
  onDueDateChange?: (date: Date) => void
) => {
  return (date: Date | null) => {
    if (date) {
      setDue(date);
      if (onDueDateChange) onDueDateChange(date);
    }
  };
};

export default dueDateHandler;
