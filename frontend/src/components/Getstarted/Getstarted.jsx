import React from 'react'
import './Getstarted.css'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';


function Getstarted() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.getstarted-part1',{
      y:100,
      opacity:0,
      // delay:1,
      duration:1,
      scrollTrigger:{
        trigger:'.getstarted',
        // markers:true,
        start:'top 50%',
        end:'top 40%'
      }
    })
    gsap.from('.getstarted-part2',{
      y:100,
      opacity:0,
      delay:1,
      duration:1,
      scrub:2,
      stagger:true,
      scrollTrigger:{
        trigger:'.getstarted',
        // markers:true,
        start:'top 50%',
        end:'top 40%'
      }
    })
  })
  return (
    <div className="getstarted">
      <div className="getstarted-part1">
      <h1>Looking for a dream home?</h1>
      <p>We can help you realize your dream of a new home</p>
      </div>
      <div className="getstarted-part2">
        <Link to="/properties" >
        <button>Explore Properties</button>
        </Link>
      </div>

    </div>
  )
}

export default Getstarted