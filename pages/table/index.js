function data() {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">timestamp</th>
              <th scope="col">Nitrogen</th>
              <th scope="col">Phosphorus</th>
              <th scope="col">Potassium</th>
              <th scope="col">moisture</th>
              <th scope="col">temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default data;
