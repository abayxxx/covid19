import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import sick from "../assets/img/sick.png";
import sad from "../assets/img/sad.png";
import smile from "../assets/img/smile.png";
import indo from "../assets/img/indo.png";
import "../assets/css/stylesheet.css";

export default function CardInfo() {
  const [data, setData] = useState([]);
  const [indonesia, setIndo] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        let [sembuh, meninggal, positif, indonesia] = await Promise.all([
          fetch(
            "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/sembuh/"
          ).then((res) => res.json()),
          fetch(
            "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/positif/"
          ).then((res) => res.json()),
          fetch(
            "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/meninggal/"
          ).then((res) => res.json()),
          fetch(
            "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/"
          ).then((res) => res.json()),
        ]);

        setData([sembuh, meninggal, positif]);
        setIndo(indonesia);
      } catch (err) {
        console.log(err);
      }
    }

    get();
  }, []);

  const icolor = (name, param) => {
    let icon;
    let color;

    if (name === "Total Sembuh") {
      icon = smile;
      color = "#f82649";
    } else if (name === "Total Meninggal") {
      icon = sad;
      color = "#d43f8d";
    } else if (name === "Total Positif") {
      icon = sick;
      color = "#09ad95";
    }

    if (param === "color") {
      return color;
    } else {
      return icon;
    }
  };

  // const color = (name) => {
  //   if (name === "Total Sembuh") {
  //     return "#f82649";
  //   } else if (name === "Total Meninggal") {
  //     return "#d43f8d";
  //   } else if (name === "Total Positif") {
  //     return "#09ad95";
  //   }
  // };

  if (!indonesia[0]) {
    return <Spinner animation="grow" variant="primary" />;
  }

  return (
    <div className="flex-container mt-5">
      {data.map((data, id) => (
        <Card
          className="card-info text-left  mr-3 mb-3"
          style={{ backgroundColor: icolor(data.name, "color") }}
          key={id}
        >
          <Card.Body style={{ padding: 15 }}>
            <img
              src={icolor(data.name, "image")}
              alt="img"
              style={{ width: 70, height: 70, float: "right" }}
            ></img>
            <Card.Text className="text-card">{data.name}</Card.Text>
            <Card.Text
              className="text-card"
              style={{
                fontSize: 26,
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              {data.value}
            </Card.Text>
            <Card.Text className="text-card">ORANG</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Card
        className=" card-info text-left mb-3"
        style={{ backgroundColor: "#fc7303" }}
      >
        <Card.Body style={{ padding: 15 }}>
          <img
            src={indo}
            alt="img"
            style={{ width: 70, height: 70, float: "right" }}
          ></img>
          <Card.Text className="text-card">{indonesia[0].name}</Card.Text>
          <Card.Text
            className="text-card"
            style={{
              fontSize: 14,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            {indonesia[0].positif} Positif &nbsp;
            {indonesia[0].sembuh} Sembuh &nbsp;
            {indonesia[0].meninggal} Meninggal
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
