"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/constants/brand";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image?: string;
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const isVinMaps = product.id === "vinmaps";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 rounded-[2.5rem] overflow-hidden border border-white/5 ${
        isVinMaps ? "bg-gradient-to-br from-slate-900/80 to-accent/5" : "bg-gradient-to-bl from-slate-900/80 to-highlight/5"
      }`}
    >
      {/* Product Image/Visual */}
      <div className={`relative aspect-video rounded-3xl overflow-hidden glass border-white/10 ${isVinMaps ? "lg:order-2" : ""}`}>
        <div className={`absolute inset-0 bg-gradient-to-tr ${isVinMaps ? "from-accent/20" : "from-highlight/20"} to-transparent opacity-40`} />
        
        {/* Placeholder for Dynamic Visuals (until image generation) */}
        <div className="absolute inset-0 flex items-center justify-center">
            {isVinMaps ? (
              <Image 
                src="/products/vinmaps-ui.png" 
                alt="VinMaps Interface" 
                fill 
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-highlight">
                <ShoppingBag size={80} className="animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Commerce Engine Ready</span>
              </div>
            )}
        </div>

        {/* Feature Floating Badge */}
        <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full border-white/20 flex items-center gap-2">
            <Zap size={14} className={isVinMaps ? "text-accent" : "text-highlight"} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Enterprise Build</span>
        </div>
      </div>

      {/* Product Specs */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isVinMaps ? "bg-accent/20 text-accent font-bold" : "bg-highlight/20 text-highlight font-bold"}`}>
            0{index + 1}
          </div>
          <h3 className="text-4xl font-bold text-white tracking-tighter mt-4">{product.name}</h3>
          <p className={`text-sm font-semibold uppercase tracking-widest ${isVinMaps ? "text-accent" : "text-highlight"}`}>
            {product.tagline}
          </p>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed">
          {product.description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.features.map((feature: string, fIdx: number) => (
            <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 size={18} className={isVinMaps ? "text-accent flex-shrink-0" : "text-highlight flex-shrink-0"} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Button variant={isVinMaps ? "primary" : "outline"} className={!isVinMaps ? "text-highlight border-highlight hover:bg-highlight/10" : ""}>
            View Case Study
            <ArrowUpRight size={18} />
          </Button>
          <Button variant="secondary">
            Request Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProductShowcase = () => {
  return (
    <section className="section-padding bg-slate-950/50" id="products">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold tracking-widest uppercase">
            Flagship Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Innovations Built <span className="text-gradient">For Impact.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            We don&apos;t just build software; we architect ecosystems. Explore our flagship products designed for real-world intelligence and operational excellence.
          </p>
        </header>

        <div className="flex flex-col gap-12 lg:gap-24">
          {BRAND.products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
