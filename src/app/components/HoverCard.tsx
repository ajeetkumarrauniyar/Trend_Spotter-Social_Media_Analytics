import React from 'react';
import { HoverCardProps } from '@/types/types';

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = "" }) => {
    return (
        <div className={`p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 ${className}`}>
            {children}
        </div>
    );
};


