import "./TestimonialStack.scss";

function TestimonialStack(props) {
  const testimonialImages = Array.from(
    { length: 89 },
    (_, i) => `/testimonials/Screenshot_${i}.png`
  );

  return (
    <div className="testimonial-stack">
      {testimonialImages.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt={`Testimonial ${index + 1}`}
          style={{ margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default TestimonialStack;
