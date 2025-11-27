import React from "react";
import "./Calendar.css";
import { createPortal } from "react-dom";
import DatePicker from "react-datepicker";
import startDateHandler from "../../../../../utils/date/startDateHandler";
import dueDateHandler from "../../../../../utils/date/dueDateHandler";

interface CalendarProps {
  startDate: Date;
  dueDate: Date;
  setStart: (date: Date) => void;
  setDue: (date: Date) => void;
  onStartDateChange?: (date: Date) => void;
  onDueDateChange?: (date: Date) => void;
  show: boolean;
  onClose: () => void;
}

const Calendar = ({
  startDate,
  dueDate,
  show,
  onClose,
  onStartDateChange,
  onDueDateChange,
  setStart,
  setDue,
}: CalendarProps) => {
  const handleStartDateChange = startDateHandler(setStart, onStartDateChange);
  const handleDueDateChange = dueDateHandler(setDue, onDueDateChange);

  return createPortal(
    <div
      className={`calendar-backdrop ${show ? "open" : ""}`}
      onClick={onClose}
    >
      <div className="calendar-container" onClick={(e) => e.stopPropagation()}>
        <div>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            inline
          />
        </div>
        <div>
          <DatePicker
            selected={dueDate}
            onChange={handleDueDateChange}
            inline
          />
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Calendar;
