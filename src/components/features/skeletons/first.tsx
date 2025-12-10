"use client"
import React from 'react';
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconChartBar, IconRipple } from '@tabler/icons-react';

const cn = (...classes: (string | boolean)[]) => classes.filter(Boolean).join(' ');

export const SkeletonOne = () => {
    return (
        <div className="relative w-full  flex items-center justify-center " style={{ perspective: '1000px' }}>
            <SkeletonCard
                className="absolute top-[20px] left-1/2 z-10 opacity-60 "
                style={{ transform: 'translateX(-50%) rotateX(15deg) scale(0.85)' }}
                title='Risk Analysis'
                description='Creates clear, ready-to-use campaign briefs using product info, audience data, and past results'
                badge={<Badge variant={'warning'} text="40s" />}
                icon={<IconChartBar className='w-4 h-4' />}
            />
            <SkeletonCard
                className="absolute top-[90px] left-1/2  z-20 opacity-80"
                style={{ transform: 'translateX(-50%) rotateX(10deg) scale(0.92)' }}
                title='Issue Tracker'
                description='Creates clear, ready-to-use campaign briefs using product info, audience data, and past results'
                badge={<Badge variant={'success'} text="10s" />}
                icon={<IconExclamationCircle className='w-4 h-4' />}
            />
            <SkeletonCard
                className="absolute top-[160px] left-[1/2] -translate-x-[1/2] z-30"
                title='Campaign Planner'
                description='Creates clear, ready-to-use campaign briefs using product info, audience data, and past results'
                badge={<Badge variant={'danger'} text="120s" />}
                icon={<IconCircleDashedCheck className='w-4 h-4' />}
            />
        </div>
    );
};

interface SkeletonCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const SkeletonCard = ({
    icon,
    title,
    description,
    badge,
    className,
    style,
}: SkeletonCardProps) => {
    return (
        <div
            className={cn(
                'max-w-[320px] w-full  bg-white dark:bg-neutral-900 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg',
                className ?? ''
            )}
            style={style}
        >
            <div className='flex gap-2.5 items-center mb-2.5'>
                {icon}
                <p className='text-sm font-bold text-black dark:text-white flex-1'>{title}</p>
                {badge}
            </div>
            <p className='text-xs text-neutral-500 dark:text-neutral-400 font-normal mb-2.5'>
                {description}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
                <Tag text='Google Ads' />
                <Tag text='SaaS' />
                <Tag text='Content' />
            </div>
        </div>
    );
};

interface TagProps {
    text: string;
}

const Tag = ({ text }: TagProps) => {
    return (
        <div className='px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300'>
            {text}
        </div>
    );
}

interface BadgeProps {
    variant: "danger" | "success" | "warning";
    text: string;
}

const Badge = ({ variant, text }: BadgeProps) => {
    return (
        <div className={cn(
            'px-2 py-0.5 rounded-full flex items-center gap-1 w-fit border',
            variant === "danger" && "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900 text-red-600 dark:text-red-400",
            variant === "warning" && "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900 text-yellow-600 dark:text-yellow-400",
            variant === "success" && "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900 text-green-600 dark:text-green-400"
        )}>
            <IconClock className='w-3.5 h-3.5' />
            <IconRipple className='w-3 h-3' />
            <p className='text-[10px] font-semibold'>
                {text}
            </p>
        </div>
    );
};

