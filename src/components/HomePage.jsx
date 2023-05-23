import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">IPL INFO 2008-2020</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/purplecap">PurpleCap</Link>
          <Link to="/orangecap">OrangeCap</Link>
          <Link to="/finals">Finals</Link>
          <Link to="/longestsix">Longest Six</Link>
          <Link to="/emergingplayer">Emerging Player</Link>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        WELCOME TO IPL INFO HERE YOU WILL GET INFO ABOUT IPL FROM 2008-2020
      </h1>
    </>
  );
}

export default HomePage;
