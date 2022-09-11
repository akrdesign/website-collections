import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const HeroFooter = () => {
  const heroFooterRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroFooterRef.current,
        start: 'top center',
        scrub: true
      }
    })
    tl.to('.hero-container', { backgroundColor: "white", duration: 0.25 }, "-=2")
  }, [])

  return (
    <div ref={heroFooterRef} className="hero-text-section">
      <h1>Visual stories that feel like yours, because they are.</h1>
    </div>
  )
}

export default HeroFooter