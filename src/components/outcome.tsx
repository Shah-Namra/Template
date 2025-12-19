"use client";
import React from 'react';
import { Container } from './container';
import { LandingImages } from './landing-images';
import { motion } from 'motion/react';
import { Subheading } from './sub-heading';
import { Heading } from './heading';

export const Outcome =() =>{
    return(
        <section className='py-10 md:py-20'>
            <Container>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Heading as="h1" className='max-w-4xl'>
                    Governed Ai,<br />Trusted Outcomes.
                  </Heading>
                </motion.div>
            
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Subheading className='py-6 sm:py-8 max-w-2xl'>
                    Deploy Al agents with built-in approvals, brand guardrails,
                    and audit trails. Every step is visible, reviewable, and
                    compliant.
                  </Subheading>
                </motion.div>
                <LandingImages />
            </Container>
        </section>
    )
}