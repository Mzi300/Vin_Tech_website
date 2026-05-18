"use client";

import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/constants/brand";

export const LogoTicker = () => {
    // Duplicate the partners array to create a seamless loop
    const partners = [...BRAND.partners, ...BRAND.partners];

    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] py-4">
            <motion.div
                className="flex flex-none gap-16 pr-16"
                animate={{
                    translateX: "-50%",
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {partners.map((partner, index) => (
                    <div 
                        key={`${partner.id}-${index}`} 
                        className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                            <span className="text-white font-black text-xs">{partner.name.charAt(0)}</span>
                        </div>
                        <span className="text-white/80 font-bold text-sm tracking-tight group-hover:text-white transition-colors">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
