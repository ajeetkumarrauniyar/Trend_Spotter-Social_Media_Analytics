import React, { useState } from 'react';
import { HoverCardProps } from '@/types/types';

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = "" }) => {
    return (
        <div className={`p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 ${className}`}>
            {children}
        </div>
    );
};

export const HoverCard2: React.FC<HoverCardProps> = ({ children, className, interactive = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className={`p-6 rounded-xl transition-all duration-300 ${interactive ? 'hover:scale-105 cursor-pointer' : ''
                } backdrop-blur-sm border border-white/10 ${isHovered ? 'bg-white/15' : 'bg-white/5'
                } ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
};

