import "./Sticker.scss";

function Sticker(props) {
  return (
    <div
      className={`sticker ${props.className ? props.className : ""}`}
      id={props.id}
      style={{
        left: props.left,
        top: props.top,
        right: props.right,
        width: props.width,
        height: props.height,
        position: props.position,
        "margin-bottom": props["margin-bottom"],
        "min-width": props["min-width"],
        "min-height": props["min-height"],
      }}
    >
      <div className="sticker-content">
        {props.icon && (
          <img
            className="sticker-icon"
            src={props.icon}
            alt={"An image of " + props.header}
            style={{ width: props.logoWidth, height: props.logoHeight }}
          ></img>
        )}
        {props.stars && (
          <figure class="wp-block-image size-full is-resized">
            <img
              src="https://aliabdaal.com/wp-content/uploads/2024/09/Rating.png"
              alt=""
              class="wp-image-227"
              style={{ width: "94px", height: "19px" }}
            ></img>
          </figure>
        )}

        <h5 className="sticker-header">{props.header}</h5>
        <p className="sticker-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Sticker;
