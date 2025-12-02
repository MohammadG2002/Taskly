const startDateHandler = (
  setStart: (date: Date) => void,
  onStartDateChange?: (date: Date | null) => void
) => {
  return (date: Date | null) => {
    if (date) {
      setStart(date);
    }
    if (onStartDateChange) onStartDateChange(date);
  };
};

export default startDateHandler;
