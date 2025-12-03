
'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import heroImage from "../../public/images/dashboard-image.jpg"
import { motion } from 'motion/react'

export const LandingImages = () => {
    return (
        <div className='relative min-h-140 w-full pt-20 perspective-distant '>
            <motion.div className='perspective-[4000px]'>
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    height={1080}
                    width={1920}
                    className={cn(' absolute inset-0 translaterounded-lg mask-r-from-50%  mask-b-from-50% shadow-2xl')}
                    style={{
                        transform: "rotateY(30deg) rotateX(20deg) rotateZ(-20deg)",
                    }}
                />
            </motion.div>
            <motion.div>
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    height={1080}
                    width={1920}
                    className={cn(' absolute inset-0 translate-y-110 rounded-lg mask-r-from-0%  mask-b-from-50% shadow-2xl', "")}
                />
            </motion.div>
        </div>)
}