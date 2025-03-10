import GradientButton from "../GradientButton/GradientButton";
import InfoBlock from "../InfoBlock/InfoBlock";
import "./PlanCard.scss";

function PlanCard(props) {
  return (
    <div className="plan-card">
      <h1>{props.name}</h1>
      <p className="price">
        <span className="price-text">${props.price}</span> / hour
      </p>
      <GradientButton href="https://forms.gle/LfsEhg9DpQufSSXp7">
        Get started
      </GradientButton>
      <div className="features">
        {props?.features?.map((k) => (
          <div className="feature-title">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7333 24L5.1333 16.4L7.0333 14.5L12.7333 20.2L24.9666 7.96667L26.8666 9.86667L12.7333 24Z"
                fill="black"
              />
            </svg>
            <h3>{k}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanCard;
