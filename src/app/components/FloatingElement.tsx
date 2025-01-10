import React from 'react'


interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    delay?: string | number;
}

// Floating animation component
const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = "0" }) => (
    <div className={`animate-float`} style={{ animationDelay: `${delay}s` }}>
        {children}
    </div>
);

export default FloatingElement;