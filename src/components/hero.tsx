'use client'

import React from 'react'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './sub-heading'
import { Button } from './ui/button'
import Link from 'next/link'
import { LandingImages } from './landing-images'
import { motion } from 'motion/react'

export const Hero = () => {
  return (
    <section className='pt-24 sm:pt-28 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-8'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Heading as="h1" className='max-w-4xl'>
            Agents that do the work<br />Approvals that keep you safe.
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Subheading className='py-6 sm:py-8 max-w-2xl'>
            Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.
          </Subheading>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button className='shadow-brand w-full sm:w-auto'>
            Start Your Free Trial
          </Button>
          <Button asChild variant='outline' className='w-full sm:w-auto'>
            <Link href='/#'>
              View Role Based Demos
            </Link>
          </Button>
        </motion.div>

        <LandingImages />
      </Container>
    </section>
  )
}