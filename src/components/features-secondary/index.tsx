import React from "react"
import motion from "motion/react"

import { cn } from "@/lib/utils"
import { Container } from "../container"
import { SkeletonOne } from "./first"
import { SkeletonTwo } from "./two"
import { IconAbacus } from "@tabler/icons-react"

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20  relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="p-4">
            <h2 className="text-lg font-bold text-neutral-800">Agent Studio</h2>
            <CardDescription>
              Design Launch and customize AI agents for marketing sales support and ops built around your workflows
            </CardDescription>
            <CardSkeleton >
              <SkeletonOne />
              </CardSkeleton>
          </div>
           <div className="p-4">
            <h2 className="text-lg font-bold text-neutral-800">Multi Agent Orchestra</h2>
            <CardDescription>
              Coordinate multiple agents across workflows using memory, interrupts, and
              conditional logic.
            </CardDescription>
            <CardSkeleton className="mt-4 mask-radial-50% mask-t-from-50%">
                <SkeletonTwo />
              </CardSkeleton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <div>
            <div className="flex items-center gap-2">
              <IconAbacus />
              <h3 className="font-bold text-lg text-neutral-600">
                Workflow Automation
              </h3>
            </div>
          
            <p className=" text-neutral-500 text-base ">
              Automate complex workflows by orchestrating multiple AI agents to work together seamlessly.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IconAbacus />
              <h3 className="font-bold text-lg text-neutral-600">
                Integration Fabric
              </h3>
            </div>
          
            <p className=" text-neutral-500 text-base ">
              Connect CRMs, service desks, data warehouses and cloud apps seamlessly.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IconAbacus />
              <h3 className="font-bold text-lg text-neutral-600">
                Human-in-the-Loop
              </h3>
            </div>
          
            <p className=" text-neutral-500 text-base ">
              Add reviews, approvals and escalations without slowing work.
            </p>
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