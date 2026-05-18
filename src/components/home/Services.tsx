"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, Cpu, Link, Smartphone, Zap, Repeat, 
  LayoutDashboard, Cloud, ShieldAlert, Wrench, BarChart3 
} from "lucide-react";
import { BRAND } from "@/constants/brand";

const ICONS: Record<string, React.ElementType> = {
  Globe, Cpu, Link, Smartphone, Zap, Repeat, 
  LayoutDashboard, Cloud, ShieldAlert, Wrench, BarChart3 
};

const ServiceCard = ({ 
  title, 
  description, 
  iconName, 
  index 
}: { 
  title: string; 
  description: string; 
  iconName: string; 
  index: number 
}) => {
  const IconComponent = ICONS[iconName] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-8 group hover:border-accent/40 transition-all cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

export const ServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Architecting <span className="text-gradient">Business Efficiency.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            From intelligent automation to secure cloud deployment, we help your organization operate at peak performance through modern IT solutions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND.services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
