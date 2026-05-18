"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    {
      name: "Our Products",
      href: "#products",
      subItems: [
        { 
          name: BRAND.products[0].name, 
          href: "#products", 
          description: "Flagship 3D Mapping & Logistics Intelligence",
          icon: "Map"
        },
      ]
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative bg-slate-900 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden border border-white/10">
            <Image 
              src="/logo.png" 
              alt="VinTechs Logo" 
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold tracking-tighter text-white leading-none">
              Vin<span className="text-accent">Techs</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-accent transition-colors relative flex items-center gap-1.5 py-2"
              >
                {link.name}
                {link.subItems && (
                  <motion.span 
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    className="text-[10px] opacity-50"
                  >
                    ▼
                  </motion.span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>

              {/* Dropdown Menu */}
              {link.subItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-50">
                  <div className="w-72 glass p-5 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl bg-slate-900/95">
                    <div className="flex flex-col gap-3">
                       <span className="text-[11px] font-black text-accent uppercase tracking-[0.2em] px-2 mb-1">
                         Our Innovations
                       </span>
                       {link.subItems.map((sub) => (
                         <Link
                           key={sub.name}
                           href={sub.href}
                           className="flex flex-col p-4 rounded-xl hover:bg-white/10 transition-colors group/sub border border-transparent hover:border-white/10 shadow-sm"
                         >
                           <span className="text-base font-black text-white group-hover/sub:text-accent transition-colors">
                             {sub.name}
                           </span>
                           <span className="text-xs text-slate-300 leading-relaxed mt-1.5 font-medium">
                             {sub.description}
                           </span>
                         </Link>
                       ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="#contact" className="btn-primary py-2 px-4 text-xs">
            Request Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b border-white/10 md:hidden overflow-hidden bg-slate-950/95 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  {link.subItems ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-1">
                        {link.name}
                      </span>
                      <div className="flex flex-col gap-3 pl-3 border-l border-white/10">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-sm font-bold text-white hover:text-accent transition-colors">
                              {sub.name}
                            </span>
                            <span className="text-xs text-slate-400 mt-1 leading-relaxed">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-slate-300 hover:text-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="btn-primary w-full justify-center py-3 text-sm font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
