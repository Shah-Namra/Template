import React from 'react'
import { Container } from '../container'
import { Heading } from '../heading'
import { Subheading } from '../sub-heading'
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from './card'
import { IconPlus } from '@tabler/icons-react'
import { SkeletonOne } from './skeletons/first'

export const Features = () => {
    return (
        <Container className='py-10 md:py-20 lg:py-32'>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 mb-10 md:mb-16 lg:mb-20">
                <Heading className='max-w-2xl'>
                    Built for fast-moving <br />Teams That Need Control
                </Heading>
                <Subheading className='max-w-xl py-0'>
                    Agents work inside your existing tools, with built-in approvals,
                    brand and policy guardrails, and full traceability. Every action is
                    auditable, every outcome accountable.
                </Subheading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className='md:rounded-tl-3xl md:rounded-bl-3xl'>
                    <CardSkeleton>
                        <SkeletonOne />
                    </CardSkeleton>
                    <CardContent>
                        <div className='flex items-start justify-between gap-4'>
                            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
                            <CardCTA>
                                <IconPlus className='size-4 md:size-5' />
                            </CardCTA>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardSkeleton>
                    </CardSkeleton>
                    <CardContent>
                        <div className='flex items-start justify-between gap-4'>
                            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
                            <CardCTA>
                                <IconPlus className='size-4 md:size-5' />
                            </CardCTA>
                        </div>
                    </CardContent>
                </Card>

                <Card className='md:rounded-tr-3xl md:rounded-br-3xl'>
                    <CardSkeleton>
                    </CardSkeleton>
                    <CardContent>
                        <div className='flex items-start justify-between gap-4'>
                            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
                            <CardCTA>
                                <IconPlus className='size-4 md:size-5' />
                            </CardCTA>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Container>
    )
}