import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import title from './components/title/title'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <title/>
      <Programs/>
      </div>
      
    </div>
  )
}

export default App
