"use client";
import React from 'react';
import { Container } from './container';
import { LandingImages } from './landing-images';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Subheading } from './sub-heading';
import { Heading } from './heading';

export const Speed =() =>{
    return(
        <section>
            <Container>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Heading as="h1" className='max-w-4xl'>
                    Built for Speed<br />Designed for Scale.
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
            
               
            
                <LandingImages />
            </Container>
        </section>
    )
}