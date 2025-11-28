import React from 'react'
import { Container } from './container'
import { Heading } from './heading'

export const Hero = () => {
  return (
    <div className='pt-10 md:pt-20 lg:pt-32'>
        <Container>
            <Heading as="h1">
              Agents that do the work<br/>Approvals that keep you safe
            </Heading>
        </Container>
    </div>
  )
}