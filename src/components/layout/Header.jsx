import React from "react";
import logo from "../../assets/img/logoCovid.png";
import "../../assets/css/stylesheet.css";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light" className="nav text-card">
        <Navbar.Brand href="#home" style={{ marginLeft: 20 }}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          COVID 19
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
