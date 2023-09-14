import React from "react";

export default function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides2 active" : "inactive"}
        >
          <img className="slide-image2" src={slide.urls} alt="" />
        </div>
      ))}
    </section>
  );
}
