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
      title: 'Маршруты плавания',
      description: 'Откройте для себя самые популярные маршруты плавания под парусом',
    },
    {
      src: about2,
      title: 'Аренда яхты',
      description: 'Родина дайвинга во Вьетнаме',
    },
    {
      src: about3,
      title: 'События и мероприятия',
      description: 'Чартеры для корпоративных мероприятий',
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
            <div className='carousel-image-wrapper'>
                <img src={image.src} alt={image.title} />
            </div>
            <div className="carousel-text">
              <h2 className='carousel-title font-taviraj'>{image.title}</h2>
              <p className='carousel-description'>{image.description}</p>
            </div>
          </div>
        ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel;

