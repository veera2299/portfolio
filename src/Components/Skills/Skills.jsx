import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Skills = () => {
  return (
    <div id='skills' className="skills">
    <div className="skills-title">
      <h1>Technical Skills</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="about-skills">
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <p>HTML</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <p>CSS</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <p>JavaScript</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <p>ReactJS</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        <p>Tailwind CSS</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
        <p>Bootstrap</p>
      </div>
      <div className="about-skill">
        <img src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" />
        <p>Express JS</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
        <p>Node JS</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
        <p>MongoDB</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
        <p>Postman</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
        <p>SQL</p>
      </div>
      <div className="about-skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
        <p>JAVA</p>
      </div>
    </div>
  </div>
  )
}

export default Skills
