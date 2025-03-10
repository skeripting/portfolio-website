import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ClickableText from "../ClickableText/ClickableText";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <div className="header">
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`header-center ${isOpen ? "open" : ""}`}>
        <ClickableText
          text="Home"
          active={location.pathname === "/"}
          href="/"
        />
        <ClickableText
          text="Experience"
          active={location.pathname === "/experience"}
          href="/experience"
        />
        <ClickableText
          text="Coaching"
          active={location.pathname === "/coaching"}
          href="/coaching"
        />
        <ClickableText
          text="Book"
          active={location.pathname === "/book"}
          href="/book"
        />
        <ClickableText
          text="Blog"
          active={location.pathname === "/blog"}
          href="/blog"
        />
      </div>
    </div>
  );
}

export default Header;
