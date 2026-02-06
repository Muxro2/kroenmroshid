"use client"

import Image from "next/image";
import {motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function NavBar({docked}: {docked?: boolean}) {
  
  const {scrollY} = useScroll()
  const navY = useTransform(scrollY, [0, 100], [0, 100])
  const smoothY = useSpring(navY, {mass: .1})

  return (
    <div className={`${docked?  "w-full" : "w-[90%] m-[5%] rounded-lg"} absolute px-4 py-3 flex justify-between items-center z-10 bg-white`}>
      <a href="/" className="origin-top-left relative">
      <Image
        src="/logo.svg"
        alt="KROEN"
        width={36}
        height={30}
        className="scale-130"
      />
      </a>

      <div className="flex gap-2">
        <Image src="/icons/bag.svg" alt="Cart" width={32} height={32} />
        <Image src="/icons/face.svg" alt="Account" width={32} height={32} />
        <Image src="/icons/search.svg" alt="Search" width={32} height={32} />
        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} />
      </div>
    </div>
  );
}
