import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Speed } from "@/components/speed";
import { Outcome } from "@/components/outcome";
import { FeaturersTertiary } from "@/components/features-tertiary";
export default function Home() {
  return (
    <div className="min-h-screen font-display ">
      <Hero />
      {/* <ModeToggle /> */}
      <LogoCloud />
      <Features />
      <Speed />
      <FeaturesSecondary />
      <Outcome />
      <FeaturersTertiary />
    </div>
  );
}
