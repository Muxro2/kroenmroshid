"use client"

import Image from "next/image";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";




export default function Splash() {
  const {scrollY} = useScroll()
  const scrollProgress = useTransform(scrollY, [50,600], [0, 150])
  const smoothY = useSpring(scrollProgress, {mass: 0.1})

  return (
    <div className="relative w-full h-140 flex justify-center overflow-hidden">
      <Image
        src="/landing.jpeg"
        alt=''
        fill
        className='object-cover scale-150 object-right'
        />
      <motion.h1 style={{ y: smoothY }} className="absolute bottom-15 text-white text-[112px] leading-[112px] tracking-[10px] font-barlow text-shadow-lg/50">KROEN</motion.h1>
    </div>
  );
}
