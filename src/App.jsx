import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videop from './components/Videop/Videop'
import './components/Title/Title.css' // Keep the CSS file for styles

const App = () => {
  const [playState, setPlayState] = useState(false);

  // Move Title component code here
  const Title = ({ subTitle, title }) => {
    return (
      <div>
        <div className="title">
          <p>{subTitle}</p>
          <h2>{title}</h2>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What we Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Videop playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
