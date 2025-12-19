"use client";
import { cn } from "@/lib/utils";
import { IconArrowBigUp, IconClock, IconFirstAidKitOff, IconSquareChevronDown, IconSquareRoundedLetterV } from "@tabler/icons-react"
import { icons } from "lucide-react";
import { motion } from "motion/react";
import { title } from "process";


export const SkeletonOne =() =>{
    const cardItems =[
        {title:"Personalized Emails",
        description:"Send personalized emails to your customers based on their behavior and preferences.",
        icons: <IconSquareChevronDown />,
        iconClassName:"bg-purple-500",
        badge:(
            <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 bg-neutral-100">
                <IconClock  className="size-3"/>
                <p className="text-[10px] font-bold text-neutral-600">15s</p>
            </div>
        )},
        {
            title:"Peer Review",
            description:"Review and approved 2 outputs from content Drafting Agent.",
            icons: <IconSquareChevronDown />,
        iconClassName:"bg-red-500",
            badge:(
                <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-red-100 border border-red-200">
                    <p className="text-[10px] font-bold text-red-500">FAILED</p>
                </div>
            )
        },
        {
            title:"Content Drafting",
            description:"Send personalized emails to your customers based on their behavior and preferences.",
            icons: <IconSquareChevronDown />,
            iconClassName:"bg-green-500",
            badge:(
                <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-yellow-100 bg-orange-100">
                    <p className="text-[10px] font-bold text-yellow-500">PROCESSING</p>
                </div>
            )
        },
        {
            title:"Admin Approval",
            description:"Final approval of marketing copy before publishing.",
            icons: <IconSquareRoundedLetterV />,
            iconClassName:"bg-black",
            badge:(
                <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-yellow-100 bg-orange-100">
                    <p className="text-[10px] font-bold text-yellow-500">PROCESSING</p>
                </div>
            )
        },
        {
            title:"Weekly Campign Report",
            description:"Generated campign performance report.",
            icons: <IconSquareRoundedLetterV />,
            iconClassName:"bg-indigo-500",
            badge:(
                <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 bg-neutral-100">
                    <IconClock  className="size-3"/>
                    <p className="text-[10px] font-bold text-neutral-600">2m</p>
                </div>
            )
        },
        {
            title:"SEO Audit",
            description:"Reviewed and approved 2 outputs for ..",
            icons: <IconSquareRoundedLetterV />,
            iconClassName:"bg-red-500",
            badge:(
                <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-red-100 bg-red-100">
                    <p className="text-[10px] font-bold text-red-500">FAILED</p>
                </div>
            )
        }, 
         {
            title:"Price Monitoring Agent",
            description:"Generated draft campign breif for ...",
            icons: <IconSquareRoundedLetterV />,
            iconClassName:"bg-indigo-500",
            badge:(
                <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-yellow-100 bg-orange-100">
                    <p className="text-[10px] font-bold text-yellow-500">PROCESSING</p>
                </div>
            )
        }



    ]
  return(
        <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 border border-neutral-200 mx-auto w-full h-full absolute inset-x-10 pt-2 px-2">
        <Card>
            {cardItems.map((item, index)=>(
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.title}
                className="w-full"
                >
                <CardItem 
                    key={index}
                    icon={item.icons}
                    iconClassName={item.iconClassName}
                    title={item.title}
                    description={item.description}
                    badge={item.badge}
                />
                </motion.div>
            ))}
        </Card>
    </div>
  )
}

const Card =({children}:{children: React.ReactNode} ) =>{
    return(
        <div className="flex flex-col flex-1 shadow-black/10 gap-4 rounded-tl-[16px] bg-white border border-trasparent ring-1 ring-black/10  items-start flex-1  pt-2 x-4 inset-y-2"> 
            <div className="flex  items-center border-b border-neutral-200 w-full px-4 py-2">
                <IconArrowBigUp />
                <p className="text-md font-bold text-neutral-800">  
                    Recenet Activity
                </p>
            </div>
          {children}  
        </div>
    )
}

export const CardItem =({ icon, iconClassName, title, badge, description }:{
    icon?: React.ReactNode,
    iconClassName?: string,
    title?: string, 
    description?: string,
    badge?: React.ReactNode
}) =>{
    return(
        <div className="flex justify-between items-center w-full pl-4 relative overflow-hidden">
            <div className="flex items-center gap-2">
               <div className={cn("size-5 rounded-sm bg-blue-500 text-white flex items-center justify-center", iconClassName)}>
                        {icon}
                </div>
                <p className="text-sm text-neutral-600">{title}</p>
               {badge}
            </div>
            <p className="text-sm text-neutral-500 flex-nowrap max-w-[16rem] w-full text-left whitespace-nowrap">{description}</p>
        </div>
        
    )
}

export const Tag =({text, icon}:{text:string, icon: React.ReactNode})=>{
    return(
        <div className="flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 text-sm">
            {icon}
            <p className="txt-xs text-neutral-600"> {text}</p>
        </div>
    )
}
