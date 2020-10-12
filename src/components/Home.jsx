import React from "react";
import { Container } from "react-bootstrap";
import Card from "./CardInfo";
import TableIndo from "./TableIndo";
import TableWorld from "./TableWorld";
import "../assets/css/stylesheet.css";

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <p className="text-header">COVID 19 TRACKER</p>
      <p className="text-second">Coronavirus Global & Indonesia Live Data</p>
      <Card />

      <TableIndo />
      <TableWorld />
    </Container>
  );
}
