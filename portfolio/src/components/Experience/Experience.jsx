import GradientButton from "../GradientButton/GradientButton";
import Tag from "../Tag/Tag";
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import "./Experience.scss";

function Experience(props) {
  return (
    <div className="experience">
      <div className="experience-left">
        <div className="tags">
          {props.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <h2 className="experience-title">{props.name}</h2>
        <p className="experience-desc">{props.desc}</p>
        <GradientButton>{props.btnText}</GradientButton>
      </div>
      <div className="experience-right">
        {props.video && <YoutubeEmbed embedId={props.video}></YoutubeEmbed>}
        {props.videoPath && (
          <video
            width="517"
            height="285"
            alt={"A video of " + props.name}
            controls
          >
            <source src={props.videoPath}></source>
          </video>
        )}
        {props.img && (
          <img src={props.img} alt={"An image of " + props.name}></img>
        )}
      </div>
    </div>
  );
}

export default Experience;
