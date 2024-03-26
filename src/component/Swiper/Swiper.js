import React, { useState } from 'react';
import './swiper.css'; 

const Swiper = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="swiper">
      <div className="swiper__wrapper">
        {items[currentIndex]}
      </div>
      <div className="swiper__pagination">
        {items.map((_, index) => (
          <span
            key={index}
            className={`swiper__pagination-bullet ${index === currentIndex ? 'active' : ''}`}
            onClick={() => selectSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
