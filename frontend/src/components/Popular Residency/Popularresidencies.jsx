import React from "react";
import "./Popularres.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Popularresidencies = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.popularres-part1',{
      scale:0,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:'.popularres',
        // markers:true,
        start:'top 60%',
        end:'top 40%',
        scrub:3
      }
    })
    gsap.from('.pr-image-container img',{
      scale:0,
      duration:1,
      delay:1,
      stagger:.3,
      scrollTrigger:{
        trigger:'.popularres',
        // markers:true,
        start:'top 40%',
        end:'top 30%',
        scrub:5,
        // stagger:true
      }
    })
  })
  return (
    <>
      <div className="popularres">
        <div className="popularres-part1">
          <p>POPULAR AREAS</p>
          <h3>
            Explore most <br />
            popular areas
          </h3>
        </div>
        <div className="popularres-part2">
          <div className="pr-image-container">
            <img src="/pr1.jpg" alt="img" />
            <img src="/pr2.jpg" alt="img" />
            <img src="/pr3.jpg" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popularresidencies;
