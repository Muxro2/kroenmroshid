"use client"

import Image from "next/image";
import {motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function NavBar() {
  const {scrollY} = useScroll()
  const logoScale = useTransform(scrollY, [500,550], [1, 0.5])
  const smoothScale = useSpring(logoScale, {mass: 0.1})

  return (
    <div className="fixed w-screen p-4 flex justify-between items-start z-10">
      <motion.div style={{ scale: smoothScale }} className="origin-top-left relative">
      <Image
        src="/logo.svg"
        alt="KROEN"
        width={100}
        height={100}
        className="scale-120"
      />
      </motion.div>

      <div className="flex gap-1.5">
        <Image src="/icons/bag.svg" alt="Cart" width={40} height={40} />
        <Image src="/icons/face.svg" alt="Account" width={40} height={40} />
        <Image src="/icons/search.svg" alt="Search" width={40} height={40} />
        <Image src="/icons/menu.svg" alt="Menu" width={40} height={40} />
      </div>
    </div>
  );
}
