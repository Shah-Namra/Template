import { Hero } from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-display">
      <Hero />
      <ModeToggle />

    </div>
  );
}
