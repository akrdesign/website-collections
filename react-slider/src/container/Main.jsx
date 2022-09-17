import React, { useState, useEffect } from "react";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import HomeTitle from "../components/HomeTitle";
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
            <CustomCursor />
            <Header />
            <HomeTitle />
            <Slider />
        </div>
    );
}