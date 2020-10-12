import React from "react";
import { Container, Tab } from "react-bootstrap";
import Card from "./CardInfo";
import TableIndo from "./TableIndo";
import TableWorld from "./TableWorld";
import "../assets/css/stylesheet.css";

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <p className="text-header">Corona Info</p>
      <p className="text-second">Coronavirus Global & Indonesia Live Data</p>
      <Card />

      <TableIndo />
      <TableWorld />
    </Container>
  );
}
