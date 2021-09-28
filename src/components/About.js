import React from 'react'
import portfolioPhoto from '../images/guy.webp'
const About = () => {
    return (
        <div>
            <h2 className="major">About</h2>
          <div className="image main about-hero">
            <img src={portfolioPhoto} alt="" />
            <div className='about-hero__text'>
              <h3>Hi there! I'm</h3>
              <h1><span>J</span>ames <span>K</span>arnes</h1>
            </div>
          </div>
          
          <p>
            I'm a self-taught front-end web developer with a background in tourism. In 2020 I found myself with a lot of spare time and decided to take advantage of the situation by learning a new skill. I decided to enroll in a few techinical courses on different platforms such as coursera and edx. Recently, I have completed <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="noreferrer">"The Web Developer Bootcamp"</a> and <a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/" target="_blank" rel="noreferrer">"Complete React Developer"</a> on the <a href="https://www.udemy.com" target="_blank" rel="noreferrer">Udemy</a> platform. I am passionate about coding, solving problems and learning more.

          </p>
        </div>
    )
}

export default About
