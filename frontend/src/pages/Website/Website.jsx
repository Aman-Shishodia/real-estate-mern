import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popularresidencies from '../../components/Popular Residency/Popularresidencies'
import Residency from '../../components/Residency/Residency'
import Getstarted from '../../components/Getstarted/Getstarted'
import About from '../../components/About/About'

function Website() {
  return (
    <div className="website">
      <div>
      <div className="white-gradient" />
        <Hero />
      </div>
      <About />
      <Popularresidencies />
      <Residency />
      <Getstarted />
    </div>
  )
}

export default Website