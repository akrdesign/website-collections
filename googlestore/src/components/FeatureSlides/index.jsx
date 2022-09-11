import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import gsap from "gsap";

import { featureSlides } from "../../data";
import FeatureSlide from "./FeatureSlide";

const RenderImages = ({ activeFeatureIndex }) => {
    return featureSlides.map(({ imageUrl, title }, index) => (
        <img
            className={cn({ "as-primary": activeFeatureIndex === index })}
            key={imageUrl}
            style={{ backgroundImage: `url(${imageUrl})` }}
            alt={title}
        />
    ));
};

const FeatureSlides = () => {
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
    const featureSlidesRef = useRef(null);
    const featureSlideRightRef = useRef(null);

    useEffect(() => {
        const stopTrigger = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featureSlideRightRef.current,
                    start: 'top top',
                    end: () => `+=${featureSlidesRef.current.offsetHeight / 1.5}`,
                    scrub: true,
                    pin: true,
                },
            });

            return tl;
        }

        const master = gsap.timeline();
        master.add(stopTrigger());
    }, [])

    return (
        <div ref={featureSlidesRef} className="feature-slides-container">
            <div className="feature-slides-left">
                {featureSlides.map((feature, index) => (
                    <FeatureSlide
                        key={feature.imageUrl}
                        title={feature.title}
                        description={feature.description}
                        updateActiveImage={setActiveFeatureIndex}
                        index={index}
                    />
                ))}
            </div>
            <div ref={featureSlideRightRef} className="feature-slides-right">
                <RenderImages activeFeatureIndex={activeFeatureIndex} />
            </div>
        </div>
    );
};

export default FeatureSlides;