import React from "react";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)", // Subtracting the height of the NavBar
        }}
      >
        <h1
          style={{
            textAlign: "center",
            width: "50%",
          }}
        >
          WELCOME TO IPL INFO HERE YOU WILL GET INFO ABOUT IPL FROM 2008-2020
        </h1>
      </div>
    </>
  );
}

export default HomePage;
