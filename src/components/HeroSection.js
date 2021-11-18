import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

export const HeroSection = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item interval={6000}>
        <img className="d-block w-100" src="./images/carousel/carousel-1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img className="d-block w-100" src="./images/carousel/carousel-2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img className="d-block w-100" src="./images/carousel/carousel-3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
