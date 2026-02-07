import Link from "next/link";
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";


export default function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
    <Hero/>
    <Navbar />
    </div>
  );
}
