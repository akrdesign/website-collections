import React, { useEffect } from 'react';
import gsap from 'gsap';

const HeroHeader = () => {
  useEffect(() => {
    gsap.fromTo("#hero-text",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.2
      })
  }, [])

  return (
    <div className="hero-text-section">
      <h1 id='hero-text'>Stories meet their widest audience ever</h1>
    </div>
  )
}

export default HeroHeader