import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function NavBar() {
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
    </>
  );
}

export default NavBar;
