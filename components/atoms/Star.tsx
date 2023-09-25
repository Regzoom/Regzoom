import React, { useEffect, useState } from 'react';

export default function Star() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [radius, setRadius] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (radius === 0) {
            setX(Math.floor(Math.random() * Math.floor(document.documentElement.scrollWidth)));
            setY(window.innerHeight); // Установим начальную позицию внизу экрана
            setRadius(Math.random() * Math.floor(5));
            setDuration(Math.random() * (4 - 0.3) + 0.3);
        }
    }, [radius]);

    const starStyle = {
        top: y + 'px',
        left: x + 'px',
        height: radius + 'px',
        width: radius + 'px',
        animation: `moveStar ${duration}s linear infinite`,
    };

    return (
        <div
            className="star"
            style={starStyle}
        />
    );
}

