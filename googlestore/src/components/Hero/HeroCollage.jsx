import React, { useEffect } from 'react';
import { photos, videos } from '../../data';
import gsap from 'gsap';

const VideoElement = ({ src }) => {
  return <div className="hero-element">
    <video
      className='collage-element'
      playsInline=""
      autoPlay
      loop
      src={src}></video>
  </div>
}

const ImageElement = ({ src }) => {
  return <div className="hero-element">
    <img src={src} className="collage-element" alt="" />
  </div>
}

const HeroCollage = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5
    });

    tl.fromTo(".hero-element",
      { y: 300 },
      {
        y: 0,
        duration: 1,
        stagger: 0.2
      })
  }, [])

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src, index) => (
          <ImageElement key={index} src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        {rightImages.map((src, index) => (
          <ImageElement key={index} src={src} />
        ))}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  )
}

export default HeroCollage