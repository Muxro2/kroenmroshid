"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Splash() {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [50, 600], [0, 150]);
  const smoothY = useSpring(scrollProgress, { mass: 0.1 });

  return (
    <div className="relative w-full h-160 pt-18 flex overflow-hidden">
      <Image
        src="/splash.webp"
        alt=""
        fill
        priority
        className="object-cover -scale-x-110 scale-y-110 object-[25%_50%] -z-10"
      />
      <div className="w-screen mx-4 flex flex-col justify-center gap-8 text-white">
        <h1 className="w-[45%] mb-8 title text-shadow-[0_0_4px] text-shadow-black">
          Built for the Elements. Designed for Life.
        </h1>
        <h2 className="w-[70%] text-md ">
          Modern outdoor wear that fuses peformance, style, and sustainability.
        </h2>

        <div className="w-full text-md flex justify-center gap-4">
          <h1 className="flex-1 py-2 bg-black text-center text-white rounded-md">
            Browse New
          </h1>
          <a href="/collections" className="flex-1 py-2 bg-white text-center text-black rounded-md">
            Collections
          </a>
        </div>
      </div>
    </div>
  );
}
