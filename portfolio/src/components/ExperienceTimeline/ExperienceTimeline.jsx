import Experience from "../Experience/Experience";
import "./ExperienceTimeline.scss";

function ExperienceTimeline() {
  return (
    <div className="experience-timeline">
      <Experience
        tags={["Lua U", "Roblox"]}
        name="BattleMania"
        desc="BattleMania is my Roblox battle simulation game,
where you can select troops and fight them against
each other. BattleMania has been played 
1.2 million times worldwide."
        video="C8CNkBzbN_Y"
        btnText="Play BattleMania"
        btnHref="https://www.roblox.com/games/14945130763/UPDATE-4-BattleMania"
      ></Experience>
      <Experience
        tags={["React JS", "Adobe XD", "Chart.js"]}
        name="Quizzy"
        desc="Quizzy is my startup that aims to bring the most efficient studying methods to all students worldwide. Built on active recall and spaced repetition principles, Quizzy tracks studying analytics and uses them to optimize learning."
        videoPath="/QuizzyScheduling.mp4"
        btnText="See Quizzy"
        btnHref="https://quizzynow.com"
      ></Experience>
      <Experience
        tags={["Lua U", "Roblox"]}
        name="Bladers: Rebirth"
        desc="I contributed as a gameplay engineer to Bladers: Rebirth, 
a Roblox Beyblade game with 30+ million visits. 
My work included developing a Quest system, 
adding interactive trainers to enhance immersion, 
and fixing critical bugs to improve overall gameplay experience."
        video="QWLxTcewUMA"
        btnText="Play Bladers: Rebirth"
        btnHref="https://www.roblox.com/games/15423741735/UPD-Bladers-Rebirth"
      ></Experience>
      <Experience
        tags={["React JS", "Adobe XD", "OpenStreetMap API"]}
        name="AmbuLink"
        desc="For the BrickHack X hackathon, I created the front-end for AmbuLink,
an ambulance tracking web application
concept, while another developer created the backend. The project was 
driven by the need to display ambulance arrival 
times and live location data for women in labor."
        img="/AmbuLinkLogin.jpg"
        btnText="See Ambulink"
        btnHref="https://devpost.com/software/ambulink"
      ></Experience>
    </div>
  );
}

export default ExperienceTimeline;
