import GradientButton from "../../components/GradientButton/GradientButton";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import "./Book.scss";

function Book() {
  return (
    <div className="book-page">
      <div className="background-cover">
        <div className="home-flex">
          <div className="home-hero-left">
            <h4 className="hello-text">The Beginner's Guide to</h4>
            <div className="book-left-cover">
              <h1>Roblox Scripting Book</h1>
              <p>
                If you've ever dreamt of scripting your own games, The
                Beginner's Guide to Roblox Scripting book is your perfect
                starting point! This easy-to-follow book breaks down the
                fundamentals of Roblox scripting and includes hands-on practice
                assignments, essential vocabulary lists, fun quizzes, and
                exciting challenges. Whether you're just starting out or looking
                to sharpen your skills, this guide makes learning Roblox
                scripting simple and enjoyable.
              </p>
              <div className="buttons-flex">
                <GradientButton href="#">Take a peek</GradientButton>
                <GradientButton href="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010">
                  Get your copy
                </GradientButton>
              </div>
            </div>
          </div>
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
            buttonText="Order now"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_vocab.jpg"
            imageOnLeft={false}
          />
          <InfoBlock
            title="Annotated Code to Help You Understand"
            text="The book features clear, annotated code and straightforward explanations that simplify Roblox scripting. Whether you're new to programming or just starting out, you'll easily understand the basics and quickly advance your coding skills. This approach makes learning Roblox scripting fun and accessible, helping you build your games with confidence!"
            buttonText="Order now"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_4.jpeg"
            imageOnLeft={true}
          />
          <InfoBlock
            title="Practice Quizzes, Vocabulary and Learning Exercises"
            text="Unlock your full potential in Roblox scripting with a variety of fun quizzes, essential vocabulary lists, and interactive exercises. Every feature is thoughtfully designed to strengthen your understanding and help you master scripting quickly and effectively. Dive in and take your skills to the next level!"
            buttonText="Order now"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageSrc="/book_pic_3.jpg"
            imageOnLeft={false}
          />
          <InfoBlock
            title="Transform Your Knowledge into Admin Commands!"
            text="In Chapter 10, you'll complete your journey with an exciting hands-on project: a step-by-step guide to creating your very own Admin Commands in Roblox. This project combines all the skills and techniques you've learned, letting you apply your knowledge and build something truly awesome!"
            buttonText="Order now"
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
                Kushal Timsina is a passionate game developer, software
                engineer, author, and educator committed to empowering the next
                generation of creators. Currently pursuing a degree in Computer
                Science, Kushal specializes in Roblox game development,
                full-stack web development, and instructional programming. With
                years of hands-on experience, he has authored numerous YouTube
                guides, live classes, online courses, and in-person educational
                sessions that simplify complex coding concepts, making Roblox
                scripting accessible to aspiring developers of all ages.{" "}
                <br></br>
                <br></br>Kushal believes in the transformative power of
                education and strives to make learning coding both easy and
                enjoyable. Whether you're a beginner eager to dive into Roblox
                scripting or an experienced developer seeking deeper insights,
                his work provides invaluable knowledge and practical skills to
                help you succeed. His dedication to teaching and continuous
                learning has earned him a trusted reputation in the game
                development and programming communities.<br></br>
                <br></br>Join Kushal on your coding journey and turn your game
                ideas into reality with his expert guidance and support!
              </p>
            }
            buttonText="Order book"
            imageSrc="/KushalProfile2.png"
            buttonHref="https://www.barnesandnoble.com/w/unofficial-beginners-guide-to-roblox-scripting-kushal-timsina/1144181010"
            imageOnLeft={false}
          />
        </section>
      </div>
    </div>
  );
}

export default Book;
