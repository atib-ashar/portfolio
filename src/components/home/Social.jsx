import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/?hl=en" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://dribbble.com/" className="home__social-icon" target='_blank' rel="noreferrer">
        <i class="uil uil-dribbble"></i>
        </a>
        

        <a href="https://github.com/dashboard" className="home__social-icon" target="_blank" rel="noreferrer">
        <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social