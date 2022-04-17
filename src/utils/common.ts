import moment from "moment";

export const getDiffTimeFormat = (time: string | null | undefined) => {
  const diffTime = moment().diff(moment(time));
  const duration = moment.duration(diffTime);
  const years = duration.years(),
    months = duration.months(),
    days = duration.days(),
    hrs = duration.hours(),
    mins = duration.minutes(),
    secs = duration.seconds();

  if (years) {
    return `${years}년 전`;
  }
  if (months) {
    return `${months}달 전`;
  }
  if (days) {
    return `${days}일 전`;
  }
  if (hrs) {
    return `${hrs}시간 전`;
  }
  if (mins) {
    return `${mins}분 전`;
  }
  if (secs) {
    return `${secs}초 전`;
  }

  return "";
};
