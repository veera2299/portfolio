import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/v2_prot_main3.jpg';
import profile_img2 from '../../assets/about_profile.svg';

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
            <p>A skilled and motivated full-stack developer with strong expertise in React,
              JavaScript, Node.js, Express.js, and MongoDB. I have worked on projects such as
              online food delivery and e-commerce applications, which gained visibility through social media.
              I have also completed challenges on Flexbox, Grid, and React state management on Frontend Mentor.
              Additionally, I have solved over 30 JavaScript-related problems on LeetCode.</p>
            <p>I have completed a total of six projects: two full-stack projects,
              two using Tailwind CSS and React.js, and two as part of Frontend Mentor challenges.
            </p>
            <p>I developed my communication skills through 165 hours of training provided by Unnati.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
