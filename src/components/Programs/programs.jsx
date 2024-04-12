import React from 'react'
import './programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-4.jpeg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/icon-1.png'
import program_icon_2 from '../../assets/icon-2.png'
import program_icon_3 from '../../assets/icon-3.png'


const programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master's Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default programs
