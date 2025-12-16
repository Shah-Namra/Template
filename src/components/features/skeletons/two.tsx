'use client'
import React from 'react';
import { motion } from 'motion/react';
import { IconCheck, IconCircleDashedCheck, IconRipple, IconLoader2 } from '@tabler/icons-react';

const cn = (...classes: (string | boolean)[]) => classes.filter(Boolean).join(' ');

export const SkeletonTwo = () => {
    return (
        <div
            style={{
                transform: "rotateY(8deg) rotateX(15deg) rotateZ(-3deg) scale(0.95)",
            }}
            className={cn(
                "max-w-[85%] h-80 my-auto bg-neutral-100 dark:bg-neutral-900 mx-auto w-full p-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-2xl flex flex-col group"
            )}
        >
            <div className="flex gap-3 items-center relative z-10">
                <IconCircleDashedCheck className="size-4 text-neutral-600 dark:text-neutral-400" />
                <p className="text-sm font-normal text-black dark:text-white">
                    Campaign Planner
                </p>
            </div>

            <div className="relative overflow-visible flex-1 bg-neutral-200 dark:bg-neutral-800 mt-4 border border-neutral-200 dark:border-neutral-700 rounded-2xl">
                <Pattern />

                <div className="absolute inset-0 bg-white dark:bg-neutral-950 h-full w-full rounded-2xl translate-x-2 -translate-y-2 scale-[1.02] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl overflow-hidden">
                    <Row
                        icon={<IconCheck className='size-3 stroke-white text-green-500' />}
                        text="Fetching Data"
                        time="10s"
                        variant={'success'}
                    />
                    <GradientHr />
                    <Row
                        icon={<IconCheck className='size-3 stroke-white text-green-500' />}
                        text="Processing Data"
                        time="20s"
                        variant={'success'}
                    />
                    <GradientHr />
                    <Row
                        icon={<IconCheck className='size-3 stroke-white text-green-500' />}
                        text="Performing Action"
                        time="30s"
                        variant={'success'}
                    />
                    <GradientHr />
                    <Row
                        icon={<IconCheck className='size-3 stroke-white text-green-500' />}
                        text="Waiting"
                        time="40s"
                        variant={'success'}
                    />
                    <GradientHr />
                    <Row
                        icon={<IconLoader2 className='size-3 text-white animate-spin' />}
                        text="Generating Report"
                        time="50s"
                        variant='warning'
                    />
                </div>
            </div>
        </div>
    );
};

const Pattern = () => {
    return (
        <div className='absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed rounded-2xl [--pattern-fg:rgba(0,0,0,0.03)] dark:[--pattern-fg:rgba(255,255,255,0.03)]'>
        </div>
    )
}

const GradientHr = () => {
    return (
        <div className='h-px w-full bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent' />
    )
}

const Row = ({ icon, text, time, variant = "success" }: {
    icon: React.ReactNode,
    text: string,
    time: string,
    variant: "success" | "warning" | "danger"
}) => {
    return (
        <motion.div
            className="flex items-center justify-between px-4 py-2 cursor-pointer relative overflow-hidden"
            whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.02)",
            }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
            />

            <div className='flex items-center gap-2'>
                <motion.div
                    className={cn(
                        "size-4 flex items-center justify-center rounded-full transition-all",
                        variant === "success" && "bg-green-500",
                        variant === "warning" && "bg-yellow-500"
                    )}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {icon}
                </motion.div>
                <motion.p
                    className='text-neutral-500 dark:text-neutral-400 font-medium text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors'
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                >
                    {text}
                </motion.p>
            </div>

            <motion.div
                className='flex items-center gap-1 text-neutral-500 dark:text-neutral-400'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <IconRipple className='size-3' />
                <p className='text-[10px] font-bold'>{time}</p>
            </motion.div>
        </motion.div>
    )
}