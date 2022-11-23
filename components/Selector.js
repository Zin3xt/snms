import { useState } from "react";
import moment from "moment";

export function Monthly(props) {
  const [month, setMonth] = useState();
  const onSet = props.onSet;
  const months = moment.months();
  function handleOnChange(value) {
    onSet?.(value);
    setMonth(value);
  }

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      value={month}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
    >
      <option selected>Select Month</option>
      {months.map((month, i) => {
        return (
          <option key={month} value={i + 1}>
            {month}
          </option>
        );
      })}
    </select>
  );
}
export function Weekly(props) {
  const month = props.month;
  const year = props.year;
  const [week, setWeek] = useState();
  const onSet = props.onSet;

  const numberwOfWeeks = Math.floor(
    moment().year(2022).month(month).daysInMonth() / 7
  );

  const weeks = Array(numberwOfWeeks)
    .fill(1)
    .map((_, i) => {
      return i + 1;
    });

  function handleOnChange(value) {
    onSet?.(value);
    setWeek(value);
  }

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      value={week}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
    >
      <option selected>Select Week</option>
      {weeks.map((week) => {
        return (
          <option key={week} value={week}>
            {week}
          </option>
        );
      })}
    </select>
  );
}
export function Daily(props) {
  const month = props.month;
  const year = props.year;
  const [day, setDay] = useState();
  const onSet = props.onSet;

  const numberOfDays = moment().year(2022).month(month).daysInMonth();

  const days = Array(numberOfDays)
    .fill(1)
    .map((_, i) => {
      return i + 1;
    });
  function handleOnChange(value) {
    onSet?.(value);
    setDay(value);
  }

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      value={day}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
    >
      <option selected>Select Day</option>
      {days.map((day) => {
        return (
          <option key={day} value={day}>
            {day}
          </option>
        );
      })}
    </select>
  );
}
