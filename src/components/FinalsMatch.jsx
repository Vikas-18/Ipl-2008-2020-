import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "./data";

const FinalsMatch = () => {
  const [inputValue, setInputValue] = useState("");
  const [captain1, setcaptain1] = useState(null);
  const [captain2, setcaptain2] = useState(null);
  const [teams, setteams] = useState(null);
  const [winner, setwinner] = useState(null);
  const [venue, setvenue] = useState(null);
  const [margin, setmargin] = useState(null);
  const [mom, setmom] = useState(null);

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle embedding data
  const embedData = () => {
    const captain1 = data[inputValue].Finals.Team1Captain; // Access the data based on the input value
    const captain2 = data[inputValue].Finals.Team2Captain; // Access the data based on the input value
    const venue = data[inputValue].Finals.Venue; // Access the data based on the input value
    const teams = data[inputValue].Finals.TeamsInFinal;
    const winner = data[inputValue].Finals.Winner;
    const margin = data[inputValue].Finals.Margin;
    const mom = data[inputValue].Finals.ManOfTheMatch;

    setcaptain1(captain1); // Update the state variable to trigger re-render
    setcaptain2(captain2);
    setvenue(venue);
    setteams(teams);
    setwinner(winner);
    setmargin(margin);
    setmom(mom);
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1>Finals Info</h1>
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
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={embedData}
        >
          Get Info
        </button>
        {captain1 && <h1>{`Captain1: ${captain1}`}</h1>}
        {captain2 && <h1>{`Captain2: ${captain2}`}</h1>}
        {venue && <h1>{`Venue: ${venue}`}</h1>}
        {teams && <h1>{`Teams: ${teams}`}</h1>}
        {winner && <h1>{`Winner: ${winner}`}</h1>}
        {margin && <h1>{`Margin: ${margin}`}</h1>}
        {mom && <h1>{`Man Of The Match: ${mom}`}</h1>}
      </div>
    </div>
  );
};

export default FinalsMatch;
