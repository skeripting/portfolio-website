import "./ExperienceGrid.scss";

function ExperienceGrid() {
  return (
    <section className="experience-grid" id="experience-grid">
      <div className="individual-experience">
        <img src="BattleManiaThumbnail.png" className="experience-img"></img>
        <p className="experience-date">Since August 2023, 1.4M+ visits</p>
        <h2 className="individual-experience-name">BattleMania</h2>
        <p className="about-experience">
          BattleMania is my Roblox battle simulation game, where you can select
          troops and fight them against each other. There are over 70 obtainable
          troops in the game.
        </p>
      </div>
      <div className="individual-experience">
        <img src="BladersRebirth.png" className="experience-img"></img>
        <p className="experience-date">May 2024 - November 2024, 40M+ visits</p>
        <h2 className="individual-experience-name">Bladers: Rebirth</h2>
        <p className="about-experience">
          I contributed as a gameplay engineer to Bladers: Rebirth, a Roblox
          Beyblade game with 40+ million visits. My work included developing a
          Quest system, adding interactive trainers to enhance immersion, and
          fixing critical bugs to improve overall gameplay experience.
        </p>
      </div>
      <div className="individual-experience">
        <img
          src="book_pic_cropped_for_experience.png"
          className="experience-img"
        ></img>
        <p className="experience-date">Since Summer 2023</p>
        <h2 className="individual-experience-name">
          Beginner's Guide to Roblox Scripting
        </h2>
        <p className="about-experience">
          I authored a book to help new scripters learn Roblox scripting. The
          book has learning exercises, vocabulary lists, quizzes, and tips on
          how to remember scripting related concepts.
        </p>
      </div>
      <div className="individual-experience">
        <img src="scriptingYoutube.png" className="experience-img"></img>
        <p className="experience-date">Since 2016, 940K+ lifetime views</p>
        <h2 className="individual-experience-name">script_ing YouTube</h2>
        <p className="about-experience">
          Since I was very little, I wanted to learn Roblox scripting and teach
          it to the world. So, I started a channel, where I share my knowledge
          for free, contributing to the growth of new and existing Roblox games.
        </p>
      </div>
      <div className="individual-experience">
        <img src="vampireSystem.png" className="experience-img"></img>
        <p className="experience-date">November 2024-2025</p>
        <h2 className="individual-experience-name">Vampire System</h2>
        <p className="about-experience">
          I had the pleasure of working on a vampire system for a client, where
          a player may transform into a vampire, bite targets, and drag them, as
          their health gets sapped out. The target may struggle out of the bite.
        </p>
      </div>
      <div className="individual-experience">
        <img src="horrorGame.png" className="experience-img"></img>
        <p className="experience-date">August 2024</p>
        <h2 className="individual-experience-name">Horror Game</h2>
        <p className="about-experience">
          A client reached out, asking me to script a horror game system, where
          entities are alerted according to the volume of players using the
          Roblox voice chat. Within a few days, I had this demo prepared. It was
          lots of fun to code!
        </p>
      </div>
      <div className="individual-experience">
        <img src="gunsystem.png" className="experience-img"></img>
        <p className="experience-date">January 2023 - March 2024</p>
        <h2 className="individual-experience-name">LEVGRU Gun System</h2>
        <p className="about-experience">
          I worked closely with a client for over 1 year on a 3rd person
          intricate gun system, that supports mechanics such as combat diving,
          heat sensing scopes, gun recoil, fall damage, and much more.
        </p>
      </div>
    </section>
  );
}

export default ExperienceGrid;
