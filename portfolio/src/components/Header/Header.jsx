import React from "react";
import { useLocation } from "react-router-dom";
import ClickableText from "../ClickableText/ClickableText";
import "./Header.scss";

function Header() {
  const location = useLocation(); // Get the current location

  return (
    <div className="header">
      <div className="header-center">
        <ClickableText
          text="Home"
          active={location.pathname === "/" ? "1" : "0"}
          href="/"
        ></ClickableText>
        <ClickableText
          text="Experience"
          active={location.hash === "#experience" ? "1" : "0"}
          href="/experience"
        ></ClickableText>
        <ClickableText
          text="Book"
          active={location.pathname === "/book" ? "1" : "0"}
          href="/book"
        ></ClickableText>
      </div>
    </div>
  );
}

export default Header;
