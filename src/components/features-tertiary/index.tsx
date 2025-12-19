import React from "react"
import motion from "motion/react"

import { cn } from "@/lib/utils"
import { Container } from "../container"
import { SkeletonOne } from "./first"
import { SkeletonTwo } from "./two"
import { IconAbacus } from "@tabler/icons-react"

export const FeaturersTertiary = () => {
  return (
    <section className="pt-10 md:pt-20  relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="p-4">
            <h2 className="text-lg font-bold text-neutral-800">Audit Trial</h2>
            <CardDescription>
              Tracks every agent action with full input-output visibility and timestamps.
            </CardDescription>
            <CardSkeleton >
              <SkeletonOne />
              </CardSkeleton>
          </div>
           <div className="p-4">
            <h2 className="text-lg font-bold text-neutral-800">Role-Based Orchestra</h2>
            <CardDescription>
              Controls who tan launch, review, or manage agents based on roles.
            </CardDescription>
            <CardSkeleton className="mask-radial-from-20% mask-l-from-50% mask-r-from-50% mask-b-from-20%">
                <SkeletonTwo />
              </CardSkeleton>
          </div>
        </div>
        
      </Container>
        
    </section>

    )
}


export const CardDescription = ({children}:{
    children: React.ReactNode
}) => {
    return <div className="text-neutral-600 mt-2 max-w-sm text-balanced">{children}</div>
}

export const CardSkeleton = ({ className, children }: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={cn('relative h-80 sm:h-60 md:h-80 flex flex-col overflow-hidden perspective-distant', className)}>
            {children}
        </div>
    )
}