import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "./data";

const OrangeCapHolder = () => {
  const [inputValue, setInputValue] = useState("");
  const [orangecapname, setorangecapname] = useState(null);
  const [orangecapwkt, setorangecapwkt] = useState(null);

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle embedding data
  const embedData = () => {
    const orangecapname = data[inputValue].OrangeCapWinner.Player; // Access the data based on the input value
    const orangecapwkt = data[inputValue].OrangeCapWinner.Runs; // Access the data based on the input value

    setorangecapname(orangecapname); // Update the state variable to trigger re-render
    setorangecapwkt(orangecapwkt);
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1>Orange Cap Winner of {inputValue}</h1>
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
            backgroundColor: "orange",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={embedData}
        >
          Get Info
        </button>
        {orangecapname && <h1>{`Name: ${orangecapname}`}</h1>}
        {orangecapwkt && <h1>{`Runs: ${orangecapwkt}`}</h1>}
      </div>
    </div>
  );
};

export default OrangeCapHolder;
