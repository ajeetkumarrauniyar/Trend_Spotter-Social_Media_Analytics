"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
    Activity,
    BarChart3,
    Database,
    Github,
    Terminal,
    Twitter,
    ChevronRight,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    delay?: string | number;
}
interface AnimatedCounterProps {
    end: number;
    duration?: number;
}
interface HoverCardProps {
    children: React.ReactNode;
    className?: string;
    interactive?: boolean;
}
// Floating animation component
const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = "0" }) => (
    <div className={`animate-float`} style={{ animationDelay: `${delay}s` }}>
        {children}
    </div>
);

// Animated number counter
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
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

const HoverCard: React.FC<HoverCardProps> = ({ children, className, interactive = false }) => {
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

const BackgroundGradient = () => (
    <>
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIj48L3JlY3Q+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSI+PC9jaXJjbGU+PC9zdmc+')] opacity-30" />
        </div>
        <div className="fixed inset-0 -z-10 h-full w-full animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent blur-3xl transform translate-x-full animate-gradient" />
        </div>
    </>
);

const LandingPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            <BackgroundGradient />

            {/* Navigation - Same as before */}
            {/* ... Navigation code ... */}

            {/* Hero Section with Enhanced Animations */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-6xl font-bold leading-tight animate-fade-in">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                                    Build The Future of
                                </span>
                                <br />
                                <span className="animate-text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-300% text-transparent bg-clip-text">
                                    Social Analytics
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 animate-fade-in-up">
                                Create powerful social media analytics using DataStax Astra DB and Langflow with GPT integration. Analyze post performance and generate insightful reports.
                            </p>
                            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                <Button className="bg-purple-600 hover:bg-purple-700 group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <FloatingElement>
                                <HoverCard className="relative z-10" interactive>
                                    <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group">
                                        <BarChart3 className="h-24 w-24 text-purple-400 transform group-hover:scale-110 transition-transform" />
                                    </div>
                                </HoverCard>
                            </FloatingElement>

                            {/* Floating stats cards */}
                            <FloatingElement delay="0.2">
                                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold"><AnimatedCounter end={1000} />+</div>
                                    <div className="text-sm text-gray-400">Active Users</div>
                                </div>
                            </FloatingElement>

                            <FloatingElement delay="0.4">
                                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold"><AnimatedCounter end={500} />k</div>
                                    <div className="text-sm text-gray-400">Analytics Generated</div>
                                </div>
                            </FloatingElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Interactive Timeline Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Your Journey</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Setup', icon: Database, desc: 'Configure DataStax Astra DB' },
                            { title: 'Build', icon: Terminal, desc: 'Develop with Langflow' },
                            { title: 'Analyze', icon: BarChart3, desc: 'Process social data' },
                            { title: 'Submit', icon: CheckCircle2, desc: 'Present your solution' }
                        ].map((step, index) => (
                            <FloatingElement delay={index * 0.2} key={index}>
                                <HoverCard
                                    interactive
                                    className={`relative ${index < 3 ? 'after:content-[""] after:absolute after:top-1/2 after:right-0 after:w-full after:h-px after:bg-purple-500/30' : ''}`}
                                >
                                    <div className="relative z-10 text-center space-y-4">
                                        <step.icon className="h-8 w-8 text-purple-400 mx-auto" />
                                        <h3 className="text-xl font-semibold">{step.title}</h3>
                                        <p className="text-gray-400">{step.desc}</p>
                                    </div>
                                </HoverCard>
                            </FloatingElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Features Tabs Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {['Data Management', 'Analysis Tools', 'Reporting'].map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`p-4 rounded-lg transition-all ${activeTab === index
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-white/5 hover:bg-white/10'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <HoverCard className="min-h-[300px]">
                        <div className="animate-fade-in">
                            {activeTab === 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Powerful Data Management</h3>
                                    <p>Store and process social media data efficiently with DataStax Astra DB's scalable infrastructure.</p>
                                    <ul className="space-y-2">
                                        {['Real-time data processing', 'Scalable storage', 'Secure data handling'].map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-purple-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 1 && (
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Advanced Analysis Tools</h3>
                                    <p>Leverage GPT and Langflow for comprehensive social media content analysis.</p>
                                    <ul className="space-y-2">
                                        {['Sentiment analysis', 'Trend detection', 'Performance metrics'].map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-purple-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Comprehensive Reporting</h3>
                                    <p>Generate detailed reports and visualizations for your social media analytics.</p>
                                    <ul className="space-y-2">
                                        {['Custom dashboards', 'Export capabilities', 'Automated insights'].map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-purple-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </HoverCard>
                </div>
            </section>

            {/* CTA Section with Enhanced Animation */}
            <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] animate-grid-flow" />
                <div className="max-w-7xl mx-auto px-4 text-center relative">
                    <FloatingElement>
                        <h2 className="text-3xl font-bold mb-8">Ready to Begin?</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Start building your social media analytics module and showcase your skills in the upcoming hackathon.
                        </p>
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                            Submit Your Project
                            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </FloatingElement>
                </div>
            </section>

            {/* Footer - Same as before */}
            {/* ... Footer code ... */}

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes grid-flow {
          to {
            transform: translateY(-60px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        .animate-text-gradient {
          animation: text-gradient 8s linear infinite;
        }

        .bg-300\% {
          background-size: 300%;
        }

        @keyframes text-gradient {
          from { background-position: 0% center; }
          to { background-position: -300% center; }
        }
      `}</style>
        </div>
    );
};

export default LandingPage;