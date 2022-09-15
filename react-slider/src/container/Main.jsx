import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import '../styles/slider.scss';


export default function Main() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, []);



    return loader ? (
        <div className="loader" />
    ) : (
        <div>
            <Slider />
        </div>
    );
}