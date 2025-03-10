import GradientButton from "../../components/GradientButton/GradientButton";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import TestimonialSticker from "../../components/TestimonialSticker/TestimonialSticker";
import "./Book.scss";

function Book() {
  const currentYear = new Date().getFullYear();
  const numYears = currentYear - 2016;
  const startYear = 2011;
  return (
    <div className="book-page">
      <div className="background-cover">
        <div className="home-flex">
          <div className="home-hero-left">
            <h4 className="hello-text">The Beginner's Guide to</h4>
            <div className="book-left-cover">
              <h1>Roblox Scripting Book</h1>
              <p>
                If you've ever dreamt of scripting your own Roblox games, check
                out my book, The Beginner's Guide to Roblox Scripting.
              </p>
              <div className="buttons-flex">
                <GradientButton href="https://kushaltimsina.com/book_urls/BeginnersGuideToScriptingPreview.pdf">
                  Take a peek
                </GradientButton>
                <GradientButton href="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010">
                  Get your copy
                </GradientButton>
              </div>
            </div>
          </div>
          <TestimonialSticker
            author="Reader"
            subtitle='"Best investment! I especially loved the Admin Commands project."'
            right="30%"
            top="15%"
          ></TestimonialSticker>
          <img
            id="Book"
            src="/bookfrontcover.jpg"
            alt="Kushal's book, Unofficial Beginner's Guide to Roblox Scripting"
            width="333px"
            height="auto"
            style={{
              borderRadius: "20px",
              position: "absolute",
              aspectRatio: "0.759375",
              left: "65%",
              filter: "drop-shadow(0px 3px 6px rgb(0, 0, 0, 0.16))",
              transform: "translateZ(0)",
            }}
          ></img>
        </div>
        <section className="about-book">
          <InfoBlock
            title="Learn Faster with Vocabulary Lists"
            text="After each chapter, you'll find a sleek vocabulary list that gathers all the key terms in one place for easy reference. Plus, every word includes plenty of examples to help you understand and remember them faster."
            buttonText="Get your copy"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_vocab.jpg"
            imageOnLeft={false}
            testimonial={
              <TestimonialSticker
                author="E-Book Reader"
                subtitle={`"Goes above and beyond than the other books I've seen around here in kindle."`}
                isRelative
                width="70%"
                margin-bottom="3rem"
              ></TestimonialSticker>
            }
          />
          <InfoBlock
            title="Annotated Code to Help You Understand"
            text="The book features clear, annotated code and straightforward explanations that simplify Roblox scripting. Whether you're new to programming or just starting out, you'll easily understand the basics and quickly advance your coding skills. This approach makes learning Roblox scripting fun and accessible, helping you build your games with confidence!"
            buttonText="Get your copy"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_4.jpeg"
            imageOnLeft={true}
          />
          <InfoBlock
            title="Practice Quizzes, Vocabulary and Learning Exercises"
            text="Unlock your full potential in Roblox scripting with a variety of fun quizzes, essential vocabulary lists, and interactive exercises. Every feature is thoughtfully designed to strengthen your understanding and help you master scripting quickly and effectively. Dive in and take your skills to the next level!"
            buttonText="Get your copy"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_3.jpg"
            imageOnLeft={false}
            testimonial={
              <TestimonialSticker
                author="E-Book Reader"
                subtitle={`"So far it's been a fun read. Quite satisfied with the product so far."`}
                isRelative
                width="70%"
                margin-bottom="3rem"
              ></TestimonialSticker>
            }
          />
          <InfoBlock
            title="Transform Your Knowledge into Admin Commands!"
            text="In Chapter 10, you'll complete your journey with an exciting hands-on project: a step-by-step guide to creating your very own Admin Commands in Roblox. This project combines all the skills and techniques you've learned, letting you apply your knowledge and build something truly awesome!"
            buttonText="Get your copy"
            imageSrc="/book_admin.jpeg"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageOnLeft={true}
          />
        </section>
        <section className="meet-author">
          <InfoBlock
            title="Meet the Author, Kushal"
            text={
              <p>
                Hi! I'm Kushal. I'm a 4th year computer science student that
                also happens to <strong>love</strong> scripting on Roblox! I've
                been playing games on the platform since
                {" " + startYear}, and have been scripting for the last{" "}
                {numYears} years. I have helped 1,000,000+ total views
                <a
                  href="https://www.youtube.com/channel/UCFHJ80WbXDJ7ujsMKa1LHtw/"
                  style={{ textDecoration: "none", color: "#A172FF" }}
                >
                  {" "}
                  learn to script on YouTube
                </a>{" "}
                since 2016, and have{" "}
                <a
                  href="/experience"
                  style={{ textDecoration: "none", color: "#A172FF" }}
                >
                  released my own game on Roblox
                </a>
                , played 1,600,000+ times. I have also written{" "}
                <a
                  href="/book"
                  style={{ textDecoration: "none", color: "#A172FF" }}
                >
                  a book on Roblox Scripting
                </a>
                . Since 2022, I've been helping kids 7-14 learn programming and
                Roblox scripting part-time, and recently, I've been writing
                educational articles about computer science and teaching Roblox
                scripting on{" "}
                <a
                  href="/blog"
                  style={{ textDecoration: "none", color: "#A172FF" }}
                >
                  my blog
                </a>
                .
              </p>
            }
            buttonText="Get your copy"
            imageSrc="/instagramPhoto.jpg"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageOnLeft={false}
          />
        </section>
      </div>
    </div>
  );
}

export default Book;
