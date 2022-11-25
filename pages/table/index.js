import moment from "moment";
import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { Monthly, Weekly, Daily, BasicSelect } from "../../components/Selector";

const time = new Date("11/14/2022");
function Table() {
  const { docs } = useCollection("snms", 10, time);

  const [scope, setScope] = useState("daily");

  const [month, setMonth] = useState(moment().get("month"));

  const selector = {
    daily: (
      <>
        <Monthly onSet={(value) => setMonth(value - 1)} />
        <Daily month={month} />
      </>
    ),
    monthly: (
      <>
        <Monthly onSet={(value) => setMonth(value - 1)} />
      </>
    ),
    weekly: (
      <>
        <Monthly onSet={(value) => setMonth(value - 1)} />
        <Weekly month={month} />
      </>
    ),
  };
  return (
    <>
      <BasicSelect />
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          setScope(e.target.value);
        }}
      >
        <option selected>select data to show</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      {selector[scope]}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Timestamp</th>
            <th scope="col">Nitrogen</th>
            <th scope="col">Phosphorus</th>
            <th scope="col">Potassium</th>
            <th scope="col">Moisture</th>
            <th scope="col">Temperature</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc) => {
            return (
              <tr key={doc.id}>
                <td scope="row">
                  {moment(doc.timestamp.toDate()).format("lll")}
                </td>
                <td scope="row">{doc.n}</td>
                <td scope="row">{doc.p}</td>
                <td scope="row">{doc.k}</td>
                <td scope="row">{doc.temperature}</td>
                <td scope="row">{doc.moisture}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Table;
