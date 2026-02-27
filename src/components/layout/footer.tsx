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
    <footer className="bg-[#1A2E24] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-[--content-wide] px-[--container-px]">
        
        {/* Top Section: Branding & Newsletter-like CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8">
              <span className="font-serif text-3xl font-bold tracking-tight">
                Wadagni<span className="text-benin-yellow">2026</span>
              </span>
            </Link>
            <h3 className="editorial-heading text-2xl mb-6 text-white/90">
              Engagez-vous pour un Bénin <br/> 
              <span className="text-benin-yellow italic">plus fort et plus uni.</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              Chaque contribution rapproche notre nation de ses ambitions. Rejoignez les milliers de citoyens qui construisent déjà l'avenir.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-white hover:border-benin-yellow transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-white hover:border-benin-yellow transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-benin-yellow hover:text-white hover:border-benin-yellow transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-[40px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Heart className="h-24 w-24 text-benin-yellow" />
              </div>
              <div className="relative z-10">
                <h4 className="font-serif text-2xl mb-4">Contribuer au mouvement</h4>
                <p className="text-white/60 mb-8 max-w-md">
                  Recevez les actualités exclusives et les invitations aux rencontres citoyennes dans votre département.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="flex-1 h-14 bg-white/10 border border-white/20 rounded-full px-6 outline-none focus:border-benin-yellow transition-colors"
                  />
                  <Button className="h-14 px-8 bg-benin-yellow hover:bg-benin-yellow-dark text-white font-bold">
                    S'inscrire
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Links & Legal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-t border-white/10">
          <div className="col-span-2 md:col-span-1">
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
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@wadagni2026.bj" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@wadagni2026.bj
                </a>
              </li>
              <li className="text-white/40 text-sm leading-relaxed">
                Quartier Général National<br/>
                Cotonou, République du Bénin
              </li>
            </ul>
          </div>

          <div className="col-span-2">
             <div className="bg-benin-yellow/10 border border-benin-yellow/20 p-6 rounded-3xl">
               <p className="text-sm text-benin-yellow/80 leading-relaxed italic">
                 "Le Bénin de demain se construit avec l'énergie de chaque citoyen, du Nord au Sud, d'Est en Ouest."
               </p>
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/30 uppercase tracking-widest font-bold">
          <p>&copy; 2026 Wadagni. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
