import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import "./assets/css/stylesheet.css";

function App() {
  document.body.style.backgroundColor = "#f1f1f9";
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
