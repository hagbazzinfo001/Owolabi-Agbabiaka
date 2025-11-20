"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Education from "@/components/Education";
// import Testimonials from "@/components/Testimonials";
// import Blog from '@/components/Blog';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Education /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
