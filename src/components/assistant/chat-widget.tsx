"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Sparkles, MessageCircle, Info, ArrowRight, Phone, X, Minus, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant" | "system-cta";
  content: string;
  sources?: string[];
}

const demoResponses: Record<string, { content: string; sources: string [] }> = {
  default: {
    content:
      "Bonjour ! Je suis le Guide Horizon. Posez-moi vos questions sur la vision citoyenne de Row & Talata pour le Bénin 2026-2031.",
    sources: ["Vision citoyenne 2026-2031", "Analyse du bilan national"],
  },
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasShownPhoneCTA, setHasShownPhoneCTA] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const exchangeCount = messages.filter((m) => m.role === "user").length;

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen, scrollToBottom]);

  // Handle phone CTA
  useEffect(() => {
    if (exchangeCount === 1 && !isTyping && !hasShownPhoneCTA && isOpen) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "system-cta",
          content: "Souhaitez-vous recevoir notre vision complète sur WhatsApp ?"
        }]);
        setHasShownPhoneCTA(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [exchangeCount, isTyping, hasShownPhoneCTA, isOpen]);

  function handleSend() {
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const resp = demoResponses.default;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: resp.content, sources: resp.sources },
      ]);
      setIsTyping(false);
    }, 1200);
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le Guide Horizon"}
        className={cn(
          "fixed bottom-6 right-6 z-[110] h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group",
          isOpen ? "bg-white text-benin-green rotate-90" : "bg-benin-green text-white"
        )}
      >
        <div className="absolute inset-0 rounded-full bg-benin-green animate-ping opacity-20 group-hover:opacity-0" />
        {isOpen ? <X className="size-7" /> : <MessageCircle className="size-7" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[110] w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] max-h-[calc(100dvh-10rem)] bg-white rounded-[40px] shadow-2xl border border-border/40 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-benin-green p-6 text-white flex items-center justify-between relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Sparkles className="size-5 text-benin-yellow" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">Guide HORIZON BÉNIN</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-benin-yellow animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">En direct</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <Minus className="size-5" />
              </button>
            </div>

            {/* Content Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-surface-alt/20">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="h-16 w-16 rounded-3xl bg-benin-green/5 flex items-center justify-center mb-4">
                    <MessageCircle className="size-8 text-benin-green/30" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-ink mb-2">Comment pouvons-nous <br/>vous aider ?</h4>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    Posez vos questions sur la vision <br/>de Row & Talata pour 2026-2031.
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={cn("flex flex-col", msg.role === "user" ? "items-end" : "items-start")}>
                  {msg.role === "system-cta" ? (
                    <div className="w-full bg-benin-yellow/10 border border-benin-yellow/30 p-5 rounded-[24px] text-center shadow-sm">
                      <p className="text-sm font-bold text-ink mb-4">{msg.content}</p>
                      <div className="flex flex-col gap-2">
                        <input type="tel" placeholder="WhatsApp +229" className="h-10 bg-white rounded-full px-4 text-xs border border-border outline-none" />
                        <Button size="sm" className="bg-benin-yellow hover:bg-benin-yellow-dark text-[#0C1A13] font-bold rounded-full">
                          Recevoir
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className={cn(
                      "max-w-[85%] p-4 text-sm shadow-sm",
                      msg.role === "user" 
                        ? "bg-benin-green text-white rounded-[20px] rounded-tr-sm" 
                        : "bg-white text-ink rounded-[20px] rounded-tl-sm border border-border/60"
                    )}>
                      <p className={msg.role === "assistant" ? "font-serif text-base" : ""}>{msg.content}</p>
                      {msg.sources && (
                        <div className="mt-3 flex flex-wrap gap-1.5 opacity-60">
                          {msg.sources.map(s => <span key={s} className="text-xs font-bold uppercase border border-current px-1.5 py-0.5 rounded">{s}</span>)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-1.5 p-4 bg-white rounded-2xl w-16 border border-border/40">
                  <div className="h-1.5 w-1.5 bg-benin-green/40 rounded-full animate-bounce" />
                  <div className="h-1.5 w-1.5 bg-benin-green/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="h-1.5 w-1.5 bg-benin-green/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/40 bg-white">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Votre question au Guide Horizon..."
                  aria-label="Posez votre question au Guide Horizon"
                  className="flex-1 h-12 bg-surface-alt rounded-full px-5 text-sm outline-none focus:ring-2 focus:ring-benin-green/20 border border-transparent focus:border-benin-green/20"
                />
                <button onClick={handleSend} disabled={!input.trim() || isTyping} className="h-12 w-12 rounded-full bg-benin-green text-white flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all">
                  <Send className="size-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
