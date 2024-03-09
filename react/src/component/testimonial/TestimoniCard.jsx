import React from "react";

const TestimoniCard = ({ img, desc, name }) => {
  return (
    <>
      <img src={img} alt="photo" />
      <div className="testimonial-card-inner">
        <div className="star">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>{desc}</p>
        <h5>{name}</h5>
      </div>
    </>
  );
};

export default TestimoniCard;
