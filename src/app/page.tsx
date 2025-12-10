import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-display ">
      <Hero />
      {/* <ModeToggle /> */}
      <LogoCloud />
      <Features />
    </div>
  );
}
