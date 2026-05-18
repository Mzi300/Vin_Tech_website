"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Map, CloudSun, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoTicker } from "@/components/ui/LogoTicker";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/sections/hero.png" 
          alt="VinTechs Corporate Hub" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-wider uppercase">
            <Zap size={14} />
            Next-Gen IT Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
            Empowering <span className="text-gradient">Efficiency</span> Through Intelligent Systems.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
            VinTechs provides enterprise-level software, automation, and data-driven solutions to help your business operate smarter, faster, and more securely.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="px-8 shadow-lg shadow-accent/20">
              Explore Our Services
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Social Proof / Partners Ticker */}
          <div className="pt-8 flex flex-col gap-4 max-w-sm sm:max-w-md lg:max-w-lg">
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Trusted By Innovative Brands</span>
            <LogoTicker />
          </div>
        </motion.div>

        {/* Hero Visual — VinTechs Capabilities Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-square lg:aspect-video w-full max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 glass-card p-6 flex flex-col gap-5 overflow-hidden border-accent/20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                  <Zap size={16} className="text-primary" />
                </div>
                <span className="text-sm font-bold">VinTechs Dashboard</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Capability Cards */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-4 flex flex-col justify-between col-span-2 sm:col-span-1 group hover:border-accent/40 transition-colors">
                <Zap size={24} className="text-accent mb-2" />
                <div>
                  <div className="text-xs font-bold">AI Systems</div>
                  <div className="text-[10px] text-slate-400 mt-1">Intelligent automation &amp; predictive analytics</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex flex-col justify-between col-span-2 sm:col-span-1 group hover:border-accent/40 transition-colors">
                <CloudSun size={24} className="text-accent mb-2" />
                <div>
                  <div className="text-xs font-bold">Cloud Infrastructure</div>
                  <div className="text-[10px] text-slate-400 mt-1">Scalable &amp; resilient cloud solutions</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex flex-col justify-between col-span-2 group hover:border-accent/40 transition-colors">
                <Map size={24} className="text-accent mb-2" />
                <div>
                  <div className="text-xs font-bold">Enterprise Automation</div>
                  <div className="text-[10px] text-slate-400 mt-1">End-to-end workflow optimization for modern teams</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <span>VinTechs Solutions</span>
              <span>South Africa</span>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-accent/40 shadow-xl hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                 <Zap size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Enterprise Ready</span>
                <span className="text-[10px] text-slate-400">Built for scale</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
