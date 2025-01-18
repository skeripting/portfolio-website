import React, { useState } from "react";
import Tag from "../Tag/Tag";
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import "./ExperienceGrid.scss";
import GradientButton from "../GradientButton/GradientButton";

// This is our "dictionary" storing all experiences.
// Each key is a unique name or ID for the experience.
// Each experience has a "tag" property, among others.
const experienceData = {
  battleMania: {
    tag: "Roblox",
    image: "BattleManiaThumbnail.png",
    date: "Since August 2023, 1.4M+ visits",
    title: "BattleMania",
    description:
      "BattleMania is my Roblox battle simulation game, where you can select troops and fight them against each other. There are over 70 obtainable troops in the game.",
    embedId: null,
  },
  bladersRebirth: {
    tag: "Roblox",
    image: "BladersRebirth.png",
    date: "May 2024 - November 2024, 40M+ visits",
    title: "Bladers: Rebirth",
    description:
      "I contributed as a gameplay engineer to Bladers: Rebirth, a Roblox Beyblade game with 40+ million visits...",
    embedId: null,
  },
  beginnersGuide: {
    tag: "Roblox",
    image: "book_pic_cropped_for_experience.png",
    date: "Since Summer 2023",
    title: "Beginner's Guide to Roblox Scripting",
    description:
      "I authored a book to help new scripters learn Roblox scripting...",
    embedId: null,
  },
  scriptingYouTube: {
    tag: "Roblox",
    image: "scriptingYoutube.png",
    date: "Since 2016, 950K+ lifetime views",
    title: "script_ing YouTube",
    description:
      "Since I was very little, I wanted to learn Roblox scripting and teach it to the world...",
    embedId: null,
  },
  vampireSystem: {
    tag: "Roblox",
    image: null,
    date: "November 2024-2025",
    title: "Vampire System",
    description:
      "I had the pleasure of working on a vampire system for a client, where a player may transform into a vampire, bite targets, and drag them...",
    embedId: "d-wZW8-sdXQ",
  },
  horrorGame: {
    tag: "Roblox",
    image: null,
    date: "August 2024",
    title: "Horror Game",
    description:
      "A client reached out, asking me to script a horror game system...",
    embedId: "aLpLOlnklIw",
  },
  corruptedHorrorGame1: {
    tag: "Roblox",
    image: null,
    date: "December 2023",
    title: "Corrupted Horror Game",
    description:
      "I scripted horror entities with AI pathfinding and state management. The horror entity (analog 1) can also open doors by itself.",
    embedId: "2b0svwndeEE",
  },
  corruptedHorrorGame2: {
    tag: "Roblox",
    image: null,
    date: "December 2023",
    title: "Corrupted Horror Game (Door Opening)",
    description:
      "I scripted horror entities with AI pathfinding and state management. The horror entity (analog 1) transforms if and only if the victim is alone.",
    embedId: "JAYGXzlaD80",
  },
  levgruGrenades: {
    tag: "Roblox",
    image: null,
    date: "January 2023 - March 2024",
    title: "LEVGRU Gun System (Grenades)",
    description:
      "As an addendum to the gun system commission, I scripted different types of grenades, with intricate mechanics...",
    embedId: "CYqRAwgR8nI",
  },
  levgruGunSystem: {
    tag: "Roblox",
    image: null,
    date: "January 2023 - March 2024",
    title: "LEVGRU Gun System",
    description:
      "I worked closely with a client for over 1 year on a 3rd person intricate gun system...",
    embedId: "fPXAqMBkumQ",
  },
  elementalAdventures: {
    tag: "Roblox",
    image: null,
    date: "2019-2021",
    title: "Elemental Adventures",
    description:
      "Determined to continue to create a really awesome turn-based RPG game on Roblox...",
    embedId: "XHEqeYcdFWY",
  },
  pokemonZygarde: {
    tag: "Roblox",
    image: null,
    date: "2017-2018",
    title: "Pokemon: Creation of Zygarde",
    description:
      "I was the founder and owner of a game called Pokemon: Creation of Zygarde...",
    embedId: "cjitqVwvE0M",
  },
  dragonBallBeyond: {
    tag: "Roblox",
    image: null,
    date: "November 2016",
    title: "Dragon Ball: Beyond Evolution",
    description:
      "Dragon Ball: Beyond Evolution was my first game that I created when I was 12 years old in 2016...",
    embedId: "6zmakChYH2w",
  },
  quizzy: {
    tag: "Web Development",
    image: "QuizzyHomepage.png",
    date: "November 2022 - Present",
    title: "Quizzy",
    description:
      "I created Quizzy over several years, a web app that brings the latest studying techniques to students in order to help them get their best grades.",
    embedId: null,
    href: "quizzynow.com",
    hrefText: "See Quizzy",
  },
  quizzyCreateSet: {
    tag: "Web Development",
    videoPath:
      "https://quizzynow.com/uploads/demonstration_videos/CreateSet.mp4",
    date: "November 2022 - Present",
    title: "Quizzy - Set Creation",
    description:
      "Quizzy's Create Study Set system allows students to create flashcards with ease.",
    embedId: null,
    href: "quizzynow.com",
    hrefText: "See Quizzy",
  },
  quizzyScheduling: {
    tag: "Web Development",
    videoPath: "QuizzyScheduling.mp4",
    date: "November 2022 - Present",
    title: "Quizzy - Scheduling",
    description:
      "I created a scheduling system for Quizzy that automatically reminds students when to study, based on their preferences and their test date.",
    embedId: null,
    href: "quizzynow.com",
    hrefText: "See Quizzy",
  },
  quizzyQuizzes: {
    tag: "Web Development",
    videoPath:
      "https://quizzynow.com/uploads/demonstration_videos/QuizzyFullQuiz.mp4",
    date: "November 2022 - Present",
    title: "Quizzy - Quizzes",
    description:
      "Quizzy features timed practice quizzes that save your progress and time, even after you close the tab.",
    embedId: null,
    href: "quizzynow.com",
    hrefText: "See Quizzy",
  },
};

