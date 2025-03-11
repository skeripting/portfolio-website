import "./MeetKushal.scss";

function MeetKushal() {
  const currentYear = new Date().getFullYear();
  const numYears = currentYear - 2016;
  const startYear = 2011;
  return (
    <section className="meet-kushal">
      <h3>Meet Kushal</h3>
      <img
        src="/KushalProfile2.png"
        className="kushal-pic"
        alt="Kushal, the author of the Beginner's Guide to Roblox Scripting."
      ></img>
      <p>
        Hi! I'm Kushal. I'm a 4th year computer science student that also
        happens to <strong>love</strong> scripting on Roblox! I've been playing
        games on the platform since
        {" " + startYear}, and have been scripting for the last {numYears}{" "}
        years. I have helped 1,000,000+ total views
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
        <a href="/book" style={{ textDecoration: "none", color: "#A172FF" }}>
          a book on Roblox Scripting
        </a>
        . Since 2022, I've been helping kids 7-14 learn programming and Roblox
        scripting part-time, and recently, I've been writing educational
        articles about computer science and teaching Roblox scripting on{" "}
        <a href="/blog" style={{ textDecoration: "none", color: "#A172FF" }}>
          my blog
        </a>
        .
      </p>
    </section>
  );
}

export default MeetKushal;
