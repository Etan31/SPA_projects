import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/TItle/Title'
import About from './components/About/About'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title = 'What We Offer'/>
        <Programs />
        <About />
      </div>
    </div>
  )
}

export default App