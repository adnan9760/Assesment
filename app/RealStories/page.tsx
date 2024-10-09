'use client';
import { useState } from 'react';
import Stories from 'data/Stories';
import '../css/styles.css';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeImage = (isNext: boolean) => {
    if (isAnimating) return; 

    const newIndex = isNext ? (currentIndex + 1) % Stories.length : (currentIndex - 1 + Stories.length) % Stories.length;
    setNextIndex(newIndex);
    setIsAnimating(true); 
    const directionAnimation = isNext ? 'slide-left-out' : 'slide-right-in';
    const nextAnimation = isNext ? 'slide-right-in' : 'slide-left-out';

 
    setTimeout(() => {
      setCurrentIndex(newIndex); 
      setIsAnimating(false); 
    }, 500); 
  };

  const nextImage = () => changeImage(true);
  const prevImage = () => changeImage(false);

  return (
    <div className="slider-container">
      <div className="left-container-wrapper">
        {/* Current slide */}
        <div className={`left-container ${isAnimating ? 'slide-left-out' : ''}`}>
          <div className='hike'>
            <h1>Hike {Stories[currentIndex].hike}</h1>
          </div>
          <div className="left-image">
            <img className='user' src={Stories[currentIndex].photoUrl} alt={Stories[currentIndex].name} />
            <img className='logo' src={Stories[currentIndex].logo} alt={Stories[currentIndex].name} />
          </div>
          <div className="left-content">
            <h2>{Stories[currentIndex].name}</h2>
            <p className="profession">{Stories[currentIndex].profession}</p>
            <p className="review">{Stories[currentIndex].review}</p>
          </div>
        </div>

        {/* Next slide */}
        <div className={`left-container ${isAnimating ? 'slide-right-in' : 'hidden'}`}>
          <div className='hike'>
            <h1>Hike {Stories[nextIndex].hike}</h1>
          </div>
          <div className="left-image">
            <img className='user' src={Stories[nextIndex].photoUrl} alt={Stories[nextIndex].name} />
            <img className='logo' src={Stories[nextIndex].logo} alt={Stories[nextIndex].name} />
          </div>
          <div className="left-content">
            <h2>{Stories[nextIndex].name}</h2>
            <p className="profession">{Stories[nextIndex].profession}</p>
            <p className="review">{Stories[nextIndex].review}</p>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div>
          <h1 className='heading'>Real Stories, Real Success</h1>
          <p className='para'>Discover what our learners say about us</p>
        </div>
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
    </div>
  );
}
