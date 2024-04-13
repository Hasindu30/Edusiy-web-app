import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>What Starts Here Changes the World</h2>
            <p>With the comprehensive education programs offered by our university, set off on a life-changing educational adventure. 
                Our innovative curriculum is developed to give 
                students the information, abilities, and experiences they need to succeed in the fast-paced world of education.</p>
            <p>Our programs, which emphasize creativity, experiential learning, and individualized mentoring, 
                equip aspiring teachers to have a significant effect on classrooms, schools, and communities.</p>
            <p>Our wide selection of programs provides the ideal route to reach your objectives and realize your full 
                potential in influencing the direction of education, regardless of 
                your career aspirations—be they those of a teacher, administrator, counselor, or educational leader.</p>
      </div>

    </div>
  )
}

export default About
