import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const navItems = [
  { label: "Bilan", href: "/bilan" },
  { label: "L'Assistant", href: "/assistant" },
  { label: "Décodeur", href: "/decodeur" },
  { label: "Le QG", href: "/qg" },
];

export function Footer() {
  return (
    <footer className="bg-benin-green-dark text-white pt-16 pb-8">
      <div className="mx-auto max-w-[--content-max] px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight">
                Wadagni<span className="text-benin-yellow">2026</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-sm mb-6">
              Une décennie de fondations solides. Ensemble, continuons à bâtir un Bénin durable, prospère et inclusif pour chaque citoyen.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6 text-benin-yellow">Explorer</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#subscribe" className="text-white/70 hover:text-white transition-colors">
                  Rejoindre le mouvement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6 text-benin-yellow">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@wadagni2026.bj" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  contact@wadagni2026.bj
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm">
                  QG de Campagne<br/>
                  Cotonou, Bénin
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; 2026 Wadagni. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