function ExperienceGrid() {
  // selectedTag = what the user clicked on; defaults to "Roblox"
  const [selectedTag, setSelectedTag] = useState("Roblox");

  // Convert dictionary values into an array and filter by tag
  const filteredExperiences = Object.values(experienceData).filter(
    (exp) => exp.tag === selectedTag
  );

  // Click handlers for the tags
  const handleRobloxClick = () => {
    setSelectedTag("Roblox");
  };

  const handleWebDevClick = () => {
    setSelectedTag("Web Development");
  };

  return (
    <>
      <div className="filter-menu">
        <p>Filter</p>
        <div className="tags">
          {/* If the user is on 'Roblox' tag, let's remove inactive styling, etc. */}
          <Tag
            clickable
            inactive={selectedTag !== "Roblox"}
            onClick={handleRobloxClick}
          >
            Roblox
          </Tag>

          <Tag
            clickable
            inactive={selectedTag !== "Web Development"}
            onClick={handleWebDevClick}
          >
            Web Development
          </Tag>
        </div>
      </div>

      <section className="experience-grid" id="experience-grid">
        {filteredExperiences.map((exp, idx) => (
          <div className="individual-experience" key={idx}>
            {/* If there's an embedId, show the YoutubeEmbed; else show an image */}
            {exp.embedId && <YoutubeEmbed embedId={exp.embedId} />}
            {exp.image && (
              <img src={exp.image} className="experience-img" alt={exp.title} />
            )}
            {exp.videoPath && (
              <video alt={"A video of " + exp.name} controls>
                <source src={exp.videoPath}></source>
              </video>
            )}
            <p className="experience-date">{exp.date}</p>
            <h2 className="individual-experience-name">{exp.title}</h2>
            <p className="about-experience">{exp.description}</p>
            {exp.href && (
              <GradientButton href={exp.href} style={{ marginTop: "1rem" }}>
                {exp.hrefText}
              </GradientButton>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default ExperienceGrid;
