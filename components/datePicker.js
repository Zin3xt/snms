import React from "react";
import Image from "next/image";
import logo from "../components/picture/22ud6jeD_400x400.png";
import { useState } from "react";
import moment from "moment";
import Graph from "./graph";
import styles from "../styles/nav.module.css";

function DatePicker() {
  const [date, setDate] = useState(moment().startOf("day"));
  const [limit, setLimit] = useState(10);

  const [filters, setFilters] = useState({
    date: moment().startOf("day"),
    limit: 10,
  });

  const handleApply = () => {
    setFilters({ date, limit });
  };
  return (
    <>
      <div className="d-flex justify-content-end gap-2">
        {/* <div className=" justify-content-start gap-2">
          <h1 className="text-start">IOT-SNMS</h1>
        </div> */}
        <div className="p-2 flex-grow-1 d-flex align-items-center">
          <div className="">
            <Image
              className=""
              src={logo}
              alt="Picture of the author"
              width="80px"
              height="80px"
            />
          </div>
          <h1>Maiskarte</h1>
        </div>
        <div className="d-flex align-items-center ">
          <input
            className="p-2 form-control "
            type="number"
            placeholder="Limits"
            onChange={(e) => {
              const { value } = e.target;
              // reject non-numeric characters and negative numbers
              if (Number(value) > 0 && Number(value) <= 200) {
                setLimit(value);
                return;
              }
              setLimit(10);
              alert("Negative number is not allowed and max is 200");
            }}
          />
          <input
            className="p-2 m-2 form-control "
            type="date"
            onChange={(e) => setDate(moment(e.target.value).startOf("day"))}
          />
          <button className=" btn btn-primary " onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
      <Graph limit={filters.limit} date={filters.date} />
    </>
  );
}

export default DatePicker;
