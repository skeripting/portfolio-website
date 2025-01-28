import React, { useState } from "react";
import Tag from "../Tag/Tag";
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import "./ExperienceGrid.scss";
import GradientButton from "../GradientButton/GradientButton";
import TestimonialSticker from "../TestimonialSticker/TestimonialSticker";

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
    href: "https://www.roblox.com/games/14945130763/BattleMania",
    hrefText: "Play BattleMania",
  },
  bladersRebirth: {
    tag: "Roblox",
    image: "BladersRebirth.png",
    date: "May 2024 - November 2024, 45M+ visits",
    title: "Bladers: Rebirth",
    description:
      "I contributed as a gameplay engineer to Bladers: Rebirth, a Roblox Beyblade game with 40+ million visits. My work included developing a Quest system, adding interactive trainers to enhance immersion, and fixing critical bugs to improve overall gameplay experience.",
    embedId: null,
    href: "https://www.roblox.com/games/15423741735/UPD-8-Bladers-Rebirth",
    hrefText: "Play Bladers: Rebirth",
  },
  beginnersGuide: {
    tag: "Roblox",
    image: "book_pic_cropped_for_experience.png",
    date: "Since Summer 2023",
    title: "Beginner's Guide to Roblox Scripting",
    description:
      "I authored a book to help new scripters learn Roblox scripting. The book has learning exercises, vocabulary lists, quizzes, and tips on how to remember scripting related concepts.",
    embedId: null,
  },
  scriptingYouTube: {
    tag: "Roblox",
    image: "scriptingYoutube.png",
    date: "Since 2016, 950K+ lifetime views",
    title: "script_ing YouTube",
    description:
      "Since I was very little, I wanted to learn Roblox scripting and teach it to the world. So, I started a channel, where I share my knowledge for free, contributing to the growth of new and existing Roblox games.",
    embedId: null,
  },
  vampireTestimonial: {
    tag: "Roblox",
    testimonial:
      '"I really love how it looks so far! Definitely like exact mechanic I had in mind"',
  },
  vampireSystem: {
    tag: "Roblox",
    image: null,
    date: "November 2024-2025",
    title: "Vampire System",
    description:
      "I had the pleasure of working on a vampire system for a client, where a player may transform into a vampire, bite targets, and drag them, as their health gets sapped out. The target may struggle out of the bite.",
    embedId: "d-wZW8-sdXQ",
  },
  horrorGame: {
    tag: "Roblox",
    image: null,
    date: "August 2024",
    title: "Horror Game",
    description:
      "A client reached out, asking me to script a horror game system, where entities are alerted according to the volume of players using the Roblox voice chat. Within a few days, I had this demo prepared. It was lots of fun to code!",
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
      "As an addendum to the gun system commission, I scripted different types of grenades, with intricate mechanics, such as pre-emptively cooking the grenade before the explosion.",
    embedId: "CYqRAwgR8nI",
  },
  levgruGunSystem: {
    tag: "Roblox",
    image: null,
    date: "January 2023 - March 2024",
    title: "LEVGRU Gun System",
    description:
      "I worked closely with a client for over 1 year on a 3rd person intricate gun system, that supports mechanics such as combat diving, heat sensing scopes, gun recoil, fall damage, and much more.",
    embedId: "fPXAqMBkumQ",
  },
  levgruGunSystemTestimonial: {
    tag: "Roblox",
    testimonial:
      "Thank you so much for these updates, not only do they look really impressive but I can see that you're also being very thorough which makes me super happy.",
  },
  elementalAdventures: {
    tag: "Roblox",
    image: null,
    date: "2019-2021",
    title: "Elemental Adventures",
    description:
      "Determined to continue to create a really awesome turn-based RPG game on Roblox, I began Elemental Adventures, a project that continued for 2+ years before I put it in hiatus to focus on my studies. Elemental Adventures is a turn-based RPG game, which aims to blend Pokemon, AQW, Wizard101, and Avatar together.",
    embedId: "XHEqeYcdFWY",
  },
  pokemonZygarde: {
    tag: "Roblox",
    image: null,
    date: "2017-2018",
    title: "Pokemon: Creation of Zygarde",
    description:
      "I was the founder and owner of a game called Pokemon: Creation of Zygarde, which aimed to bring animated 3D models of Pokemon to the platform. At the time, the best Pokemon rendering technology on Roblox was with animated sprites. I was the solo scripter of the entire project, supported by 100,000+ people, which was never released, due to copyright issues. I was 14 years old at the time. To achieve animated meshes in Roblox, which didn't support mesh deformation at the time, I used a frame by frame mesh rendering method, where we'd split the animation into frames, and manipulate them in Roblox using CFrames.",
    embedId: "cjitqVwvE0M",
  },
  dragonBallBeyond: {
    tag: "Roblox",
    image: null,
    date: "November 2016",
    title: "Dragon Ball: Beyond Evolution",
    description:
      "Dragon Ball: Beyond Evolution was my first game that I created when I was 12 years old in 2016, complete with a power level system, flying, health bars, transformations, and combat. I had been learning scripting for a few months, and I put it all to use.",
    embedId: "6zmakChYH2w",
  },
  portfolio: {
    tag: "Web Development",
    image: "portfolioHero.png",
    date: "November 2024 - Present",
    title: "Portfolio",
    description:
      "I created this website using React JS for the frontend. I used Figma to design it.",
    embedId: null,
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
  automatedSecuritySystem: {
    tag: "C",
    image: "automatedSecuritySystem.png",
    date: "April 2023 - May 2023",
    title: "Automated Security System",
    description:
      "Our final project for Programming Embedded Microcontrollers was an automated security system, developed in C with approximately 4,000 lines of code. The system featured an RFID scanner to read keycards, sensors to detect abnormal light levels (such as intruders using flashlights), object proximity detection, alarm activation, and tampering detection using an accelerometer.",
    embedId: null,
    href: "https://www.linkedin.com/in/kushal-timsina/details/education/897559412/multiple-media-viewer/?profileId=ACoAADLVZooBleQJ4yZfY73zvMEew12dJF2TJ3k&treasuryMediaId=1635545203290",
    hrefText: "See the Documentation",
  },
  rcCar: {
    tag: "Python",
    date: "November 2023 - December 2024",
    title: "Remote Controlled Racecar",
    description:
      "Our final project for our Operating Systems class was an RC car that drove itself. The car had two modes: Manual and Automated. In Manual mode, the car would open up a web server, and you'd be able to control it right from your phone. In Automatic mode, it would follow a black tape path and intelligently avoid obstacles with an ultraviolet sensor.",
    embedId: "hezVsyBzr60",
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

  const handleCClick = () => {
    setSelectedTag("C");
  };

  const handlePythonClick = () => {
    setSelectedTag("Python");
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

          <Tag clickable inactive={selectedTag !== "C"} onClick={handleCClick}>
            C
          </Tag>

          <Tag
            clickable
            inactive={selectedTag !== "Python"}
            onClick={handlePythonClick}
          >
            Python
          </Tag>
        </div>
      </div>

      <section className="experience-grid" id="experience-grid">
        {filteredExperiences.map((exp, idx) => (
          <div className="individual-experience" key={idx}>
            {/* If there's an embedId, show the YoutubeEmbed; else show an image */}
            {exp.testimonial && (
              <TestimonialSticker
                subtitle={exp.testimonial}
                author="Client"
                isRelative
              ></TestimonialSticker>
            )}
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
