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
      <a className="sticker-content" href={props.ctaHref}>
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
        {props.ctaText && (
          <div className="sticker-cta-text-cover">
            <a className="sticker-cta-text">{props.ctaText}</a>
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
          </div>
        )}
      </a>
    </div>
  );
}

export default Sticker;
