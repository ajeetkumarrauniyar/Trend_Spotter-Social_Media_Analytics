import React, { useState } from 'react';
import { Database, Terminal, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import { FeatureCard } from '@/app/components/FeatureCard';
import { HoverCard2 } from './HoverCard';

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

const tabs = [
    {
        id: 0,
        title: 'Data Management',
        description: "Store and process social media data efficiently with DataStax Astra DB's scalable infrastructure.",
        features: ['Real-time data processing', 'Scalable storage', 'Secure data handling']
    },
    {
        id: 1,
        title: 'Analysis Tools',
        description: "Leverage GPT and Langflow for comprehensive social media content analysis.",
        features: ['Sentiment analysis', 'Trend detection', 'Performance metrics']
    },
    {
        id: 2,
        title: 'Reporting',
        description: "Generate detailed reports and visualizations for your social media analytics.",
        features: ['Custom dashboards', 'Export capabilities', 'Automated insights']
    }];

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

export const FeaturesSection2: React.FC = () => {
    // Interactive Features Tabs Section
    const [activeTab, setActiveTab] = useState(0);
    console.log("tabs", tabs);

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`p-4 rounded-lg transition-all ${activeTab === index
                                ? 'bg-purple-600 text-white'
                                : 'bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <HoverCard2 className="min-h-[300px]">
                    <div className="animate-fade-in">
                        {tabs.map((tab) => (
                            activeTab === tab.id && (
                                <div key={tab.id} className="space-y-4">
                                    <h3 className="text-2xl font-bold">{tab.title}</h3>
                                    <p>{tab.description}</p>
                                    <ul className="space-y-2">
                                        {tab.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-purple-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        ))}
                    </div>
                </HoverCard2>
            </div>
        </section>
    )
}