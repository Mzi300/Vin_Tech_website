"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, User, Building, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/constants/brand";

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase w-fit">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Ready To <span className="text-gradient">Innovate?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              Let&apos;s discuss how VinTechs can help your business optimize operations and reach new technological heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Email Us</span>
              <a href={`mailto:${BRAND.contact.email}`} className="text-xl font-bold text-white hover:text-accent transition-colors flex items-center gap-2">
                {BRAND.contact.email}
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Call Us</span>
              <span className="text-xl font-bold text-white">
                {BRAND.contact.phone}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
             <span className="text-xs font-bold text-accent uppercase tracking-wider">Headquarters</span>
             <a 
               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.contact.address)}`}
               target="_blank"
               rel="noopener noreferrer"
               className="text-lg text-slate-300 leading-tight hover:text-accent transition-colors flex items-center gap-2"
             >
               {BRAND.contact.address}
               <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
             </a>
          </div>

          {/* Map Placeholder or Icon Graphic */}
          <div className="mt-4 p-8 glass rounded-3xl border-accent/20 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-accent/5 opacity-50 group-hover:opacity-100 transition-opacity" />
             <MapPin size={60} className="text-accent animate-bounce" />
             <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Viewing Johannesburg Hub</span>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <div className="glass-card p-10 relative overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center gap-6 min-h-[400px]"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={40} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400">Our specialists will review your request and get back to you within 24 hours.</p>
                </div>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Your Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        required 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Company / Organization</label>
                    <div className="relative group">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-accent transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Your Company" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Your Message</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-slate-500 group-focus-within:text-accent transition-colors" />
                      <textarea 
                        required 
                        rows={4} 
                        placeholder="How can we help your business?" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none resize-none" 
                      />
                    </div>
                </div>

                <Button size="lg" className="w-full py-4 group overflow-hidden relative">
                   <span className="relative z-10 flex items-center gap-2">
                     Submit Request
                     <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
