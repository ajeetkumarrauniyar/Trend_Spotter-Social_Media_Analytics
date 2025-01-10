import React from 'react'
import { Button } from '@/components/ui/button'
import FloatingElement from './FloatingElement'
import { ChevronRight } from 'lucide-react'

export const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Begin?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Start building your social media analytics module and showcase your skills in the upcoming hackathon.
                </p>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Submit Your Project
                </Button>
            </div>
        </section>


    )
}

export const CTA2 = () => {
    return (
        //  CTA Section with Enhanced Animation 
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm relative overflow-hidden" >
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
        </section >
    )
}
