import React, { useEffect, useRef } from "react";
import { Fragment } from "react";

const imagesUrl = [
    "https://images.unsplash.com/photo-1662659512148-35f5ca4ee2a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    "https://images.unsplash.com/photo-1661936715382-a7edb6698e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
    "https://images.unsplash.com/photo-1661679307616-b45fbb4a7f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1661547040383-02fcf17bb4bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1618134661268-81383f19764b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    "https://images.unsplash.com/photo-1661980658435-5aa7d66ea217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
];

function clamp(value, lower, upper) {
    if (value > upper) return upper;
    if (value < lower) return lower;
    return value;
}

const Slider = () => {
    const slider = useRef();
    const stateRef = useRef({
        hasMousePress: false,
        startXPosition: 0,
        transformAmount: 0,
        velocity: 0,
        requestAnimationId: 0,
    });

    const mouseDown = (event) => {
        stateRef.current.hasMousePress = true;
        stateRef.current.startXPosition =
            event.pageX - stateRef.current.transformAmount;
        cancelMomentumTracking();
    };
    const mouseUp = () => {
        stateRef.current.hasMousePress = false;
        beginMomentumTracking();
    };
    const mouseLeave = () => {
        stateRef.current.hasMousePress = false;
    };
    const mouseMove = (event) => {
        if (!stateRef.current.hasMousePress) return;
        const { pageX } = event;
        const distance = pageX - stateRef.current.startXPosition;
        const clampedDistance = clamp(
            distance,
            -slider.current.scrollWidth + slider.current.clientWidth,
            0
        );

        stateRef.current.velocity =
            stateRef.current.transformAmount - clampedDistance;
        stateRef.current.transformAmount = clampedDistance;
        slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
    };

    const beginMomentumTracking = () => {
        cancelMomentumTracking();
        stateRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
    };

    const cancelMomentumTracking = () => {
        cancelAnimationFrame(stateRef.current.requestAnimationId);
    };

    const momentumLoop = () => {
        const value = stateRef.current.transformAmount - stateRef.current.velocity;
        const clampedDistance = clamp(
            value,
            -stateRef.current.scrollWidth + stateRef.current.clientWidth,
            0
        );
        stateRef.current.transformAmount = clampedDistance;
        stateRef.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;

        stateRef.current.velocity *= 0.9;
        if (Math.abs(stateRef.current.velocity) > 0.1) {
            stateRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
        }
    };

    useEffect(() => {
        const sliderCopy = slider.current;

        sliderCopy.addEventListener("mousedown", mouseDown);
        sliderCopy.addEventListener("mouseup", mouseUp);
        sliderCopy.addEventListener("mouseleave", mouseLeave);
        sliderCopy.addEventListener("mousemove", mouseMove);

        return () => {
            sliderCopy.removeEventListener("mousedown", mouseDown);
            sliderCopy.removeEventListener("mouseup", mouseUp);
            sliderCopy.removeEventListener("mouseleave", mouseLeave);
            sliderCopy.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <Fragment>
            <h1 className="heading">Interactive Momentum Scroller</h1>
            <div className="family" ref={slider}>
                {imagesUrl.map((url) => (
                    <div className="family-item">
                        <div
                            className="family-item-image"
                            style={{ backgroundImage: `url(${url})` }}
                        ></div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Slider;
