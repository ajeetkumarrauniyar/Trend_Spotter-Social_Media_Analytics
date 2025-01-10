
import React, { useState } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
}

// Animated number counter
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        let startTimestamp: number;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <span>{count}</span>;
};