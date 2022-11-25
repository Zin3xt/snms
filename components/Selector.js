import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
    <>
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
      <Box sx={{ m: 1, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="daily">Monthly</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="Monthly"
            onChange={(e) => {
              handleOnChange(e.target.value);
            }}
          >
            {months.map((month, i) => {
              return (
                <option key={month} value={i + 1}>
                  {month}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
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
    <>
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
      <Box sx={{ m: 1, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="daily">Weeks</InputLabel>
          <Select
            labelId="Weekly"
            id="demo-simple-select"
            value={day}
            label="Days"
            onChange={(e) => {
              handleOnChange(e.target.value);
            }}
          >
            {weeks.map((week) => {
              return (
                <option key={week} value={week}>
                  {week}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
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
    <>
      {/* <select
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
      </select> */}
      <Box sx={{ m: 1, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="daily">Days</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={day}
            label="Days"
            onChange={(e) => {
              handleOnChange(e.target.value);
            }}
          >
            {days.map((day) => {
              return (
                <option key={day} value={day}>
                  {day}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
export function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ m: 1, minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
