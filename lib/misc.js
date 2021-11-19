import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

const parseDate = (date) => dayjs(date).toNow(true);

const isLongerThanADay = (date) => {
  const arr = ["day", "days", "month", "months", "year", "years"];

  return arr.some((item) => date.includes(item));
};

export { parseDate, isLongerThanADay };
