import Sticker from "../Sticker/Sticker";
import "./TestimonialSticker.scss";

export default function TestimonialSticker(props) {
  return (
    <Sticker
      subtitle={props.subtitle}
      header={props.author}
      min-width="455px"
      min-height="144px"
      width={props.width ? props.width : props.isRelative && "100%"}
      left={props.left}
      top={props.top}
      right={props.right}
      margin-bottom={props["margin-bottom"]}
      icon={props.icon}
      position={props.isRelative ? "relative" : "absolute"}
      className={`testimonial-sticker testimonial-sticker-${
        props.isRelative ? "relative" : "absolute"
      }`}
      stars
    ></Sticker>
  );
}
