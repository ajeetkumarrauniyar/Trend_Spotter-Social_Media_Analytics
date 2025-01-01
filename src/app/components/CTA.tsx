import React from 'react'
import { Button } from '@/components/ui/button'

const CTA = () => {
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

export default CTA