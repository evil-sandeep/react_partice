import React, { useState } from 'react';

const Casual = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="product-slider">
      <button onClick={handlePrevClick}>&lt; Prev</button>
      <div className="slider-container">
        {products.map((product, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3> 
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next &gt;</button>
    </div>
  );
};

export default Casual;
