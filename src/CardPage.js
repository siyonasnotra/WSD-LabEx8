import React, { useState } from 'react';
import heartIcon from './images/heart.png'; // Add a heart image in your images folder

const CardPage = ({ title, handler, image, description }) => {
  const [click, setClick] = useState(0); // State to track the number of clicks on the like icon

  const handleClick = () => {
    setClick(click + 1); // Increment the click count by 1
  };

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img className="service-image" src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handler}</p>
          </div>
        </div>
        <div className="content">{description}</div>
        <div className="like-icon-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            className="heart"
            alt="heart"
            src={heartIcon} // Use the heart image
            onClick={handleClick}
            style={{
              width: 20 + 10 * click + 'px', // Icon size increases by 10px for each click
              transition: 'width 0.3s ease',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
