import React from "react";
import cricketPowder from "../assets/cricketPowder.jpg";
import cricketPasta from "../assets/cricketPasta.jpg";
import arrow from "../assets/arrow.png";

export const newElement = (
  <div>
    <h1>Welcome to my react application</h1>
    <h4>My to do list:</h4>
    <ul>
      <li>Buy some crickets</li>
      <li>Dry some crickets</li>
      <li>Crush and mill the crickets</li>
      <li>Make some cricket protein powder/ flour</li>
      <li>Use that powder/ flour to make delicious pasta</li>
    </ul>
    <div>
      <img
        src={cricketPowder}
        alt="Cricket powder"
        style={{ height: "400px", width: "400px" }}
      />
      <img
        src={arrow}
        alt="arrow"
        style={{
          height: "200px",
          width: "200px",
          position: "relative",
          top: "-100px",
          backgroundColor: "#aaaaaa",
        }}
      />
      <img
        src={cricketPasta}
        alt="Cricket pasta"
        style={{ height: "400px", width: "400px" }}
      />
    </div>
  </div>
);
