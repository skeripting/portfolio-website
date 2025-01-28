import ExperienceGrid from "../../components/ExperienceGrid/ExperienceGrid";
import GradientButton from "../../components/GradientButton/GradientButton";
import TestimonialSticker from "../../components/TestimonialSticker/TestimonialSticker";
import "./Experience.scss";

function Experience() {
  return (
    <div className="experience-page">
      <div className="background-cover">
        <TestimonialSticker
          subtitle='"I should be thanking you more than anything, 
bringing my ideas to life."'
          author="Fiverr Client"
          right="65%"
        ></TestimonialSticker>
        <TestimonialSticker
          subtitle='"Amazing seller! Very knowledgeable and was 
willing to work with me through a very 
confusing problem that I first contacted him 
about regarding my game."'
          right="10%"
          author="Fiverr Client"
        ></TestimonialSticker>
        <h4 className="hello-text">Take a look at</h4>
        <div className="experience-top-cover">
          <h1>My Experience</h1>
          <img
            className="kushal-profile"
            src="/instagramPhoto.jpg"
            alt="Kushal Timsina"
          ></img>
          <h4 className="hello-text">Kushal Timsina</h4>
          <div className="buttons-flex">
            <GradientButton href="mailto:kushal@kushaltimsina.com">
              Get in touch
            </GradientButton>
          </div>
        </div>
      </div>
      <ExperienceGrid></ExperienceGrid>
    </div>
  );
}

export default Experience;
