"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const navItems = [
  { label: "Le Bilan", href: "/bilan" },
  { label: "L'Assistant", href: "/assistant" },
  { label: "Vrai ou Faux", href: "/decodeur" },
  { label: "Espace Citoyen", href: "/espace-citoyen" },
];

export function Footer() {
  return (
    <footer className="bg-[#0C1A13] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container-safe relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Section 1: Branding & Vision */}
          <div className="space-y-10">
            <div>
              <Link href="/" className="inline-block mb-8">
                <span className="font-serif text-4xl font-bold tracking-tight">
                  Wadagni<span className="text-benin-yellow">2026</span>
                </span>
              </Link>
              <h3 className="editorial-heading text-3xl md:text-5xl mb-8 leading-tight text-white/90">
                Bâtissons ensemble <br/> 
                <span className="text-benin-yellow italic">le Bénin de demain.</span>
              </h3>
              <p className="text-white/60 text-xl leading-relaxed max-w-lg">
                Une vision portée par Romuald Wadagni & Mariam Chabi Talata pour une nation prospère, industrielle et solidaire.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-[#0C1A13] transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-[#0C1A13] transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-[#0C1A13] transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Section 2: Explore & Legal */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-yellow">Plateforme</h5>
                <ul className="space-y-5">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-lg font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-8">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-yellow">Contact</h5>
                <ul className="space-y-5">
                  <li>
                    <a href="mailto:contact@wadagni2026.bj" className="text-white/70 hover:text-white transition-colors text-lg font-medium flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      contact@wadagni2026.bj
                    </a>
                  </li>
                  <li className="text-white/40 text-base leading-relaxed">
                    Quartier Général National<br/>
                    Cotonou, République du Bénin
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 space-y-6">
              <div className="h-px w-full bg-white/5" />
              <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
                <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
                <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <p>&copy; 2026 Wadagni & Talata. Tous droits réservés.</p>
          <p className="tracking-[0.4em]">Bénin 2026</p>
        </div>

      </div>
    </footer>
  );
}