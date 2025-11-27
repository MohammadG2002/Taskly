import formatDate from "./formatDate";

const formatDateRange = (start: Date, end: Date) => {
  const startDay = formatDate(start, { day: "2-digit" });
  const endDay = formatDate(end, { day: "2-digit" });

  const startMonth = formatDate(start, { month: "short" });
  const endMonth = formatDate(end, { month: "short" });

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  if (startMonth === endMonth && startYear === endYear) {
    // 27 - 29 Nov 2025
    return `${startDay} - ${endDay} ${startMonth} ${startYear}`;
  } else if (startYear === endYear) {
    // 27 Nov - 06 Dec 2025
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${startYear}`;
  } else {
    // different years
    return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
  }
};

export default formatDateRange;
