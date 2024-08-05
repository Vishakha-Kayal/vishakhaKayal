import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div className="nav">
      <h4>
        <a href="#home">Home</a>
      </h4>
      <h4>
        <a href="#about">About</a>
      </h4>
      <h4>
        <a href="#portfolio">Portfolio</a>
      </h4>
      <h4>
        <a href="#footer">Contact</a>
      </h4>
    </div>
  );
};

export default Header;
