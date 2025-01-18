import "./Tag.scss";

function Tag(props) {
  return (
    <div
      className={`tag ${props.inactive ? "inactive" : ""} ${
        props.clickable ? "clickable" : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Tag;
