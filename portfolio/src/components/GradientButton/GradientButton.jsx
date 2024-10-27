import "./GradientButton.scss";
function GradientButton(props) {
  return <button className="gradient-button">{props.children}</button>;
}

export default GradientButton;
