import GradientButton from "../../components/GradientButton/GradientButton";
import GradientText from "../../components/GradientText/GradientText";
import KitForm from "../../components/KitForm/KitForm";
import Sticker from "../../components/Sticker/Sticker";
import TestimonialStack from "../../components/TestimonialStack/TestimonialStack";
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
                real-world problems. I'm also passionate about teaching Roblox
                scripting, helping others bring their ideas to life and
                empowering the next generation of developers.
              </p>

              <div className="buttons-flex">
                <GradientButton href="mailto:kushal@kushaltimsina.com">
                  Email me
                </GradientButton>
                <GradientButton href="/blog">Kushal Writes</GradientButton>
              </div>
            </div>
          </div>
          <div className="home-hero-right">
            <img
              className="kushal-profile"
              src="/KushalProfile.jpg"
              alt="Kushal Timsina"
            ></img>
            <Sticker
              id="BattleManiaSticker"
              left="-25%"
              top="-25%"
              header="BattleMania"
              subtitle="1,500,000+ Plays"
              icon="/BattleManiaLogoHD.png"
              ctaHref="https://www.roblox.com/games/14945130763/BattleMania"
            ></Sticker>
            <Sticker
              id="QuizzySticker"
              left="-20%"
              top="80%"
              width="157px"
              height="220px"
              logoWidth="127px"
              logoHeight="127px"
              header="Quizzy"
              subtitle="700+ Users"
              icon="/QuizzyIconFull.png"
              ctaHref="https://quizzynow.com/"
            ></Sticker>
            <a href="/book">
              <img
                id="Book"
                src="/bookfrontcover.jpg"
                alt="Kushal's book, Unofficial Beginner's Guide to Roblox Scripting"
                width="243px"
                height="320px"
                style={{
                  borderRadius: "20px",
                  position: "absolute",
                  left: "65%",
                  filter: "drop-shadow(0px 3px 6px rgb(0, 0, 0, 0.16))",
                  transform: "translateZ(0)",
                }}
              ></img>
            </a>
          </div>
        </div>
        <div className="sections">
          <div className="kit-form-cover">
            <KitForm></KitForm>
          </div>

          <section id="how-can-i-help">
            <h1>How Can I Help You?</h1>
            <div className="showcase">
              <Sticker
                className="clickable-sticker"
                position="relative"
                min-width="390px"
                min-height="458px"
                logoWidth="239px"
                logoHeight="239px"
                header="Learn Roblox Scripting"
                subtitle="Learn how to script on Roblox based on my
9+ years of scripting and teaching."
                icon="/VampireTransformation.png"
                ctaText="Get started"
                ctaHref="https://www.youtube.com/channel/UCFHJ80WbXDJ7ujsMKa1LHtw/"
              ></Sticker>
              <Sticker
                className="clickable-sticker"
                position="relative"
                min-width="390px"
                min-height="458px"
                logoWidth="239px"
                logoHeight="239px"
                header="Learn Computer Science"
                subtitle="Learn computer science concepts from
my blog."
                icon="/MergeSortPN.png"
                ctaText="Get started"
                ctaHref="https://kushaltimsina.com/blog/category/computer-science/"
              ></Sticker>
              <Sticker
                className="clickable-sticker"
                position="relative"
                min-width="390px"
                min-height="458px"
                logoWidth="239px"
                logoHeight="239px"
                header="Get in Touch"
                subtitle="Send me an email at kushal@kushaltimsina.com"
                icon="/KushalProfile.jpg"
                ctaText="Email me"
                ctaHref="mailto:kushal@kushaltimsina.com"
              ></Sticker>
            </div>
          </section>
          <section id="experience">
            <h1>My Experience</h1>
            <div className="showcase" id="my-experience-preview">
              <a
                className="experience-preview"
                href="https://www.roblox.com/games/14945130763/BattleMania"
              >
                <img
                  src="/BattleManiaThumbnail.png"
                  alt="BattleMania Thumbnail"
                ></img>
                <p className="experience-caption">
                  Since August 2023, 1.4M+ visits
                </p>
                <h2 className="experience-title">BattleMania</h2>
                <p className="experience-description">
                  BattleMania is my Roblox battle simulation game, where you can
                  select troops and fight them against each other. There are
                  over 70 obtainable troops in the game.
                </p>
              </a>
              <a
                className="experience-preview"
                href="https://www.roblox.com/games/15423741735/UPD-8-Bladers-Rebirth"
              >
                <img
                  src="/BladersRebirth.png"
                  alt="Roblox Blader's Rebirth"
                ></img>
                <p className="experience-caption">
                  May 2024 - November 2024, 40M+ visits
                </p>
                <h2 className="experience-title">Bladers: Rebirth</h2>
                <p className="experience-description">
                  I contributed as a gameplay engineer to Bladers: Rebirth, a
                  Roblox Beyblade game with 40+ million visits. My work included
                  developing a Quest system, adding interactive trainers to
                  enhance immersion, and fixing critical bugs to improve overall
                  gameplay experience.
                </p>
              </a>
              <a className="experience-preview" href="/book">
                <img
                  src="/book_pic_4.jpeg"
                  alt="Beginner's Guide to Roblox Scripting Book"
                ></img>
                <p className="experience-caption">Since Summer 2023</p>
                <h2 className="experience-title">
                  Beginner's Guide to Roblox Scripting
                </h2>
                <p className="experience-description">
                  I authored a book to help new scripters learn Roblox
                  scripting. The book has learning exercises, vocabulary lists,
                  quizzes, and tips on how to remember scripting related
                  concepts.
                </p>
              </a>
            </div>
            <div className="see-all-exp">
              <a href="/experience">
                See all Experience{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
                    fill="#160042"
                  />
                </svg>
              </a>
            </div>
          </section>
          <section id="book-section">
            <div className="book-cover">
              <img src="/bookfrontcover.jpg" alt="Book front cover"></img>
              <div className="book-blurb">
                <h2>My Book</h2>
                <p>
                  If you've ever dreamt of scripting your own games, The
                  Beginner's Guide to Roblox Scripting book is your perfect
                  starting point! My easy-to-follow book breaks down the
                  fundamentals of Roblox scripting and includes hands-on
                  practice assignments, essential vocabulary lists, fun quizzes,
                  and exciting challenges. Whether you're just starting out or
                  looking to sharpen your skills, this guide makes learning
                  Roblox scripting simple and enjoyable.
                </p>
                <GradientButton href="/book">Get your copy</GradientButton>
              </div>
            </div>
          </section>
          <section className="my-impact">
            <h1>My Teaching Impact</h1>
            <TestimonialStack></TestimonialStack>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
