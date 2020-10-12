import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../assets/css/stylesheet.css";

export default function Chart() {
  const [data, setData] = useState([]);
  let number = 1;

  useEffect(() => {
    try {
      fetch("https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/")
        .then((res) => res.json())
        .then((res) => setData(res));
    } catch (error) {}
  }, []);

  return (
    <div className="mt-5" style={{ backgroundColor: "white" }}>
      <p
        className="text-left text-card"
        style={{
          color: "black",
          fontSize: 20,
          paddingLeft: 30,
          paddingTop: 15,
        }}
      >
        Kasus Coronavirus Global
      </p>
      <hr />
      <div
        className="table-wrapper-scroll-y my-custom-scrollbar"
        style={{ padding: 30, paddingTop: 0, height: 500 }}
      >
        <Table responsive bordered hover variant="light">
          <thead>
            <tr>
              <th>No.</th>
              <th>Negara</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
            </tr>
          </thead>

          <tbody>
            {data.map((res, id) => (
              <tr key={id}>
                <td>{number++}</td>
                <td>{res.attributes.Country_Region}</td>
                <td>{res.attributes.Confirmed}</td>
                <td>{res.attributes.Recovered}</td>
                <td>{res.attributes.Deaths}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
