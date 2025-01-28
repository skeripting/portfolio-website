import React from "react";
import "./InfoBlock.scss"; // Assuming you'll style it with CSS
import GradientButton from "../GradientButton/GradientButton";

const InfoBlock = ({
  title,
  text,
  buttonText,
  imageSrc,
  imageOnLeft,
  buttonHref,
  testimonial,
}) => {
  return (
    <div className={`info-block ${imageOnLeft ? "image-left" : "image-right"}`}>
      {imageOnLeft && <img src={imageSrc} alt={title} className="info-image" />}
      <div className="info-content">
        {testimonial}
        <h2>{title}</h2>
        <p>{text}</p>
        <GradientButton className="cta-button" href={buttonHref}>
          {buttonText}
        </GradientButton>
      </div>
      {!imageOnLeft && (
        <img src={imageSrc} alt={title} className="info-image" />
      )}
    </div>
  );
};

export default InfoBlock;
