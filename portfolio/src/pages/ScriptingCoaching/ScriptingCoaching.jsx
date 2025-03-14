import MeetKushal from "../../components/MeetKushal/MeetKushal";
import PlanCard from "../../components/PlanCard/PlanCard";
import TestimonialStack from "../../components/TestimonialStack/TestimonialStack";
import TestimonialSticker from "../../components/TestimonialSticker/TestimonialSticker";
import YoutubeEmbed from "../../components/YouTubeEmbed/YouTubeEmbed";
import "./ScriptingCoaching.scss";

function ScriptingCoaching() {
  return (
    <div className="coaching-page">
      <div className="background-cover">
        <div className="testimonials" id="testimonials-top">
          <TestimonialSticker
            author="Client"
            subtitle={
              '"Thanks bro was really well and clear how you explained everything 🙂"'
            }
            isRelative
            width="70%"
            margin-bottom="3rem"
          ></TestimonialSticker>
          <TestimonialSticker
            author="Client"
            subtitle={
              '"5/5. You brilliantly answered any and all of my questions, while giving examples and practical use examples. I\'ll definitely will be purchasing some more time here very soon"'
            }
            isRelative
            width="70%"
            margin-bottom="3rem"
          ></TestimonialSticker>
        </div>
        <div className="coaching-top-cover">
          <h1>1-1 Roblox Scripting Coaching</h1>
          <p className="coaching-subtitle">
            Hop on a call with me and get personalized scripting guidance,
            master essential skills, and become the scripter of your dreams -
            faster than you ever thought possible.
          </p>
          <h2>Stuck on Learning Scripting?</h2>
          <p>
            Roblox Scripting can be really confusing when you're trying to learn
            it on your own.<br></br>
            <br></br>When you have a specific problem, it can seem like there's
            no one that can help you.
          </p>
          <ul>
            <li>
              Do you feel lost about what to learn at your level so you can make
              your dream Roblox games?
            </li>
            <li>
              Are you confused trying to understanding Roblox scripting
              documentation?
            </li>
            <li>
              Are you stuck trying to understand scripting concepts that are
              preventing you from making a better game?
            </li>
            <li>
              Is your dream game still on hold because you can't turn your
              creative ideas into working code?
            </li>
            <li>
              Are people in online communities bashing on you for not knowing
              how to script?
            </li>
          </ul>
          If this sounds like you, keep reading.
          <div className="images">
            {/*<YoutubeEmbed embedId="JDvW2GvI6T4"></YoutubeEmbed>*/}
            <YoutubeEmbed embedId="aLpLOlnklIw"></YoutubeEmbed>
            <YoutubeEmbed embedId="XHEqeYcdFWY"></YoutubeEmbed>
          </div>
          <h2>Imagine if You Could</h2>
          <ul>
            <li>Confidently code any feature you dream up.</li>
            <li>
              Show off your amazing updates to a growing community of fans that
              love and support your creations
            </li>
            <li>
              Turn your passion for game creation into a reality—no more
              half-finished projects gathering dust
            </li>
          </ul>
          <h2>My 1-on-1 Roblox Scripting Sessions Include:</h2>
          <div className="feature">
            <div className="feature-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7333 24L5.1333 16.4L7.0333 14.5L12.7333 20.2L24.9666 7.96667L26.8666 9.86667L12.7333 24Z"
                  fill="black"
                />
              </svg>
              <h3>1-1 Coaching Sessions</h3>
            </div>
            <p>
              No more guesswork. Get customized lessons so you can focus on the
              exact skills you need to quickly level up.
            </p>
          </div>
          <div className="feature">
            <div className="feature-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7333 24L5.1333 16.4L7.0333 14.5L12.7333 20.2L24.9666 7.96667L26.8666 9.86667L12.7333 24Z"
                  fill="black"
                />
              </svg>
              <h3>Hands on Live Coaching</h3>
            </div>
            <p>
              You'll receive real-time feedback on your scripts—saving you hours
              of trial and error and helping you see faster results.
            </p>
          </div>
          <div className="feature">
            <div className="feature-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7333 24L5.1333 16.4L7.0333 14.5L12.7333 20.2L24.9666 7.96667L26.8666 9.86667L12.7333 24Z"
                  fill="black"
                />
              </svg>
              <h3>Beginner-Friendly Explanations</h3>
            </div>
            <p>
              Whether you're a total newbie or looking to refine advanced
              techniques, you'll gain clarity without feeling overwhelmed.
            </p>
          </div>
          <div className="feature">
            <div className="feature-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7333 24L5.1333 16.4L7.0333 14.5L12.7333 20.2L24.9666 7.96667L26.8666 9.86667L12.7333 24Z"
                  fill="black"
                />
              </svg>
              <h3>Game Design Guidance</h3>
            </div>
            <p>
              Go beyond coding and learn how to create fun, engaging experiences
              that players will love—and keep coming back for.
            </p>
          </div>
        </div>
        <div className="what-is-online-coaching">
          <h1>What in the World is Online Coaching?</h1>
          <h3>This is you without Kushal.</h3>
          <img
            src="withoutMe.png"
            alt="Trying to learn Roblox scripting without Kushal."
          ></img>
          <h3>This is you with Kushal.</h3>
          <img
            src="withMe.png"
            alt="Trying to learn Roblox scripting with Kushal."
          ></img>
          <p className="caption">
            Lots of people waste insane amounts of time trying to do things
            solo. <br></br>
            <br></br>Having an experienced coach supercharges your learning.
          </p>
          <MeetKushal></MeetKushal>
        </div>
        <div className="testimonials">
          <TestimonialSticker
            author="Fiverr Client"
            subtitle={
              '"Amazing seller! Very knowledgeable and was willing to work with me through a very confusing problem that I first contacted him about regarding my game."'
            }
            isRelative
            width="70%"
            margin-bottom="3rem"
          ></TestimonialSticker>
          <TestimonialSticker
            author="Client"
            subtitle={"“You need a job done right, come to script_ing!”"}
            isRelative
            width="70%"
            margin-bottom="3rem"
          ></TestimonialSticker>
          <TestimonialSticker
            author="Client"
            subtitle={
              "\"bro no joke you're like one of the best scripters I've met. no wonder you're in cs\""
            }
            isRelative
            width="70%"
            margin-bottom="3rem"
          ></TestimonialSticker>
        </div>
        <div className="plans">
          <PlanCard
            name="Premium Scripting Coaching"
            price="100"
            features={[
              "Ask Unlimited Questions During Call",
              "Beginner-Friendly Explanations",
              "Notes Included During Call",
              "Recorded Private Call",
              "Schedule Immediately After Purchase",
            ]}
          ></PlanCard>
        </div>

        <div className="coaching-faq">
          <h1>Frequently Asked Questions (FAQ)</h1>
          <div className="coaching-faq-cover">
            <div className="coaching-faq-content">
              <p className="question">
                Q: What will I learn in a coaching session?
              </p>
              <p className="answer">
                A: I'll teach you whatever you need help with! Each session is
                completely personalized to your goals. <br></br>
                <br></br>In the past, I've helped students: <br></br>✅ Build
                combat systems live <br></br>✅ Fix tricky debugging issues{" "}
                <br></br>✅ Learn AI scripting concepts <br></br>✅ Optimize
                their game for better performance <br></br>
                <br></br>Whatever you're working on, I'm here to make it easier
                for you! 😊
              </p>
            </div>
            <div className="coaching-faq-content">
              <p className="question">Q: How do I book a session?</p>
              <p className="answer">
                A: Booking is super simple! Just follow these steps:{" "}
                <ol>
                  <li>Fill out a short form to tell me about your goals.</li>
                  <li>Make a payment to confirm your session.</li>
                  <li>Choose a time slot that works for you.</li>
                </ol>
                That's it! Once booked, you'll receive a confirmation email with
                all the details.
              </p>
            </div>
            <div className="coaching-faq-content">
              <p className="question">
                Q: I want to script X, but I don't know how. Can you help?
              </p>
              <p className="answer">
                A: Of course! I'll share my screen and walk you through it step
                by step. You'll not only get the script working, but you'll also
                understand why and how it works—so you can do it yourself next
                time! A recorded video of our private call will also be sent to
                you as a bonus, so that you can revise it as many times as you
                want.
              </p>
            </div>
            <div className="coaching-faq-content">
              <p className="question">
                Q: Do I need prior experience in coding?
              </p>
              <p className="answer">
                A: Nope! Whether you're a complete beginner or already know a
                little Lua, I'll tailor the session to your skill level. My goal
                is to make scripting easy and fun for you! 🚀
              </p>
            </div>
            <div className="coaching-faq-content">
              <p className="question">Q: How long is each session?</p>
              <p className="answer">
                A: Each session lasts 1 hour and is held via Discord, Zoom, or
                Google Meet. Need more time? You can always book extra sessions
                if needed!
              </p>
            </div>
            <div className="coaching-faq-content">
              <p className="question">Q: How much does it cost?</p>
              <p className="answer">
                A: Each 1-hour session costs $100. This is a premium coaching
                service where you get direct, personalized guidance from an
                experienced Roblox developer.
              </p>
            </div>
            <div className="coaching-faq-content">
              <p className="question">Q: Can I book multiple sessions?</p>
              <p className="answer">
                A: Yes! Many students book weekly coaching to keep progressing.
                If you want ongoing help, feel free to schedule as many sessions
                as you'd like! 😊
              </p>
            </div>
          </div>
          <h1>My Teaching Impact</h1>
          <TestimonialStack></TestimonialStack>
        </div>
      </div>
    </div>
  );
}

export default ScriptingCoaching;
