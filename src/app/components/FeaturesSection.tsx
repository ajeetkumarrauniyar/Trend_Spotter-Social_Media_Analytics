import React from 'react';
import { Database, Terminal, BarChart3, Sparkles } from 'lucide-react';
import { FeatureCard } from '@/app/components/FeatureCard';

const features = [
    {
        Icon: Database,
        title: "DataStax Astra DB",
        description: "Store and manage your social media data efficiently with scalable database solutions."
    },
    {
        Icon: Terminal,
        title: "Langflow",
        description: "Create powerful workflows with GPT integration for advanced content analysis."
    },
    {
        Icon: BarChart3,
        title: "Analytics",
        description: "Generate comprehensive insights and performance reports across different formats."
    },
    {
        Icon: Sparkles,
        title: "GPT Insights",
        description: "Leverage AI to automatically generate actionable insights and content performance recommendations."
    }
];
export const FeaturesSection: React.FC = () => (
    <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    </section>
);