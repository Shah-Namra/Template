"use client"
import React from 'react';
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconChartBar, IconRipple } from '@tabler/icons-react';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export const SkeletonOne = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    
    return (
        <div className="relative w-full h-[280px] flex items-end justify-center group/stack">
            <SkeletonCard
                index={0}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                className="absolute top-[30px] left-1/2 -translate-x-1/2 z-10"
                style={{ 
                    transform: ' rotateX(8deg) scale(0.90)',
                    opacity: hoveredIndex === null ? 0.5 : hoveredIndex === 0 ? 1 : 0.3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                title='Risk Analysis'
                description='Creates clear, ready-to-use campaign briefs using product info and audience data'
                badge={<Badge variant={'warning'} text="40s" />}
                icon={<IconChartBar className='w-4 h-4' />}
            />
            <SkeletonCard
                index={1}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-20"
                style={{ 
                    transform: ' rotateX(5deg) scale(0.95)',
                    opacity: hoveredIndex === null ? 0.75 : hoveredIndex === 1 ? 1 : 0.3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                title='Issue Tracker'
                description='Creates clear, ready-to-use campaign briefs using product info and audience data'
                badge={<Badge variant={'success'} text="10s" />}
                icon={<IconExclamationCircle className='w-4 h-4' />}
            />
            <SkeletonCard
                index={2}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30"
                style={{
                    opacity: hoveredIndex === null ? 1 : hoveredIndex === 2 ? 1 : 0.3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                title='Campaign Planner'
                description='Creates clear, ready-to-use campaign briefs using product info and audience data'
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
    index?: number;
    hoveredIndex?: number | null;
    setHoveredIndex?: (index: number | null) => void;
}

const SkeletonCard = ({
    icon,
    title,
    description,
    badge,
    className,
    style,
    index,
    hoveredIndex,
    setHoveredIndex,
}: SkeletonCardProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    
    return (
        <div
            className={cn(
                'max-w-[320px] w-full bg-white dark:bg-neutral-900 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg cursor-pointer',
                className
            )}
            style={style}
            onMouseEnter={() => {
                setIsHovered(true);
                if (setHoveredIndex && index !== undefined) {
                    setHoveredIndex(index);
                }
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                if (setHoveredIndex) {
                    setHoveredIndex(null);
                }
            }}
        >
            <div className='flex gap-2.5 items-center mb-2.5'>
                <div 
                    className="transition-transform duration-300"
                    style={{ transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1)' }}
                >
                    {icon}
                </div>
                <p className='text-sm font-bold text-black dark:text-white flex-1'>{title}</p>
                <div
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.2s ease-out'
                    }}
                >
                    {badge}
                </div>
            </div>
            <p 
                className='text-xs text-neutral-600 dark:text-neutral-400 font-normal mb-2.5 leading-relaxed transition-colors duration-200'
                style={{ color: isHovered ? 'inherit' : undefined }}
            >
                {description}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
                <Tag text='Google Ads' isCardHovered={isHovered} delay={0} />
                <Tag text='SaaS' isCardHovered={isHovered} delay={50} />
                <Tag text='Content' isCardHovered={isHovered} delay={100} />
            </div>
        </div>
    );
};

interface TagProps {
    text: string;
    isCardHovered?: boolean;
    delay?: number;
}

const Tag = ({ text, isCardHovered, delay = 0 }: TagProps) => {
    return (
        <div 
            className='px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 transition-all duration-200'
            style={{
                transform: isCardHovered ? 'translateY(-2px)' : 'translateY(0)',
                transitionDelay: `${delay}ms`
            }}
        >
            {text}
        </div>
    );
}

interface BadgeProps {
    variant: "danger" | "success" | "warning";
    text: string;
}

const Badge = ({ variant, text }: BadgeProps) => {
    const [isPulsing, setIsPulsing] = React.useState(false);
    
    React.useEffect(() => {
        if (variant === 'warning' || variant === 'danger') {
            const interval = setInterval(() => {
                setIsPulsing(true);
                setTimeout(() => setIsPulsing(false), 600);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [variant]);
    
    return (
        <div className={cn(
            'px-2 py-1 rounded-full flex items-center gap-1.5 w-fit border transition-all duration-300',
            variant === "danger" && "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900 text-red-600 dark:text-red-400",
            variant === "warning" && "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900 text-yellow-600 dark:text-yellow-400",
            variant === "success" && "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900 text-green-600 dark:text-green-400",
            isPulsing && "scale-105"
        )}>
            <IconClock 
                className='w-3.5 h-3.5 transition-transform duration-300' 
                style={{ transform: isPulsing ? 'rotate(15deg)' : 'rotate(0deg)' }}
            />
            <p className='text-[11px] font-semibold leading-none'>
                {text}
            </p>
        </div>
    );
};

