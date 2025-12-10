import { cn } from '@/lib/utils'
import React from 'react'

export const Card = ({ className, children }: {
    className?: string,
    children: React.ReactNode,
}) => {
    return (
        <div className={cn("bg-neutral-50 dark:bg-neutral-800 rounded-lg ", className)}>{children}</div>
    )
}

export const CardTitle = ({ className, children }: {
    className?: string,
    children: React.ReactNode,
}) => {
    return (
        <h3 className={cn("text-lg md:text-2xl font-bold font-display text-neutral-900 dark:text-neutral-100", className)}>{children}</h3>
    )
}

export const CardContent = ({ className, children }: {
    className?: string,
    children: React.ReactNode,
}) => {
    return (
        <div className={cn("px-4 md:px-6 pb-6 md:pb-12 ", className)}>{children}</div>
    )
}

export const CardIcon = ({ className, children }: {
    className?: string,
    children: React.ReactNode,
}) => {
    return (
        <div className={cn("size-10 md:size-12 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center", className)}>{children}</div>
    )
}


export const CardCTA = ({ className, children, ...rest }: React.ComponentProps<'button'>) => {
    return (
        <button className={cn("size-5 md:size-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0  active:scale-[0.98] transition duration-200", className)}>{children}</button>
    )
}

export const CardSkeleton = ({ className, children }: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={cn('relative min-h-40 md:min-h-80  overflow-hidden', className)}>
            {children}
        </div>
    )
}