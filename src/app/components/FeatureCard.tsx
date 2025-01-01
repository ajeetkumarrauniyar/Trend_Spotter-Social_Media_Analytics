import React from 'react';
import { LucideIcon } from 'lucide-react';
import { HoverCard } from '@/app/components/HoverCard';

interface FeatureCardProps {
    Icon: LucideIcon;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description }) => (
    <HoverCard>
        <Icon className="h-8 w-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </HoverCard>
);
