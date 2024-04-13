import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videop from './components/Videop/Videop'

const App = () => {

  const [playState,setPlayState] =useState(false);
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What we Offer' />
      <Programs/>
      <About setPlayState = {setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Videop playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
