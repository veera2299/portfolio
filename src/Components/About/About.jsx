import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum accusamus fuga iste eius dolores aspernatur autem beatae, explicabo provident!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequuntur.</p>
            </div>
        </div>
        
      </div>
      <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p> <hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Express JS</p> <hr style={{width:"70%"}} />
                </div>
                <div className="about-skill"> 
                    <p>Node JS</p> <hr style={{width:"70%"}} />
                </div>
            </div>  
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>4</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
