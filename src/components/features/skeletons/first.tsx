import { cn } from '@/lib/utils'
import { IconCircleDashedCheck, IconClock, IconRipple } from '@tabler/icons-react'
import { div } from 'motion/react-client'
import react from 'react'

export const SkeletonOne = () => {
    return (
        <div>
            <SkeletonCard
                title='Campaign Planner'
                description='Creates clear, ready-to-use campaign briefs using product info, audience data, and past results'
                badge={<Badge variant={'danger'} text="102s" />}
                icon={<IconCircleDashedCheck className='size-4' />}
                className="absolute inset-0"
            />
        </div>
    )
}


const SkeletonCard = ({ icon, title, description, badge, className }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className='max-w-[90%] h-fit my-auto  bg-neutral-100 mx-auto w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-700'>
            <div className='flex gap-3 items-center'>
                {icon}
                <p className='text-sm font-bold text-black dark:text-white'> {title}</p>
                {badge}
            </div>
            <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3 '>
                {description}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
                <Tag text='Google Ads' />
                <Tag text='Saas' />
                <Tag text='Content' />
            </div>
        </div>
    )
}
const Tag = ({ text }: { text: string }) => {
    return (
        <div className='px-2 py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700 text-xs'>
            {text}
        </div>

    )
}
const Badge = ({ variant, text }: {
    variant: "danger" | "success" | "warning",
    text: string;
}) => {
    return (
        <div className={cn('px-1 py-0.5 rounded-full flex items-center gap-1 w-fit',
            variant == "danger" && "bg-red-300/10  border-red-300 text-red-500",
            variant == "warning" && "bg-yellow-300/10  border-yellow-300 text-yellow-500",
            variant == "success" && "bg-green-300/10  border-green-300 text-green-500"
        )}>
            <IconClock className={cn('size-4')} />
            <IconRipple className='size-3' />
            <p className='text-[10px] font-bold'>
                {text}
            </p>
        </div>
    )
}