import "./Education.css";
function Education() {
  return (
    <form>
      <h1>Education</h1>
      <div>
        <label htmlFor="school">School</label>
        <input type="text" id="school" placeholder="Enter School Name" />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" placeholder="Enter Degree Type" />
      </div>
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input type="text" id="start-date" placeholder="Enter Start Date" />
      </div>
      <div>
        <label htmlFor="end-date">End Date</label>
        <input type="text" id="end-date" placeholder="Enter End Date" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter Location" />
      </div>
    </form>
  );
}
export default Education;
