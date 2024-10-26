import "./Sticker.scss";

function Sticker(props) {
  return (
    <div
      className="sticker"
      style={{
        left: props.left,
        top: props.top,
        width: props.width,
        height: props.height,
      }}
    >
      <div className="sticker-content">
        <img
          className="sticker-icon"
          src={props.icon}
          style={{ width: props.logoWidth, height: props.logoHeight }}
        ></img>
        <h5 className="sticker-header">{props.header}</h5>
        <p className="sticker-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Sticker;
