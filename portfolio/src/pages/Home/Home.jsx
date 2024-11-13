import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";
import GradientButton from "../../components/GradientButton/GradientButton";
import GradientText from "../../components/GradientText/GradientText";
import Sticker from "../../components/Sticker/Sticker";
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="background-cover">
        <div className="home-flex">
          <div className="home-hero-left">
            <h4 className="hello-text">⎯ Hello,</h4>
            <div className="im-kushal-cover">
              <h1>
                I'm <GradientText>Kushal</GradientText>
              </h1>
              <h4>Game & Software Developer</h4>
              <p>
                I create immersive <strong>games</strong> for millions worldwide
                and write innovative <strong>software</strong> aimed at solving
                real-world problems. I'm also passionate about teaching
                scripting, helping others bring their ideas to life and
                empowering the next generation of developers.
              </p>
              <div className="buttons-flex">
                <GradientButton>Email me</GradientButton>
                <GradientButton>View Resume</GradientButton>
              </div>
            </div>
          </div>
          <div className="home-hero-right">
            <img
              className="kushal-profile"
              src="/KushalProfile.jpg"
              alt="A profile picture of Kushal"
            ></img>
            <Sticker
              left="-25%"
              top="-25%"
              header="BattleMania"
              subtitle="1.3M+ Plays"
              icon="/BattleManiaLogoHD.png"
            ></Sticker>
            <Sticker
              left="-20%"
              top="80%"
              width="157px"
              height="220px"
              logoWidth="127px"
              logoHeight="127px"
              header="Quizzy"
              subtitle="400+ Users"
              icon="/QuizzyIconFull.png"
            ></Sticker>
            <img
              src="/bookfrontcover.jpg"
              alt="A picture of Kushal's book, Unofficial Beginner's Guide to Roblox Scripting"
              width="243px"
              height="320px"
              style={{
                borderRadius: "20px",
                position: "absolute",
                left: "65%",
                top: "70%",
                filter: "drop-shadow(0px 3px 6px rgb(0, 0, 0, 0.16))",
                transform: "translateZ(0)",
              }}
            ></img>
          </div>
        </div>

        {/* Experience */}
        <ExperienceSection></ExperienceSection>
      </div>
    </div>
  );
}

export default Home;
