import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "./data.js";

const PurpleCapHolder = () => {
  const [inputValue, setInputValue] = useState("");
  const [purplecapname, setpurplecapname] = useState(null);
  const [purplecapwkt, setpurplecapwkt] = useState(null);

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle embedding data
  const embedData = () => {
    const purplecapname = data[inputValue].PurpleCapWinner.Player; // Access the data based on the input value
    const purplecapwkt = data[inputValue].PurpleCapWinner.Wickets; // Access the data based on the input value

    setpurplecapname(purplecapname); // Update the state variable to trigger re-render
    setpurplecapwkt(purplecapwkt);
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1>Purple Cap Winner of {inputValue}</h1>
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
            backgroundColor: "purple",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={embedData}
        >
          Get Info
        </button>
        {purplecapname && <h1>{`Name: ${purplecapname}`}</h1>}
        {purplecapwkt && <h1>{`Wickets: ${purplecapwkt}`}</h1>}
      </div>
    </div>
  );
};

export default PurpleCapHolder;
