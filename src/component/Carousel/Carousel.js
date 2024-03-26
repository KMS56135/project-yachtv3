// Carousel.js

import about1 from '../../assets/images/Offers/about-1-340x243.jpg'
import about2 from '../../assets/images/Offers/about-2-340x243.jpg'
import about3 from '../../assets/images/Offers/about-3-340x243.jpg'

import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: about1,
      title: 'Заголовок 1',
      description: 'Описание 1',
    },
    {
      src: about2,
      title: 'Заголовок 2',
      description: 'Описание 2',
    },
    {
      src: about3,
      title: 'Заголовок 3',
      description: 'Описание 3',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <div key={index} className={`carousel-image ${index === activeIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.title} />
            <div className="carousel-text">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
