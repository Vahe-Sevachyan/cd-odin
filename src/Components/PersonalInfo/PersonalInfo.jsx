import "./PersonalInfo.css";
function PersonalInfo() {
  return (
    <>
      <form action="#" className="name-section">
        <h1>Personal Details</h1>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter Full Name" />
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
