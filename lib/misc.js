const isLongerThanADay = (date) => {
  const arr = ["day", "days", "month", "months", "year", "years"];

  return arr.some((item) => date.includes(item));
};

export { isLongerThanADay };
