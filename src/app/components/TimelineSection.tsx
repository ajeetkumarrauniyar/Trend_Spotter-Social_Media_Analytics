import { BarChart3, CheckCircle2, Database, Terminal } from 'lucide-react'
import React from 'react'
import FloatingElement from './FloatingElement'
import { HoverCard2 } from './HoverCard'

const TimelineSection = () => {
    return (
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
                            <HoverCard2
                                interactive
                                className={`relative ${index < 3 ? 'after:content-[""] after:absolute after:top-1/2 after:right-0 after:w-full after:h-px after:bg-purple-500/30' : ''}`}
                            >
                                <div className="relative z-10 text-center space-y-4">
                                    <step.icon className="h-8 w-8 text-purple-400 mx-auto" />
                                    <h3 className="text-xl font-semibold">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            </HoverCard2>
                        </FloatingElement>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TimelineSection