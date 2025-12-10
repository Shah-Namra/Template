'use client'
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { motion } from "motion/react"
import Image from "next/image"
import Shield from "../../../../public/images/shield.png"

export const SkeletonThree = () => {
    return (
        <div className="relative h-full w-full flex items-center justify-center pt-10">
            <div
            >
                <Image
                    src={Shield}
                    alt="Shield representing security and approvals"
                    className="relative drop-shadow-2xl z-20"
                    priority
                />
                <div
                    className="absolute -bottom-2 right-20 size-8 md:size-10 rounded-full bg-green-500 dark:bg-green-600 border-[3px] border-white dark:border-neutral-900 shadow-lg flex items-center justify-center"
                >
                    <svg
                        className="size-4 md:size-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            </div>

            <DottedGlowBackground
                className="pointer-events-none mask-radial-to-70% mask-radial-at-center"
                opacity={1}
                gap={10}
                radius={1.6}
                colorLightVar="--color-neutral-500"
                glowColorLightVar="--color-neutral-600"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1}
            />
        </div>
    )
}