import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../assets/css/stylesheet.css";

export default function Chart() {
  const [data, setData] = useState([]);
  let number = 1;

  useEffect(() => {
    try {
      fetch(
        "http://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi/"
      )
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
        Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi
      </p>
      <hr />
      <div
        className="my-custom-scrollbar"
        style={{ padding: 30, paddingTop: 0, height: 500 }}
      >
        <Table responsive bordered hover variant="light">
          <thead>
            <tr>
              <th>No.</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
            </tr>
          </thead>

          <tbody>
            {data.map((res, id) => (
              <tr key={id}>
                <td>{number++}</td>
                <td>{res.attributes.Provinsi}</td>
                <td>{res.attributes.Kasus_Posi}</td>
                <td>{res.attributes.Kasus_Semb}</td>
                <td>{res.attributes.Kasus_Meni}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
