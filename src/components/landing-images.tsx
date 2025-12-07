'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import heroImage from "../../public/images/dashboard-light.jpg"
import { motion, useScroll, useTransform } from 'motion/react'

export const LandingImages = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Transform rotateX from 35deg to 0deg as user scrolls
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [35, 0])

    // Optional: slight scale up effect
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

    return (
        <div
            ref={containerRef}
            className='relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-12 sm:mt-16 md:mt-20 overflow-visible'
        >
            <div
                className='absolute inset-0 w-full h-full'
                style={{
                    perspective: '1500px',
                    perspectiveOrigin: 'center top'
                }}
            >
                {/* Main large image */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                        rotateX: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 35,
                    }}
                    style={{
                        rotateX: rotateX,
                        scale: scale,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className='absolute left-1/2 top-0 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] -translate-x-1/2'
                >
                    <div className='relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800'>
                        <Image
                            src={heroImage}
                            alt="Dashboard Interface"
                            height={1080}
                            width={1920}
                            className='w-full h-auto'
                            priority
                        />
                        {/* Gradient overlay for depth */}
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-black/30 pointer-events-none' />
                    </div>
                </motion.div>

                {/* Smaller overlapping image - top right (hidden on mobile) */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                        rotateX: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 35,
                    }}
                    style={{
                        rotateX: rotateX,
                        scale: scale,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className='absolute right-0 top-[12%] w-[45%] md:w-[42%] lg:w-[38%] z-10 hidden sm:block'
                >
                    <div className='relative w-full rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-white dark:border-neutral-900'>
                        <Image
                            src={heroImage}
                            alt="Dashboard Detail"
                            height={1080}
                            width={1920}
                            className='w-full h-auto'
                        />
                    </div>
                </motion.div>

                {/* Third smaller image - left side (hidden on mobile and tablet) */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                        rotateX: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 35,
                    }}
                    style={{
                        rotateX: rotateX,
                        scale: scale,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className='absolute left-0 top-[20%] w-[38%] lg:w-[35%] z-10 hidden md:block'
                >
                    <div className='relative w-full rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-white dark:border-neutral-900'>
                        <Image
                            src={heroImage}
                            alt="Dashboard Feature"
                            height={1080}
                            width={1920}
                            className='w-full h-auto'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}