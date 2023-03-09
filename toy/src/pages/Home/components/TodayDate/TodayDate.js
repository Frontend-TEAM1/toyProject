import { days, today } from "utils/dateParse";


function Today() {
  return (
    <>
      <span>{today.getFullYear()}년 </span>
      <span>{today.getMonth() + 1}월 </span>
      <span>{today.getDate()}일 </span>
      <span>{days[today.getDay()]} </span>
    </>
  );
}

export default Today;
