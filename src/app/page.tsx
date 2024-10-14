import { MarqueeDemo } from "../components/magic/MagicUi";
import { Marquee3D } from "@/components/magic/XToY";
import { IconCloudDemo } from "@/components/magic/Cloud";
import { OrbitingCirclesDemo } from "@/components/magic/Circle";
import { DockDemo } from "@/components/magic/Dock";
import { AnimatedCircularProgressBarDemo } from "@/components/magic/CircularBar";
import { AnimatedBeamDemo } from "@/components/magic/Beam";
import { BoxRevealDemo } from "@/components/magic/Reveal";

export default function Home() {
  return (
    <>
      <AnimatedCircularProgressBarDemo />
      <DockDemo />
      <AnimatedBeamDemo />
      <BoxRevealDemo/>
      <MarqueeDemo />
      <Marquee3D />
      <IconCloudDemo />
      <OrbitingCirclesDemo />
    </>
  );
}
