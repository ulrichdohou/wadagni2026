"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Bilan", href: "/bilan" },
  { label: "Décodeur", href: "/decodeur" },
  { label: "L'Assistant", href: "/assistant" },
  { label: "Le QG", href: "/qg" },
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
          ? "bg-surface/70 backdrop-blur-xl shadow-sm border-b border-border/40 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-safe flex items-center justify-between">
        {/* Logo - Natural & Elegant */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-benin-green flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm group-hover:bg-benin-green-dark transition-colors">
            W
          </div>
          <span className="font-serif text-xl font-medium text-ink tracking-tight group-hover:text-benin-green transition-colors">
            Wadagni<span className="text-benin-green">2026</span>
          </span>
        </Link>

        {/* Desktop Navigation - Clean & Breathable */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-benin-green relative py-1",
                  isActive ? "text-benin-green font-semibold" : "text-ink-secondary"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-benin-green rounded-full opacity-60" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:inline-flex rounded-full px-6 bg-benin-green hover:bg-benin-green-dark text-white font-medium shadow-sm hover:shadow-md transition-all"
            size="sm"
          >
            Je m&apos;engage
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-ink hover:bg-surface-alt">
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
