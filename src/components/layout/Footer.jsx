import React from "react";
import love from "../../assets/img/love.png";
import "../../assets/css/stylesheet.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer mt-5 text-center">
      <a href="https://github.com/mugiwara404">
        <AiOutlineGithub className="mt-4 mr-3 mb-4 href" />
      </a>
      <a href="https://web.facebook.com/xaptain404">
        <FaFacebookF className="mt-4 mb-4 href" />
      </a>

      <p className="text-card" style={{ color: "black", fontSize: 16 }}>
        Powered by API{" "}
        <a style={{ textDecoration: "none" }} href="https://kawalcorona.com/">
          Kawal Corona
        </a>
        . Made with <img style={{ width: 20, height: 20 }} src={love} /> by
        Luffy
      </p>
    </div>
  );
}
