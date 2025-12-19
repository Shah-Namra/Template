"use client"
import { cn } from "@/lib/utils"
import { Icon24Hours } from "@tabler/icons-react"
import {motion} from "motion/react"

export const SkeletonOne =() =>{
  return(
    <div className="flex-1 bg-neutral-200  max-w-sm mx-auto w-full absolute inset-x-0 bottom-0 h-full w-full rounded-t-3xl border border-neutral-200 p-2 shadow-lg shadow-black/10 space-y-2">
        <Card 
            title="Connect Data" 
            description="Link CRMs, helpdesks, and APIs to give agents secure, role-based access" 
            tags={[
                {text:"Salesforce", icon:<Icon24Hours className="size-3"/>},
                {text:"Hubspot", icon:<Icon24Hours className="size-3"/>},
                {text:"Sheets", icon:<Icon24Hours className="size-3"/> }
            ]} 
        />
        <Card 
            title="Connect Data" 
            description="Link CRMs, helpdesks, and APIs to give agents secure, role-based access" 
            tags={[
                {text:"Salesforce", icon:<Icon24Hours className="size-3"/>},
                {text:"Hubspot", icon:<Icon24Hours className="size-3"/>},
                {text:"Sheets", icon:<Icon24Hours className="size-3"/> }
            ]} 
        />
        <Card 
            title="Connect Data" 
            description="Link CRMs, helpdesks, and APIs to give agents secure, role-based access" 
            tags={[
                {text:"Salesforce", icon:<Icon24Hours className="size-3"/>},
                {text:"Hubspot", icon:<Icon24Hours className="size-3"/>},
                {text:"Sheets", icon:<Icon24Hours className="size-3"/> }
            ]} 
        />
        
    </div>
  )
}

export const Card =({topIcon, title, description, tags}:{
    topIcon?: React.ReactNode,
    title?: string,
    description?: string,
    tags?: {text:string, icon: React.ReactNode}[],
}) =>{
    const randomColors = [
  'bg-blue-500',
  'bg-red-500',
  'bg-green-500',
];

    return(
        <div className=" p-4 shadow-black/10 gap-4 rounded-[16px] bg-white border border-trasparent ring-1 ring-black/10 flex items-start"> 
            <div className={cn("size-6 shrink-0 mt-1 rounded-full items-center flex justify-center",
                randomColors[Math.floor(Math.random()*randomColors.length)]
            )}>
                {topIcon}
            </div>
            <div> 
                <p className="text-lg font-bold text-neutral-800">
                    {title}
                </p>
                <p className="text-base  text-neutral-600">
                    {description}
                </p>
                <div className="mt-2 flex flex-row flex-wrap gap-2 items-center">
                    {tags?.map((tag, index)=>(
                        <Tag key={index} text={tag.text} icon={tag.icon} />
                    ))}
                </div>
            </div>
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
// fountianhas
// cream choco ice-cream
// cashews feni xacuti balchao
//Goan pork vindaloo
// morjim beach night
