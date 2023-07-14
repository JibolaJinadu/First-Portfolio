
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Project Manager",
      quote: "Jibola's work is exceptional. His attention to detail and passion for frontend development truly shines through in every project."
    },
    {
      name: "Jane Smith",
      position: "UI/UX Designer",
      quote: "I've had the pleasure of collaborating with Jibola on multiple projects. His skills and expertise make him an invaluable asset to any team."
    },
    // Add more testimonials as needed
  ];

  return (
    <section>
      <h2>Testimonials</h2>
      <div>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.position}</p>
            <blockquote>{testimonial.quote}</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;