"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Bell, Heart, Mail, Phone, ShieldCheck, Check } from "lucide-react";
import { UPCOMING_MEETINGS } from "@/data/campaign";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

interface MeetingsSectionProps {
  isPage?: boolean;
}

export function MeetingsSection({ isPage = false }: MeetingsSectionProps) {
  return (
    <section className={cn("py-24 md:py-32 bg-white relative overflow-hidden", isPage && "pt-12")}>
      <div className="container-safe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-3 block">Agenda de Mobilisation</span>
            <h2 className="editorial-heading text-4xl md:text-6xl text-ink">
              Sur le terrain, <br/>
              <span className="text-benin-green italic">avec vous.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {!isPage && (
              <Link href="/agenda" className="group inline-flex items-center gap-2 text-benin-green font-bold hover:gap-3 transition-all mr-4">
                Voir tout l&apos;agenda
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="rounded-full h-12 px-6 group border-2 border-benin-green text-benin-green hover:bg-benin-green hover:text-white transition-all">
                  <Bell className="mr-2 h-4 w-4" />
                  M&apos;alerter des rencontres
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
                        Soyez informé <br/>
                        <span className="text-benin-yellow italic">en temps réel.</span>
                      </h2>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Ne manquez aucun passage du duo Wadagni-Talata dans votre localité. Recevez les alertes directement sur votre téléphone.
                      </p>
                    </div>

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                        <div className="h-5 w-5 rounded-full bg-benin-yellow/20 flex items-center justify-center">
                          <Check className="size-3 text-benin-yellow" />
                        </div>
                        Alertes par département
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                        <div className="h-5 w-5 rounded-full bg-benin-yellow/20 flex items-center justify-center">
                          <Check className="size-3 text-benin-yellow" />
                        </div>
                        Lieux et horaires précis
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                        <div className="h-5 w-5 rounded-full bg-benin-yellow/20 flex items-center justify-center">
                          <Check className="size-3 text-benin-yellow" />
                        </div>
                        Accès prioritaire aux événements
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Simple Phone Collection */}
                  <div className="md:w-7/12 bg-white p-10 md:p-16 flex flex-col justify-center relative">
                    <div className="max-w-sm mx-auto w-full space-y-10">
                      <div className="space-y-4 text-center md:text-left">
                        <DialogTitle className="editorial-heading text-3xl text-ink">
                          Activer les alertes
                        </DialogTitle>
                        <DialogDescription className="text-ink-secondary text-base">
                          Laissez votre numéro WhatsApp pour rejoindre notre canal d'information officiel.
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
                          M&apos;inscrire aux alertes
                          <ArrowRight className="ml-2 size-6" />
                        </Button>
                      </div>

                      <div className="flex flex-col items-center gap-4 text-center">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted">
                          <ShieldCheck className="size-4" />
                          Service gratuit & respectueux
                        </div>
                        <div className="h-px w-12 bg-border" />
                        <p className="text-[10px] text-ink-muted/60 leading-relaxed uppercase tracking-widest">
                          Vous pourrez vous désinscrire à tout moment <br/> par un simple message WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_MEETINGS.map((meeting, i) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface-alt/40 rounded-[32px] p-8 border border-transparent hover:border-benin-green/20 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-benin-green/10 text-benin-green text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {meeting.type}
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-serif text-2xl font-bold text-ink leading-none">
                    {new Date(meeting.date).getDate()}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-ink-muted">
                    {new Date(meeting.date).toLocaleString('fr-FR', { month: 'short' })}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-ink mb-4 group-hover:text-benin-green transition-colors">
                {meeting.title}
              </h3>

              <p className="text-sm text-ink-secondary leading-relaxed mb-8 flex-1">
                {meeting.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <MapPin className="h-3.5 w-3.5 text-benin-green" />
                  <span className="font-medium">{meeting.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <Calendar className="h-3.5 w-3.5 text-benin-green" />
                  <span className="font-medium">
                    {new Date(meeting.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              
              <Button variant="ghost" className="mt-6 w-full justify-between hover:bg-benin-green/5 group/btn px-4">
                <span className="text-xs font-bold text-ink">Détails & Inscription</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
