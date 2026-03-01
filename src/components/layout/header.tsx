"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Mail, Phone, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Le Bilan", href: "/bilan" },
  { label: "L'Agenda", href: "/agenda" },
  { label: "Décodeur", href: "/decodeur" },
  { label: "Espace Citoyen", href: "/espace-citoyen" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Check if scrolled near the bottom (Footer area)
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      // If we are within 400px of the bottom, we are likely over the dark footer
      setIsOverDark(scrollPosition > totalHeight - 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500",
        scrolled
          ? cn(
              "backdrop-blur-3xl shadow-sm border-b py-3",
              isOverDark 
                ? "bg-black/20 border-white/10 text-white" 
                : "bg-surface/60 border-black/5"
            )
          : "bg-transparent py-6"
      )}
    >
      <div className="container-safe flex items-center justify-between">
        {/* Logo - WT Icon only */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative">
            <div className={cn(
              "h-10 w-10 rounded-2xl flex items-center justify-center font-serif font-bold text-xl shadow-lg transition-colors group-hover:rotate-6",
              isOverDark 
                ? "bg-white text-[#0C1A13]" 
                : "bg-benin-green text-white shadow-benin-green/20"
            )}>
              HB
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-benin-yellow border-2 border-white shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif text-xl font-bold leading-none tracking-tight transition-colors",
              isOverDark ? "text-white" : "text-ink"
            )}>
              HORIZON <span className="text-benin-yellow">BÉNIN</span>
            </span>
            <span className={cn(
              "text-xs font-bold uppercase tracking-[0.3em] mt-1 leading-none transition-colors",
              isOverDark ? "text-white/50" : "text-ink-muted"
            )}>
              Wadagni &bull; Talata
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Clean & Breathable */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-[0.15em] transition-colors relative py-1",
                  isOverDark 
                    ? (isActive ? "text-benin-yellow" : "text-white/70 hover:text-white")
                    : (isActive ? "text-benin-green" : "text-ink-secondary hover:text-benin-green")
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="header-active"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full",
                      isOverDark ? "bg-benin-yellow" : "bg-benin-green"
                    )} 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className={cn(
                  "hidden md:inline-flex rounded-full px-8 font-bold transition-all hover:scale-105 shadow-lg",
                  isOverDark
                    ? "bg-white text-[#0C1A13] hover:bg-white/90"
                    : "bg-benin-green text-white hover:bg-benin-green-dark shadow-benin-green/10"
                )}
                size="sm"
              >
                Je m&apos;engage
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl rounded-[48px] border-none p-0 overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                {/* Left Side: Brand/Vision Story */}
                <div className="md:w-5/12 bg-benin-green p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
                      <Heart className="size-7 text-benin-yellow" fill="currentColor" />
                    </div>
                    <h2 className="editorial-heading text-4xl mb-6 leading-tight">
                      Bâtissons <br/>
                      <span className="text-benin-yellow italic">l&apos;avenir</span> ensemble.
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                      En rejoignant le mouvement Wadagni-Talata, vous ne votez pas seulement pour un duo, vous investissez dans une vision pour le Bénin.
                    </p>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                      <div className="h-5 w-5 rounded-full bg-benin-yellow/20 flex items-center justify-center">
                        <Check className="size-3 text-benin-yellow" />
                      </div>
                      Actualités exclusives en direct
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                      <div className="h-5 w-5 rounded-full bg-benin-yellow/20 flex items-center justify-center">
                        <Check className="size-3 text-benin-yellow" />
                      </div>
                      Invitations aux cercles citoyens
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                      <div className="h-5 w-5 rounded-full bg-benin-yellow/20 flex items-center justify-center">
                        <Check className="size-3 text-benin-yellow" />
                      </div>
                      Suivi d&apos;impact de votre département
                    </div>
                  </div>
                </div>

                {/* Right Side: Simple Phone Collection */}
                <div className="md:w-7/12 bg-white p-10 md:p-16 flex flex-col justify-center relative">
                  <div className="max-w-sm mx-auto w-full space-y-10">
                    <div className="space-y-4 text-center md:text-left">
                      <DialogTitle className="editorial-heading text-3xl text-ink">
                        Devenir membre actif
                      </DialogTitle>
                      <DialogDescription className="text-ink-secondary text-base">
                        Laissez votre numéro WhatsApp pour recevoir notre vision complète 2026-2031.
                      </DialogDescription>
                    </div>

                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3 border-r border-border">
                          <span className="text-xs font-bold text-ink-muted">+229</span>
                        </div>
                        <input 
                          type="tel" 
                          placeholder="Votre numéro WhatsApp" 
                          className="w-full h-16 bg-surface-alt rounded-2xl pl-20 pr-6 outline-none focus:ring-2 focus:ring-benin-green/20 transition-all text-base font-medium"
                        />
                      </div>
                      
                      <Button className="w-full h-16 rounded-2xl bg-benin-green text-white font-bold text-xl shadow-xl shadow-benin-green/20 hover:scale-[1.02] transition-transform">
                        Rejoindre la dynamique
                        <ArrowRight className="ml-2 size-6" />
                      </Button>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                        <ShieldCheck className="size-4" />
                        Engagement 100% citoyen & sécurisé
                      </div>
                      <div className="h-px w-12 bg-border" />
                      <p className="text-xs text-ink-muted/60 leading-relaxed uppercase tracking-widest">
                        En vous inscrivant, vous acceptez de recevoir des communications <br/> officielles du duo Wadagni-Talata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "lg:hidden transition-colors",
                  isOverDark ? "text-white hover:bg-white/10" : "text-ink hover:bg-surface-alt"
                )}
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-surface border-l border-border p-6">
              <SheetTitle className="sr-only">Menu principal</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="mb-8 pt-4">
                  <span className="font-serif text-2xl font-bold text-ink">
                    Wadagni<span className="text-benin-green">Talata</span><span className="text-benin-yellow">2026</span>
                  </span>
                </div>
                <nav className="flex flex-col gap-2 flex-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 text-lg font-medium rounded-xl transition-colors",
                          isActive
                            ? "bg-benin-green/10 text-benin-green"
                            : "text-ink-secondary hover:bg-surface-alt hover:text-ink"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto pb-8">
                  <Button className="w-full rounded-full bg-benin-green text-white py-6 text-lg">
                    Rejoindre le mouvement
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
