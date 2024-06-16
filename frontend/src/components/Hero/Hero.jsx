import React,{useRef} from "react";
import "./Hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref =useRef()
  useGSAP(()=>{
    gsap.from(".hero-part1 h1",{
      x:100,
      duration:1,
      opacity:0,
      delay:1,
 
   })


   gsap.from(ref.current, {
    opacity: 0,
    x:100,
    duration: 1,
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 60%', 
      end: 'bottom 70%',
      scrub: 3, 
      // markers: true
    }
  })

   gsap.from(".image-container img", {
    opacity: 0,
    y:200,
    duration: 2.5,
    delay:.5
   })
})


  return (
    <div className="hero">
      <div  className="hero-part1">
        <h1 >
         <span id="h1"> Discover Your,</span><br />
          New Home
        </h1>
        <p ref={ref}>
        Choose from over 1 million apartments, houses, condos, and townhomes for rent.
        </p>
      </div>
      <div className="hero-part2">
        <div className="image-container">
        <img src="/Homenew.avif" alt="img"  />
        </div>
            
      </div>
    </div>
  );
};

export default Hero;
