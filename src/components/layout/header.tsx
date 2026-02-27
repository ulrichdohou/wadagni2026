"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Mail, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Bilan", href: "/bilan" },
  { label: "Vrai ou Faux", href: "/decodeur" },
  { label: "L'Assistant", href: "/assistant" },
  { label: "Espace Citoyen", href: "/espace-citoyen" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500",
        scrolled
          ? "bg-surface/30 backdrop-blur-3xl shadow-sm border-b border-white/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-safe flex items-center justify-between">
        {/* Logo - Premium Serif Design */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-2xl bg-benin-green flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-benin-green/20 group-hover:rotate-6 transition-transform">
              W
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-benin-yellow border-2 border-white shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-ink leading-none tracking-tight">
              Wadagni<span className="text-benin-green">2026</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-ink-muted mt-1 leading-none">
              Bâtir l&apos;Avenir
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Clean & Breathable */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-colors hover:text-benin-green relative py-1",
                  isActive ? "text-benin-green" : "text-ink-secondary"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="header-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-benin-green rounded-full" 
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
                className="hidden md:inline-flex rounded-full px-8 bg-benin-green hover:bg-benin-green-dark text-white font-bold shadow-lg shadow-benin-green/10 transition-all hover:scale-105"
                size="sm"
              >
                Je m&apos;engage
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-[40px] border-border/40 p-0 overflow-hidden shadow-2xl">
              <div className="bg-benin-green p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <Heart className="size-12 text-benin-yellow mb-6" fill="currentColor" />
                <DialogTitle className="editorial-heading text-3xl mb-2 text-white">Rejoignez le mouvement</DialogTitle>
                <DialogDescription className="text-white/70 text-lg">
                  Contribuez à la transformation du Bénin en devenant membre actif de notre communauté.
                </DialogDescription>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-ink-muted" />
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="w-full h-14 bg-surface-alt rounded-2xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-benin-green/20 transition-all text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-ink-muted" />
                    <input 
                      type="tel" 
                      placeholder="Téléphone (WhatsApp)" 
                      className="w-full h-14 bg-surface-alt rounded-2xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-benin-green/20 transition-all text-sm"
                    />
                  </div>
                </div>
                <Button className="w-full h-14 rounded-2xl bg-benin-green text-white font-bold text-lg">
                  Confirmer mon engagement
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink-muted justify-center">
                  <ShieldCheck className="size-3.5" />
                  Données 100% sécurisées
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-ink hover:bg-surface-alt">
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-surface border-l border-border p-6">
              <SheetTitle className="sr-only">Menu principal</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="mb-8 pt-4">
                  <span className="font-serif text-2xl font-bold text-ink">
                    Wadagni<span className="text-benin-green">2026</span>
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
