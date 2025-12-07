"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { Container } from "./container";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Product", href: "/product" },
  { title: "Socials", href: "/socials" },
  { title: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <DesktopNavbar />
      <MobileNavbar />
    </motion.div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <div className="flex md:hidden px-4 sm:px-6 py-4 justify-between items-center">
      <Logo />
      <button 
        onClick={() => setOpen(!open)} 
        className="z-50 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <IconLayoutSidebar stroke={2} className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-black border-l border-neutral-200 dark:border-neutral-800 z-50 overflow-y-auto"
            >
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex justify-between items-center">
                  <Logo />
                  <button 
                    onClick={() => setOpen(false)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <IconX stroke={2} className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col p-6">
                <div className="flex flex-col gap-1 mb-8">
                  {navLinks.map((item, index) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      key={index + item.title}
                    >
                      <Link 
                        href={item.href} 
                        className="block px-4 py-3 text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-col gap-3 pt-6 border-t border-neutral-200 dark:border-neutral-800"
                >
                  <Link
                    href="/login"
                    className="text-center px-4 py-2.5 rounded-lg text-neutral-600 dark:text-neutral-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                  <Button 
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4 hidden md:flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-8">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm px-4 py-2 rounded-lg text-neutral-600 dark:text-neutral-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          Login
        </Link>
        <Button>Sign Up</Button>
      </div>
    </Container>
  );
};