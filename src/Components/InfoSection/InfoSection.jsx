import "./InfoSection.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
function InfoSection() {
  return (
    <form>
      <PersonalInfo />
      <Education />
      <Experience />
    </form>
  );
}
export default InfoSection;
