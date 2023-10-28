import { useState } from "react";
import "./PersonalInfo.css";
function PersonalInfo() {
  const [name, setName] = useState("");
  const [displayedData, setDisplayData] = useState("");
  function handleFirstNameChange(e) {
    setName(e.target.value);
  }
  function handleSubmit() {
    setDisplayData(name);
    setName("");
  }
  return (
    <>
      <form
        action="#"
        className="name-section"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Personal Details</h1>
        <button onClick={handleSubmit}>Submit</button>
        <p>Name: {displayedData}</p>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Full Name"
            value={name}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" placeholder="Enter Email" />
        </div>
        <div>
          <label htmlFor="number">Phone Number </label>
          <input type="text" id="number" placeholder="Enter Number" />
        </div>
        <div>
          <label htmlFor="address">Address </label>
          <input type="text" id="address" placeholder="Enter Address" />
        </div>
      </form>
    </>
  );
}

export default PersonalInfo;
