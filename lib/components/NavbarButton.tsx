"use client";
import React, { useState } from "react";

export default function NavbarButton() {
  const [isAtTop, setIsAtTop] = useState(true); // State to track the circle's position

  const handleCircleClick = () => {
    setIsAtTop(!isAtTop); // Toggle the position
  };

  return (
    <div className="mainContainer">
      <div className="buttonOutline">
        <div className="container">
          <div
            className={`black-circle ${isAtTop ? "top" : "bottom"}`}
            onClick={handleCircleClick}
          ></div>
        </div>
      </div>
      <div className="navbarText">
        <h1>{isAtTop ? "להר הצופים" : "מהר הצופים"}</h1>
      </div>
    </div>
  );
}
