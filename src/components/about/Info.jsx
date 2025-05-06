import React from 'react'

const Info = () => {
  return (
        <div className="about__info grid">
            <div className="about__box about__icon">
            <i class='bx bx-award'></i>
                <h3 className="about__title">Experince</h3>
                <span className="about__subtitle">1+ year working</span>
            </div>

            <div className="about__box about__icon">
            <i class='bx bx-briefcase '></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">8+ Projects</span>
            </div>

            <div className="about__box about__icon">
            <i class='bx bx-support'></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>  
        </div>
  )
}

export default Info