import React from "react";
import { options1 } from "../chartsOptions/nChart";
import { options2 } from "../chartsOptions/pChart";
import { options3 } from "../chartsOptions/kChart";
import { options4 } from "../chartsOptions/tempOption";
import { options5 } from "../chartsOptions/moistOption";
import { useCollection } from "../hooks/useCollection";
import {
  calculateAverage as calculateAverage,
  nitrogenAnalysis,
  phosphorusAnalysis,
  potassiumAnalysis as potassiumAnalysis,
} from "./soilReadings";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import { useRef, useState, useEffect } from "react";
import moment from "moment";

export default function Graph(props) {
  const { date, limit } = props;

  const lineChart5 = useRef(null);
  const lineChart4 = useRef(null);
  const lineChart3 = useRef(null);
  const lineChart2 = useRef(null);
  const lineChart = useRef(null);

  const { docs } = useCollection("snms", limit, date);

  const n = docs.map((doc) => doc.n).reverse();
  const p = docs.map((doc) => doc.p).reverse();
  const k = docs.map((doc) => doc.k).reverse();
  const moisture = docs.map((doc) => doc.moisture).reverse();
  const temp = docs.map((doc) => doc.temperature).reverse();

  const timestamp = docs
    .map((doc) => moment(doc.timestamp.toDate()).format("hh:mm:ss"))
    .reverse();

  const nAverage = calculateAverage(n);
  const nitrogen = nitrogenAnalysis(nAverage);
  const pAverage = calculateAverage(p);
  const phosphorus = phosphorusAnalysis(pAverage);
  const kAverage = calculateAverage(k);
  const potassium = potassiumAnalysis(kAverage);

  const defaultData = {
    labels: timestamp, //[0,1,2,3,4,5,6....99]
    datasets: [{ data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3] }],
  };

  return (
    <div>
      <div className="row">
        <div className="text-light">
          <br></br>
          <h6>Nitrogen: {nitrogen}</h6>
          <h6>Phosphorus: {phosphorus}</h6>
          <h6>Potassium : {potassium}</h6>
          <br></br>
        </div>
        <div className="col-lg-4">
          <Line
            data={{
              ...defaultData,
              datasets: [{ data: n, label: "mg/kg" }],
            }}
            // width={100}
            // height={400}
            options={options1}
            ref={lineChart}
          ></Line>
        </div>
        <div className="col-lg-4">
          <Line
            data={{ ...defaultData, datasets: [{ data: p, label: "mg/kg" }] }}
            // width={100}
            // height={40}
            options={options2}
            ref={lineChart2}
          ></Line>
        </div>
        <div className="col-lg-4">
          <Line
            data={{ ...defaultData, datasets: [{ data: k, label: "mg/kg" }] }}
            // width={100}
            // height={40}
            options={options3}
            ref={lineChart3}
          ></Line>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Line
            data={{
              ...defaultData,
              datasets: [{ data: temp, label: "°C" }],
            }}
            // width={100}
            // height={40}
            options={options4}
            ref={lineChart4}
          ></Line>
        </div>
        <div className="col-lg-6">
          <Line
            data={{
              ...defaultData,
              datasets: [{ data: moisture, label: "%" }],
            }}
            // width={100}
            // height={40}
            options={options5}
            ref={lineChart5}
          ></Line>
        </div>
      </div>
    </div>
  );
}
