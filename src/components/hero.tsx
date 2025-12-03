import React from 'react'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './sub-heading'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import heroImage from "../../public/images/dashboard-image.jpg"
import { cn } from '@/lib/utils'
import { LandingImages } from './landing-images'

export const Hero = () => {
  return (
    <div className='pt-10 md:pt-20 lg:pt-32'>
      <Container>
        <Heading as="h1">
          Agents that do the work<br />Approvals that keep you safe.
        </Heading>
        <Subheading className='py-8'>
          Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
        </Subheading>
        <div className='flex items-center gap-6'>
          <Button className='shadow-brand'>
            Start Your Free trial
          </Button>
          <Button asChild variant='outline'>
            <Link href='/#'>
              View role based demos
            </Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </div>
  )
}