"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Database, ShieldCheck, Cloud, Cpu, ArrowRight, Zap, Globe } from "lucide-react";
import { BRAND } from "@/constants/brand";

const RoleIcon = ({ role }: { role: string }) => {
  if (role.includes("Lead")) return <Code2 size={24} className="text-accent" />;
  if (role.includes("API")) return <Database size={24} className="text-accent" />;
  if (role.includes("Automation")) return <Cpu size={24} className="text-accent" />;
  if (role.includes("Cyber")) return <ShieldCheck size={24} className="text-accent" />;
  if (role.includes("Cloud")) return <Cloud size={24} className="text-accent" />;
  return <User size={24} className="text-accent" />;
};

export const TeamSection = () => {
  return (
    <section className="section-padding bg-slate-900/30" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Mission & Vision Showcasing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-accent/20 flex flex-col gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary shadow-lg shadow-accent/20">
              <Zap size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              {BRAND.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-highlight/20 flex flex-col gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-highlight flex items-center justify-center text-primary shadow-lg shadow-highlight/20">
              <Globe size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              {BRAND.vision}
            </p>
          </motion.div>
        </div>

        <header className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase">
            The Experts Behind VinTechs
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Architects <span className="text-gradient">Of Innovation.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Our team consists of highly specialized professionals dedicated to solving complex business challenges with world-class engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BRAND.team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5 group hover:border-accent/40 hover:bg-slate-800/50 transition-all flex flex-col items-center text-center gap-4"
            >
              <div className="w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <RoleIcon role={member.role} />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-white leading-tight">{member.name}</h4>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-2">{member.role}</p>
              </div>

              <div className="flex flex-wrap gap-1 justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                {member.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] text-slate-400 whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-4 mt-auto">
                <button className="text-[10px] uppercase font-bold text-slate-500 hover:text-accent transition-all flex items-center gap-1 group/btn">
                   Full Profile
                   <ArrowRight size={10} className="group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
