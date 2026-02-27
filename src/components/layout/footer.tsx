import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Le Bilan", href: "/bilan" },
  { label: "L'Assistant", href: "/assistant" },
  { label: "Le Décodeur", href: "/decodeur" },
  { label: "Le QG Citoyen", href: "/qg" },
];

export function Footer() {
  return (
    <footer className="bg-[#0C1A13] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container-safe relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Section 1: Vision & Engagement */}
          <div className="space-y-10">
            <div>
              <Link href="/" className="inline-block mb-8">
                <span className="font-serif text-3xl font-bold tracking-tight">
                  Wadagni<span className="text-benin-yellow">2026</span>
                </span>
              </Link>
              <h3 className="editorial-heading text-3xl md:text-4xl mb-6 leading-tight text-white/90">
                Bâtissons ensemble <br/> 
                <span className="text-benin-yellow italic">le Bénin de demain.</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                Une vision portée par Romuald Wadagni & Mariam Chabi Talata pour une nation prospère, industrielle et solidaire.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[40px]">
              <h4 className="font-serif text-xl mb-4">Rejoindre la dynamique</h4>
              <p className="text-white/50 text-sm mb-6">Inscrivez-vous pour recevoir les actualités du duo candidat.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-1 h-12 bg-white/5 border border-white/10 rounded-full px-6 text-sm outline-none focus:border-benin-yellow transition-colors"
                />
                <Button className="h-12 px-6 bg-benin-yellow hover:bg-benin-yellow-dark text-[#0C1A13] font-bold rounded-full">
                  S'inscrire
                </Button>
              </div>
            </div>
          </div>

          {/* Section 2: Explorer & Agir */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-yellow mb-6">Plateforme</h5>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-yellow mb-6">Contact</h5>
                <a href="mailto:contact@wadagni2026.bj" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@wadagni2026.bj
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-yellow mb-6">Suivez-nous</h5>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-white transition-all">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-white transition-all">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-white transition-all">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-benin-yellow/10 border border-benin-yellow/20 p-6 rounded-3xl">
                <p className="text-xs text-benin-yellow/80 leading-relaxed italic">
                  "Chaque citoyen est un maillon essentiel de la transformation nationale."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <p>&copy; 2026 Wadagni & Talata. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
