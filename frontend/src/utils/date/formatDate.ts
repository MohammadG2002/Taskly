const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export default formatDate;
