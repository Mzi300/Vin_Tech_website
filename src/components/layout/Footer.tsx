import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/constants/brand";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative bg-slate-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)] overflow-hidden border border-white/10">
              <Image 
                src="/logo.png" 
                alt="VinTechs Logo" 
                fill
                className="object-cover scale-110"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xl font-bold tracking-tighter text-white leading-none">
                Vin<span className="text-accent">Techs</span>
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading digital transformation in South Africa through intelligent systems and innovative software solutions.
          </p>
          <div className="flex gap-4">
            <Link href={BRAND.contact.socials.linkedin} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all font-bold text-xs">
              LI
            </Link>
            <Link href={BRAND.contact.socials.twitter} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all font-bold text-xs">
              TW
            </Link>
            <Link href={BRAND.contact.socials.github} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all font-bold text-xs">
              GH
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: "Home", href: "#hero" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Products", href: "#products" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-slate-400 text-sm hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold">Contact Us</h4>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${BRAND.contact.email}`} className="flex items-center gap-3 text-slate-400 text-sm hover:text-accent transition-colors">
              <Mail size={18} className="text-accent" />
              {BRAND.contact.email}
            </a>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone size={18} className="text-accent" />
              {BRAND.contact.phone}
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-slate-400 text-sm leading-tight hover:text-accent transition-colors"
            >
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              {BRAND.contact.address}
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold">Newsletter</h4>
          <p className="text-slate-400 text-sm">Subscribe to get latest tech insights and updates.</p>
          <div className="flex gap-2 p-1 glass rounded-full ring-1 ring-white/10 focus-within:ring-accent transition-all">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none focus:ring-0 text-sm px-4 py-2 w-full text-white placeholder:text-slate-500"
            />
            <button className="bg-accent text-primary px-4 py-2 rounded-full font-bold text-xs hover:bg-white transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs text-center md:text-left">
          © {new Date().getFullYear()} VinTechs Solutions (Pty) Ltd. All rights reserved. 
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-slate-500 text-xs hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-slate-500 text-xs hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};
