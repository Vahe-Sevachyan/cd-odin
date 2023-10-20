function Experience() {
  return (
    <form action="#">
      <h1>Experience</h1>
      <div>
        <label htmlFor="company-name">Company Name</label>
        <input type="text" id="company-name" placeholder="Enter Company Name" />
      </div>
      <div>
        <label htmlFor="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          placeholder="Enter Position Title"
        />
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
export default Experience;
