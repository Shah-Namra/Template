"use client"
import { cn } from "@/lib/utils"
import { Icon24Hours, Icon3dCubeSphere } from "@tabler/icons-react"
import { Logo, LogoIcon } from "../logo"
import React from "react"

export const SkeletonTwo =() =>{
  return(
    <div className="flex-1 flex items-center rounded-t-3xl gap-2 justify-center w-full h-full absolute inset-x-0 p-2"
    style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)" 
    }}>
        <Circle className="flex items-center justify-center border-neutral-200 shadow-sm">
            <LogoIcon className="size-10 text-neutral-200" />
                <OrbitingIcon className="[--translate-position:120px] [--orbit-duration:8s]">
                  <Icon3dCubeSphere className="size-6 text-red-500" />
                </OrbitingIcon>

                <OrbitingIcon className="[--translate-position:160px] [--orbit-duration:10s]">
                  <Icon3dCubeSphere className="size-6 text-blue-500" />
                </OrbitingIcon>

                <OrbitingIcon className="[--translate-position:180px] [--orbit-duration:15s]">
                  <Icon3dCubeSphere className="size-6 text-green-500" />
                </OrbitingIcon>

                <OrbitingIcon className="[--translate-position:140px] [--orbit-duration:18s]">
                  <Icon3dCubeSphere className="size-6 text-yellow-500" />
                </OrbitingIcon>

                <OrbitingIcon className="[--translate-position: 240px] [--orbit-duration:20s] size-auto ring-0 shadow-none bg-transparent">
                    <SkeletonCard
                      index={2}
                      className="w-64 max-w-xs" 
                      title='Campaign Planner'
                      description='Creates clear, ready-to-use campaign briefs using product info and audience data' 
                      icon={undefined} 
                      badge={undefined}               
                    />
                </OrbitingIcon>
        </Circle>
        <Circle className=" border-neutral-100 shadow size-60 bg-neutral-100/80 flex z-[9] relative  " >
            
        </Circle>
        <Circle className="border-neutral-100 shadow size-80 bg-neutral-100/60 flex z-[8]"> 
            
        </Circle>
        <Circle className="border-neutral-100 shadow size-100 bg-neutral-100/40 flex z-[7]"/>
        <Circle className="border-neutral-100 shadow size-120 bg-neutral-100/20 flex z-[6]"/>
    </div>
  )
}

const RevolvingIcon =({className, children}:{ 
    className: string,
    children?: React.ReactNode
}) =>{
    return(
        <div className={cn(
            "absolute  flex items-center justify-center rounded-sm bg-white ring-1 ring-black/10 shadow-black/10 animate-orbit",
            className
        )}>
            {children}
        </div>
    )
}

const OrbitingIcon = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "absolute size-8 flex items-center justify-center rounded-sm bg-white ring-1 ring-black/10 shadow-black/10 animate-orbit [--translate-position:160px] ",
        className
      )}
    >
      {children}
    </div>
  )
}


export const Circle =({className, children}:{
    className?: string,
    children?: React.ReactNode,
}) =>{
    return(
        <div className={cn("size-40 z-[10] bg-white border border-transparent rounded-full absolute inset-0 m-auto", className)}>
            {children}
        </div>
    )
}
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
                'bg-white dark:bg-neutral-900 p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg cursor-pointer',
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
            
        </div>
    );
};
