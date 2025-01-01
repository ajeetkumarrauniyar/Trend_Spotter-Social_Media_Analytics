import React from 'react'
import { BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HoverCard } from './HoverCard'


const HeroSection = () => {
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
                            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
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

export default HeroSection