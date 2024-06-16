import React from 'react'
import './About.css'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from "@gsap/react";

function About() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.about-part1 img',{
      scale:0,
      opacity:0,
      delay:1,
      duration:.5,

      scrollTrigger:{
        trigger:'.about',
        // scroller:'about',
        // markers:true,
        start:'top 50%',
        end:'top 30%',
        scrub:3,
        // stagger:5
      }
    })
    gsap.from('.about-part2',{
      scale:0,
      delay:1,
      duration:1,

      
      scrollTrigger:{
        trigger:'.about',
        // scroller:'about',
        // markers:true,
        start:'top 50%',
        end:'top 30%',
        scrub:3,
        // stagger:1
      }
    })
  })
  return (
    <div className="about">
        <div className="about-part1">
            <img src="/about-banner-1.png" alt="" />
        </div>
        <div className="about-part2">
            <p>About Us</p>
            <h1>The Leading Real Estate <br /> Rental Marketplace.</h1>
            <p>Over 39,000 people work for us in more than 70 countries all over the <br /> This breadth of global coverage, combined with specialist services</p>
            <div>"Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"</div>
        </div>
    </div>
  )
}

export default About