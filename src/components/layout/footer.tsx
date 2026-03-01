"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const navItems = [
  { label: "Le Bilan", href: "/bilan" },
  { label: "L'Agenda", href: "/agenda" },
  { label: "Décodeur", href: "/decodeur" },
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
                  HORIZON <span className="text-benin-yellow">BÉNIN</span>
                </span>
              </Link>
              <h3 className="editorial-heading text-3xl md:text-5xl mb-8 leading-tight text-white/90">
                Ouvrons ensemble <br/>
                <span className="text-benin-yellow italic">de nouveaux horizons.</span>
              </h3>
              <p className="text-white/60 text-xl leading-relaxed max-w-lg">
                La vision du duo Romuald Wadagni & Mariam Chabi Talata pour un Bénin prospère, industriel et solidaire.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://facebook.com/HorizonBenin2026" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-[#0C1A13] transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/HorizonBenin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-[#0C1A13] transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/HorizonBenin2026" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-[#0C1A13] transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Section 2: Explore & Legal */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-benin-yellow">Plateforme</h3>
                <ul className="space-y-5">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-lg font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-4 border-t border-white/5 space-y-5">
                    <Link href="/mentions-legales" className="block text-white/40 hover:text-white transition-colors text-sm font-medium">Mentions légales</Link>
                    <Link href="/confidentialite" className="block text-white/40 hover:text-white transition-colors text-sm font-medium">Confidentialité</Link>
                    <Link href="/cookies" className="block text-white/40 hover:text-white transition-colors text-sm font-medium">Cookies</Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-benin-yellow">Contact</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="mailto:contact@wadagnitalata2026.bj" className="text-white/70 hover:text-white transition-colors text-lg font-medium flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      contact@wadagnitalata2026.bj
                    </a>
                  </li>
                  <li className="text-white/40 text-base leading-relaxed">
                    Quartier Général National<br/>
                    Cotonou, République du Bénin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
            <p>&copy; 2026 Wadagni & Talata. Tous droits réservés.</p>
            <p className="tracking-[0.4em] text-white/20 uppercase">HORIZON BÉNIN</p>
          </div>
          <p className="text-center text-xs text-white/20 leading-relaxed">
            Ce site est une initiative citoyenne éditée par un mouvement indépendant de soutien au duo Wadagni-Talata dans le cadre de l'élection présidentielle du 12 avril 2026. Il ne constitue pas un site officiel de campagne ni une communication officielle du duo ou du Gouvernement.
          </p>
        </div>
      </div>
    </footer>
  );
}