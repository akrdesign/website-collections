import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import FeatureSlides from "../components/FeatureSlides";

export default function Main() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])


    return loader ? (
        <div className="loader" />
    ) : (
        <div>
            <Hero />
            <FeatureSlides />
            <footer className="footer">Thanks You</footer>
        </div>
    );
}