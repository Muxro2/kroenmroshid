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
        src="/hero.jpeg"
        alt=""
        fill
        priority
        className="object-cover -z-10 scale-120 object-[35%_0]"
      />
      <div className="w-screen mx-4 flex flex-col justify-center gap-8 text-white">
        <h1 className="w-[60%] mb-14 title font-bold text-shadow-[0_0_4px] text-shadow-black">
          CONTROL YOUR CLIMATE
        </h1>
        <h2 className="w-[50%] text-md text-shadow-lg">
          Modern technical wear designed for life in motion.
        </h2>

         
          <a href="/collections" className="w-fit px-4 py-2 bg-white text-center text-black rounded-md shadow-lg">
            Explore Collections
          </a>
        
      </div>
    </div>
  );
}
