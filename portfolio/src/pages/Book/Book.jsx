import GradientButton from "../../components/GradientButton/GradientButton";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import TestimonialSticker from "../../components/TestimonialSticker/TestimonialSticker";
import "./Book.scss";
import { Helmet } from "react-helmet-async";

function Book() {
  const currentYear = new Date().getFullYear();
  const numYears = currentYear - 2016;
  const startYear = 2011;
  return (
    <div className="book-page">
      <Helmet>
        <title>The Beginner's Guide to Roblox Scripting Book</title>
      </Helmet>
      <div className="background-cover">
        <div className="home-flex">
          <div className="home-hero-left">
            <h4 className="hello-text">The Beginner's Guide to</h4>
            <div className="book-left-cover">
              <h1>Roblox Scripting Book</h1>
              <p>
                If you've ever felt like “I want to learn Roblox scripting, but
                it's really confusing”, the Beginner's Guide to Roblox Scripting
                is made for you. The book explains Roblox scripting concepts in
                an easy to understand way that doesn't leave you lost after
                every step.
              </p>
              <div className="buttons-flex">
                {/*<GradientButton href="https://kushaltimsina.com/book_urls/BeginnersGuideToScriptingPreview.pdf">
                  Take a peek
                </GradientButton>*/}
                <GradientButton href="https://buy.stripe.com/00gbKFf095iFan69AT">
                  Buy paperback (US only)
                </GradientButton>
                <GradientButton href="https://www.amazon.com/dp/B0CH3L33CV/ref=mp_s_a_1_1">
                  Buy E-Book
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
            text="Does it feel like scripters talk a different language? This book will help you learn to speak the language of scripters, with a vocabulary list at the end of each chapter. Plus, every word includes plenty of examples to help you understand and remember them faster."
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
            text="Have you ever watched a tutorial and felt left behind? Lua U can seem like a very difficult language to understand for beginners. What in the world is a boolean variable!?! Luckily for you, with my 9 years of experience teaching scripting both online and in-person, I annotated every single line of code in this book with an easy to understand description of what it's doing."
            buttonText="Get your copy"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_4.jpeg"
            imageOnLeft={true}
          />
          <InfoBlock
            title="Practice Quizzes, Vocabulary and Learning Exercises"
            text="Does it ever feel like you're just watching tutorial after tutorial on YouTube and not learning anything? Don't waste your time! I wrote down quizzes and learning exercises inside of every chapter, so you can jump into Roblox Studio and immediately practice what you've learned."
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
            text="It sucks to spend months watching tutorials and to not be able to script without them. The last chapter of this book shows you how you can script your own admin commands, line by line. The best part? The tutorial uses everything you learned in the previous chapters. So, you will not only be able to script your own Admin Commands, but will also be able to explain all the lines of code to your friends and family."
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
              </p>
            }
            buttonText="Get your copy"
            imageSrc="/instagramPhoto.jpg"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageOnLeft={false}
          />
        </section>
        <div className="book-faq">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div className="book-faq-cover">
            <div className="book-faq-content">
              <p className="question">Q: What will I learn in the book?</p>
              <p className="answer">
                A: Just about everything you need to get started scripting.
                <br></br>
                <br></br>Some of the topics are: <br></br>✅ Variables
                <br></br>✅ Functions <br></br>✅ If statements <br></br>✅ For
                loops <br></br>
                <br></br>And a lot more! 😊<br></br>
                <br></br>The beauty of this book is in its explanations. While
                most people will explain scripting concepts in the most
                technical way possible, the book explains concepts in a way
                that's easy to learn.
              </p>
            </div>
            <div className="book-faq-content">
              <p className="question">Q: Who is the book written for?</p>
              <p className="answer">
                A: The book is written for <strong>absolute beginners</strong>.
                So, if you feel like you don't know anything about Roblox
                scripting, and want to learn, it's <strong>perfect</strong> for
                you.
              </p>
            </div>
            <div className="book-faq-content">
              <p className="question">
                Q: This book only ships to US and Canada?
              </p>
              <p className="answer">
                A: Yeah, there's not much we can do about that because of
                shipping costs. Sorry about that! :(
              </p>
            </div>
            <div className="book-faq-content">
              <p className="question">
                Q: Okay okay! I'm ready to buy! Where's the link?
              </p>
              <p className="answer">
                A:{" "}
                <a
                  style={{ textDecoration: "none", color: "#A172FF" }}
                  href="https://buy.stripe.com/00gbKFf095iFan69AT"
                >
                  Click me for the paperback version (US only)!
                </a>
                <a
                  style={{ textDecoration: "none", color: "#A172FF" }}
                  href="https://www.amazon.com/Unofficial-Beginners-Guide-Roblox-Scripting-ebook/dp/B0CH3L33CV/ref=mp_s_a_1_1?crid=1RFDJJOQ2JQYK&dib=eyJ2IjoiMSJ9.hb5foyEjBaBpp_XytUCyGtLCNc27P-jL1Q7u9GEc-BOEgMbNsNosFLcm6Ps-ayYMbiIY7unPJKzG-k9HeHk3ThUGKmEPkxaMycnb4C83oC9d04HyQQxpvCs6Ob7PKdpy8YCjH3reJNBwNMGxcGSoHsHwy5uw9ShHgOwrSXQYXV3YTjCUE49ktp_w1qcGThGrm196FuYV9GcLfdEzflrukA.Fa5_ElMgygP8J3UG7_99Nr-S2qPzHZDxV4aZjVwvwuY&dib_tag=se&keywords=beginners+guide+to+roblox+scripting&qid=1742831155&sprefix=beginners+guide+to+roblox+scripting%2Caps%2C107&sr=8-1"
                >
                  Click me for the E-book version (all countries)!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
