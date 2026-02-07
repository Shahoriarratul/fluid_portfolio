import Link from "next/link";
import React from "react";
import Navbar from "./sections/Navbar";


export default function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
    <Navbar />
    <section id="home" className='min-h-screen bg-amber-950'/>
    <section id="service" className='min-h-screen'/>
    </div>
  );
}
