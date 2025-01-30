import "./GradientButton.scss";
function GradientButton(props) {
  return (
    <a className="gradient-button" href={props.href} style={props.style}>
      {props.children}
    </a>
  );
}

export default GradientButton;
