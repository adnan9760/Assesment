// components/ImageSlider.js
'use client';
import { useState } from 'react';
import Stories from 'data/Stories'; // Adjust the path as necessary

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Stories.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Stories.length) % Stories.length);
  };

  return (
    <div className="slider-container">
      <div className="left-container">
        <div className="left-image">
          <img src={Stories[currentIndex].photoUrl} alt="" />
          <img className='logo' src={Stories[currentIndex].logo} alt="" />
        </div>
        <div className="left-content">
          <h2>{Stories[currentIndex].name}</h2>
          <p className="profession">{Stories[currentIndex].profession}</p>
          <p className="review">{Stories[currentIndex].review}</p>
        </div>
      </div>
      <div className="right-container">
        <div>
          <h1 className='heading'>Real Stories, Real Success</h1>
          <p className='para'>Discover what our learners say about us</p>
        </div>
        {/* Statistics Section */}
       
        <div className='right2-container'>
          <button onClick={prevImage} className="nav-button prev">&#10094;</button>
          <div className="images">
            {Stories.map((story, index) => (
              <div
                key={story.id}
                className={`image-wrapper ${index === currentIndex ? 'active' : 'blurred'}`}
              >
                <img src={story.photoUrl} alt={`${story.name}'s review`} />
              </div>
            ))}
          </div>
          <button onClick={nextImage} className="nav-button next">&#10095;</button>
        </div>
        <div className="statistics">
          <div className="stat-item">
            <span className="stat-number">9K+</span>
            <span className="stat-label">Successful Career Transitions</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" style={{ color: '#FF6F20' }}>175%</span>
            <span className="stat-label">Average Salary Hike</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          column-gap: 60px;
          width: 100%;
          max-width: 1280px;
          margin: 20px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .heading {
          font-size: 35px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .logo {
          width: 90px;
          margin-top: 20px; /* Added top margin */
          display: block; /* Center the logo */
          margin-left: auto; /* Center horizontally */
          margin-right: auto; /* Center horizontally */
        }

        .para {
          font-size: 18px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .left-container {
          display: flex;
          column-gap: 60px;
          align-items: center;
          padding: 20px;
          background-color: #3b2e1c;
          color: white;
          border-radius: 10px;
          width: 50%;
          margin-right: 20px;
          transition: transform 0.5s ease; /* Transition for horizontal movement */
        }

        .left-image {
          display: flex;
          flex-direction: column; /* Stack images vertically */
          align-items: center; /* Center images */
        }

        .left-image img {
          max-width: 100%;
          border-radius: 10px;
          margin-bottom: 10px;
          transition: transform 0.3s;
        }

        .left-content h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .profession {
          margin: 5px 0;
          font-style: italic;
          color: #ddd;
        }

        .review {
          margin-top: 10px;
          font-size: 1rem;
          line-height: 1.4;
        }

        .right-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 50%; /* Adjust as needed */
        }

        .statistics {
          display: flex;
          justify-content: space-between; /* Space out items */
          width: 100%;
          padding: 10px 0; /* Padding for spacing */
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          margin-top: 20px; /* Add margin to separate from content */
        }

        .stat-item {
          text-align: center; /* Center text */
        }

        .stat-number {
          font-size: 24px; /* Adjust size as needed */
          font-weight: bold;
        }

        .stat-label {
          font-size: 14px; /* Adjust size as needed */
          color: #ccc; /* Light gray for the label */
        }

        .right2-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .images {
          display: flex;
          gap: 10px;
        }

        .image-wrapper img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 10px;
          transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
        }

        .blurred img {
          filter: blur(8px);
          opacity: 0.5;
          transform: scale(0.9);
        }

        .active img {
          filter: none;
          opacity: 1;
          width: 100px;
          height: 100px;
          transform: scale(1.1);
        }

        .nav-button {
          background-color: rgba(85, 85, 85, 0.8);
          border: none;
          font-size: 2rem;
          color: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          transition: background-color 0.3s;
        }

        .nav-button:hover {
          background-color: rgba(51, 51, 51, 1);
        }

        .nav-button.prev {
          left: -20px;
        }

        .nav-button.next {
          right: -20px;
        }

        @media (max-width: 768px) {
          .slider-container {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .left-container {
            width: 100%;
            margin-right: 0;
          }

          .right2-container {
            flex-direction: column;
          }

          .nav-button {
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
}
