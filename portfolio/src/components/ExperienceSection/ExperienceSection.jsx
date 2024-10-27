import ExperienceTimeline from "../ExperienceTimeline/ExperienceTimeline";
import "./ExperienceSection.scss";

function ExperienceSection() {
  return (
    <section className="experience-section">
      <h1>Experience</h1>
      <h4 className="check-out-my-projects">Check out my projects</h4>
      <ExperienceTimeline></ExperienceTimeline>
    </section>
  );
}

export default ExperienceSection;
