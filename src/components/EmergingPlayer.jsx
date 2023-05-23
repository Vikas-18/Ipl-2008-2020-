import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "./data";

const EmergingPlayer = () => {
  const [inputValue, setInputValue] = useState("");
  const [playername, setplayername] = useState(null);

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle embedding data
  const embedData = () => {
    const playername = data[inputValue].EmergingPlayer; // Access the data based on the input value
    setplayername(playername); // Update the state variable to trigger re-render
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1>Emerging Player of Year {inputValue}</h1>
        <input
          placeholder="Type Year Between 2008-2020"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginTop: "20px", width: "300px" }}
        />
        <br />
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "yellow",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={embedData}
        >
          Get Info
        </button>
        {playername && <h1>{`Emerging Player Name: ${playername}`}</h1>}
      </div>
    </div>
  );
};

export default EmergingPlayer;
