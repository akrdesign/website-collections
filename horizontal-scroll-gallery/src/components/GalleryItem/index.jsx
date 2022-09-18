import React, { useRef, useState, useEffect } from 'react'
import cn from 'classnames'
import { points } from '../../data'

import './style.scss'
import useOnScreen from '../../hooks/useOnScreen'

const GalleryItem = ({ src, index, columnOffset }) => {
    const ref = useRef(null);
    // const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);
    // useEffect(() => {
    //     if (onScreen) setReveal(onScreen);
    //   }, [onScreen]);

    const values = points[index];
    if (!values) return null;
    const [row, column, spanRow, spanColumn] = values;

    const scrollIndex = () => {
        if (index === 1) return -1;
        if (index === 4) return -1;
        if (index === 0) return 0;
        if (index === 3) return 0;

        return 1;
    };

    return (
        <div
            className="gallery-item"
            data-scroll
            data-scroll-speed={scrollIndex()}
            style={{
                gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`
            }}
            ref={ref}
        >
            <div className={cn("gallery-item-image", { reveal: onScreen })}>
                <div
                    className="gallery__item-imginner"
                    style={{ backgroundImage: `url(${src})` }}
                ></div>
            </div>
        </div>
    )
}

export default GalleryItem