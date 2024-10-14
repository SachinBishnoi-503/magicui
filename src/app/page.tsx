import Image from "next/image";
import { MarqueeDemo } from "../components/magic/MagicUi";
import { Marquee3D } from "@/components/magic/XToY";
import { IconCloudDemo } from "@/components/magic/Cloud";
import { OrbitingCirclesDemo } from "@/components/magic/Circle";

export default function Home() {
  return (
    <>
      <MarqueeDemo />
      <Marquee3D />
      <IconCloudDemo />
      <OrbitingCirclesDemo />
    </>
  );
}
