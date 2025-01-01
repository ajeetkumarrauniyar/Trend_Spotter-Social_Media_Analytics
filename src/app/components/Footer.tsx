import React from 'react'
import { Activity, Github, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">TrendSpotter</span>
                    </div>
                    <div className="flex gap-4">
                        <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer