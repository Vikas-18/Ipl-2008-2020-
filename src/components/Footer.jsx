import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "grey",
        textAlign: "center",
        fontSize: "12px",
        color: "white",
      }}
    >
      <p>Developed with love</p>
      <p>© 2023 Copyright: IPL-INFO All Rigths Reserved</p>
    </footer>
  );
};

export default Footer;
