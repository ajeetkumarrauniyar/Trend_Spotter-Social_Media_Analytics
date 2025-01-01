import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Activity } from 'lucide-react';

const Navigation = () => {
    return (
        <nav className="p-4 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Activity className="h-6 w-6 text-purple-400" />
                    <span className="font-bold text-xl">TrendSpotter</span>
                </div>

                <NavigationMenu className='text-black'>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="p-4 w-48">
                                    <div className="font-medium">Pre-Hackathon Task</div>
                                    <p className="text-sm text-gray-400">Build your social analytics module</p>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}

export default Navigation