import React from "react";
import Link from "next/link";
import cn from "../../lib/utils";
import { Logo, LogoIcon } from "./logo";
import { Container } from "./container";
import { Button } from "./ui/button";
export const Navbar = () => {
  const navLinks = [
    { title: "Features", href: "/features" },
    { title: "Product", href: "/product" },
    { title: "Socials", href: "/socials" },
    { title: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className=" py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium "
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm px-4 py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Login
          </Link>
          <Button>Sign Up</Button>
        </div>
      </Container>
    </div>
  );
};
