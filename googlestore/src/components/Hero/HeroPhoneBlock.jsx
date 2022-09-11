import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import imgSrc from "../../assets/hero-phone-frame-v2.png";

const videoUrl = "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

const HeroPhoneBlock = () => {
  const phoneRef = useRef();

  useEffect(() => {
    const intro = () => {
      const tl = gsap.timeline();
      tl.fromTo(phoneRef.current,
        { y: 200 },
        { y: 0, duration: 1 }
      )
      return tl;
    }
    const stopTrigger = () => {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top',
          end: "+=1000",
          pin: true,
          scrub: true
        }
      })
      tl.to(phoneRef.current, { scale: 1.2 }, "+=0.2")
      tl.to(".hero-container", { backgroundColor: 'black', duration: 0.5 }, "-=0.5")
      return tl;
    }

    const masterTimeline = gsap.timeline();
    masterTimeline.add(intro());
    setTimeout(() => {
      masterTimeline.add(stopTrigger());
    }, 1000)
  }, [])

  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div className="hero-phone-template" style={{ backgroundImage: `url(${imgSrc})` }}>

        <video
          className='collage-element'
          playsInline=""
          autoPlay
          loop
          src={videoUrl}></video>
      </div>
    </div>
  )
}

export default HeroPhoneBlock