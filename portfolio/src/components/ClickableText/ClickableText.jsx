import "./ClickableText.scss";

function ClickableText(props) {
  return (
    <a className="clickable-text" href={props.href} active={props.active}>
      {props.text}
    </a>
  );
}

export default ClickableText;
