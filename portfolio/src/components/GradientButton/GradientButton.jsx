import "./GradientButton.scss";
function GradientButton(props) {
  return (
    <button className="gradient-button" href={props.href}>
      {props.children}
    </button>
  );
}

export default GradientButton;
