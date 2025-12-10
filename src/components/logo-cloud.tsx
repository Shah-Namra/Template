'use client'
import React from "react"
import Image from "next/image"
import OpenAI from "../../public/images/open-ai-logo.png"
import CharacterAI from "../../public/images/character-ai.png"
import Portoloa from "../../public/images/portoloa-logo.png"
import Oracle from "../../public/images/oracle-logo.png"
import { motion } from "motion/react"

export const LogoCloud = () => {
  const logos = [
    { title: "OpenAI", src: OpenAI },
    { title: "Character AI", src: CharacterAI },
    { title: "Portoloa", src: Portoloa },
    { title: "Oracle", src: Oracle },
    { title: "OpenAI", src: OpenAI },
    { title: "Portoloa", src: Portoloa },
  ]

  return (
    <section className="py-16 sm:py-10 md:py-10 px-4 ">
      <h2 className="text-lg  text-center max-w-xl mx-auto text-neutral-500 dark:text-neutral-400">
        Trusted by mordern operators across industries. <br /> {" "}
        <span className="text-neutral-400 dark:text-neutral-100">From pilot to scale without chaos.</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10 ">
        {logos.map((logo, index) => (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
            key={index}
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className="size-25 object-contain mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </section >
  )
}
/*
'use client'
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import OpenAI from "../../public/images/open-ai-logo.png"
import CharacterAI from "../../public/images/character-ai.png"
import Portoloa from "../../public/images/portoloa-logo.png"
import Oracle from "../../public/images/oracle-logo.png"

export const LogoCloud = () => {
  const logos = [
    { title: "OpenAI", src: OpenAI },
    { title: "Character AI", src: CharacterAI },
    { title: "Portoloa", src: Portoloa },
    { title: "Oracle", src: Oracle },
    { title: "OpenAI", src: OpenAI },
    { title: "Portoloa", src: Portoloa },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-neutral-500 dark:text-neutral-400">
            Trusted by modern operators across industries.
          </span>
          <br className="hidden sm:block" />
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">
            From pilot to scale without chaos.
          </span>
        </motion.h2>

        {/* Infinite scroll 
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect 
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 sm:gap-16 md:gap-20"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Render logos twice for seamless loop *
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.title}
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Other version  */
/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-12 max-w-5xl mx-auto">
  {logos.map((logo, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center justify-center"
    >
      <Image
        src={logo.src}
        alt={logo.title}
        width={120}
        height={40}
        className="h-8 sm:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      />
    </motion.div>
  ))}
</div> *
</div>
</section>
)
}

*/