import "./GradientButton.scss";
function GradientButton(props) {
  return (
    <button
      className="gradient-button"
      href={props.href}
      onClick={() => {
        window.location.href = props.href;
      }}
    >
      {props.children}
    </button>
  );
}

export default GradientButton;
