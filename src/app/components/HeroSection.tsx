import React from 'react'
import { ArrowRight, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCard2 } from './HoverCard'
import FloatingElement from './FloatingElement'
import { AnimatedCounter } from './AnimatedCounter'


export const HeroSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            Build The Future of Social Analytics
                        </h1>
                        <p className="text-xl text-gray-300">
                            Create powerful social media analytics using DataStax Astra DB and Langflow with GPT integration. Analyze post performance and generate insightful reports.
                        </p>
                        <div className="flex gap-4">
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                Get Started
                            </Button>
                            <Button className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                                Watch Demo
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <HoverCard className="relative z-10">
                            <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                <BarChart3 className="h-24 w-24 text-purple-400" />
                            </div>
                        </HoverCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const HeroSection2 = () => {
    return (
        // Hero Section with Enhanced Animations
        <section className="py-20" >
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
                            <HoverCard2 className="relative z-10" interactive>
                                <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group">
                                    <BarChart3 className="h-24 w-24 text-purple-400 transform group-hover:scale-110 transition-transform" />
                                </div>
                            </HoverCard2>
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
    )
}