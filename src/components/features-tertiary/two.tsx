"use client"
import { cn } from "@/lib/utils"
import React from "react"
import Image from "next/image"
import { LogoIcon } from "../logo"
import { motion } from "motion/react"

export const SkeletonTwo =() =>{
  return(
    <div className=" rounded-t-3xl gap-2 w-full h-full px-8 flex flex-col  items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
            <Item src="https://images.unsplash.com/photo-1619895862022-09114b41f16f"/>
            <Item src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <Item src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5"/>
            <Item src="https://images.unsplash.com/photo-1506863530036-1efeddceb993"/>
        </div>
         <div className="grid grid-cols-5 gap-2 justify-center mt-2">
            <Item />
            <Item src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />

            <Item containerClassName="from-black/50 via-transparent from-black/50">
                <div className="h-full w-full bg-white rounded-[12px] flex items-center justify-center"> 
                    <LogoIcon className="size-12" />
                </div>
            </Item>
            <Item src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5"/>
            <Item src="https://images.unsplash.com/photo-1506863530036-1efeddceb993"/>

        </div>
         <div className="grid grid-cols-4 gap-2">
            <Item src="https://images.unsplash.com/photo-1619895862022-09114b41f16f"/>
            <Item src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <Item src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5"/>
            <Item src="https://images.unsplash.com/photo-1506863530036-1efeddceb993"/>
        </div>
    </div>
  )
}

const Item =({
    children,
     className,
     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
     containerClassName,
    }: {
        children?: React.ReactNode, 
        className?: string,
        src?: string,
        containerClassName?: string,
        showGradient?: boolean
    })=>{
    return(
        <div className={cn(
            "size-20 justify-self-center aspect-square rounded-xl border border-dashed border-neutral-400 relative p-[1px]",
            " [--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg::var(--color-white)]/10", )} 
        >
            <motion.div
                initial={{
                    opacity: 0,
                    filter:"blur(10px)"
                }}
                animate={{
                    opacity: 1,
                    filter:"blur(0px)"
                }}
                transition={{
                    duration: Math.random() * 0.8 + 0.2,  
                    delay: Math.random() * 0.8 + 0.2      
                }}

                className={cn("flex items-center justify-center h-full w-full bg-gradient-to-br from-neutral-900 via-transparent to-neutral-900 rounded-[12px] relative", containerClassName)}> 
                {children ??  
                    <>
                    { src &&
                    <Image 
                        src={src} 
                        alt="Image" 
                        height={120} 
                        width={120} 
                        className="object-cover aspect-square rounded-[12px] relative z-20"
                        />
                    }
                    </>
                }
            </motion.div>
            <div className='absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_90%)] bg-[size:10px_10px] bg-fixed rounded-2xl [--pattern-fg:rgba(0,0,0,0.03)] dark:[--pattern-fg:rgba(255,255,255,0.03)]'>
        </div>
    </div>
    )
}

/*
"use client"
import { cn } from "@/lib/utils"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { LogoIcon } from "../logo"


export const SkeletonTwo = () => {
  const visibility = React.useMemo(() => ({
    row1: [
      Math.random() > 0.3,
      Math.random() > 0.3,
      Math.random() > 0.3,
      Math.random() > 0.3,
    ],
    row2: [
      Math.random() > 0.3,
      Math.random() > 0.3,
      true, 
      Math.random() > 0.3,
      Math.random() > 0.3,
    ],
    row3: [
      Math.random() > 0.3,
      Math.random() > 0.3,
      Math.random() > 0.3,
      Math.random() > 0.3,
    ],
  }), [])

  return (
    <div className="rounded-t-3xl gap-2 w-full h-full px-8 flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 py-8">
      <div className="grid grid-cols-4 gap-2">
        <Item src="https://images.unsplash.com/photo-1619895862022-09114b41f16f" show={visibility.row1[0]} />
        <Item src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" show={visibility.row1[1]} />
        <Item src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5" show={visibility.row1[2]} />
        <Item src="https://images.unsplash.com/photo-1506863530036-1efeddceb993" show={visibility.row1[3]} />
      </div>
      
      <div className="grid grid-cols-5 gap-2 justify-center mt-2">
        <Item show={visibility.row2[0]} />
        <Item src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" show={visibility.row2[1]} />
        

        <Item containerClassName="from-black/50 via-transparent to-black/50" show={true}>
          <div className="h-full w-full bg-white rounded-[12px] flex items-center justify-center"> 
            <LogoIcon className="size-12" />
          </div>
        </Item>
        
        <Item src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5" show={visibility.row2[3]} />
        <Item src="https://images.unsplash.com/photo-1506863530036-1efeddceb993" show={visibility.row2[4]} />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <Item src="https://images.unsplash.com/photo-1619895862022-09114b41f16f" show={visibility.row3[0]} />
        <Item src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" show={visibility.row3[1]} />
        <Item src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5" show={visibility.row3[2]} />
        <Item src="https://images.unsplash.com/photo-1506863530036-1efeddceb993" show={visibility.row3[3]} />
      </div>
    </div>
  )
}

const Item = ({
  children,
  className,
  src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  containerClassName,
  show = true,
}: {
  children?: React.ReactNode
  className?: string
  src?: string
  containerClassName?: string
  show?: boolean
}) => {
  return (
    <div
      className={cn(
        "size-20 justify-self-center aspect-square rounded-xl border border-dashed border-neutral-400 relative p-[1px]",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: show ? 1 : 0,
          filter: show ? "blur(0px)" : "blur(10px)",
        }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
        }}
        className={cn(
          "flex items-center justify-center h-full w-full bg-gradient-to-br from-neutral-900 via-transparent to-neutral-900 rounded-[12px] relative",
          containerClassName
        )}
      >
        {children ?? (
          <>
            {src && (
              <Image
                src={src}
                alt="Image"
                height={120}
                width={120}
                className="object-cover aspect-square rounded-[12px] relative z-20"
              />
            )}
          </>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_90%)] bg-[size:10px_10px] bg-fixed rounded-2xl [--pattern-fg:rgba(0,0,0,0.03)] dark:[--pattern-fg:rgba(255,255,255,0.03)]"></div>
    </div>
  )
}

export default SkeletonTwo

*/