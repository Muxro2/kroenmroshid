"use client"

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Image from "next/image";

import { useMenuStore } from "@/stores/menuStore"

import sleep from "@/lib/sleep";

export default function NavBar({docked}: {docked?: boolean}) {

  const MenuStore = useMenuStore()
  const navDocked = MenuStore.navDocked
  const setNavDocked = MenuStore.setNavDocked
  const menuOpen = MenuStore.menuOpen
  const setMenuOpen = MenuStore.setMenuOpen
  
  const controls = useAnimation()

  
  useEffect(() => {
    if (docked !== true) {
      if (navDocked) {
        controls.start("docked")
      }
        
      else {
        if (!menuOpen) {
          sleep(300).then(() => controls.start("undocked"))
          
        } else controls.start("undocked")
      }
    }
  }, [navDocked])

  
  useEffect(() => {
    if (menuOpen) {
      if (!docked) {
      sleep(200).then(() => controls.start("open")) 
        
      } else {
      controls.start("open")
      }
      
    } else controls.start("close")
  }, [menuOpen])
  

  function openMenu(toggle: boolean) {
    setMenuOpen(toggle)
    if (docked !== true) setNavDocked(toggle)
  }
  
  const navAnimate = {
    docked: {marginLeft: 0, marginTop: 0,  width: "100%", borderRadius: 0, transition: {duration: .2}},
    undocked: {marginLeft: "5%", marginTop: "5%", width: "90%", borderRadius: 10, transition: {duration: .2}},

    open: {height: "100%", transition: {duration: .3}},
    close: {height: 55, transition: {duration: .3}}
  }

  

  
  return (
    <>
    <motion.div
      variants={navAnimate}
      initial={docked? ["docked", "close"] : ["undocked", "close"]}
      animate={controls}
      transition={{ease: "easeInOut"}}
      className="rounded-lg absolute bg-white z-50 overflow-hidden">
      
      <div 
      className="rounded-lg flex justify-between items-center px-4 py-3 bg-white">
        
      <a href="/" className="origin-top-left relative">
      <Image
        src="/logo.svg"
        alt="KROEN"
        width={36}
        height={30}
        className="scale-130"
        priority
      />
      </a>

      <div className="flex gap-2">
        <Image src="/icons/bag.svg" alt="Cart" width={32} height={32} priority/>
        <Image src="/icons/face.svg" alt="Account" width={32} height={32} priority/>
        <Image src="/icons/search.svg" alt="Search" width={32} height={32} priority/>
        <button onClick={() => openMenu(!menuOpen)}>
        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} priority/>
        </button>
      </div>
      </div>
      
      <div>
        {["NEW", "COATS", "TOPS", "TROUSERS", "TRACKS", "ACCESSORIES"].map((item, i) => (
          <div key={i} className="px-4 py-2 text-[16px] font-bold">{item}</div>
        ))}
      </div>
    </motion.div>
      
      
    </>
  );
}
