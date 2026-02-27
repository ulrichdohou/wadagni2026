"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Sparkles, MessageCircle, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
}

const suggestedQuestions = [
  "Qu'a fait le gouvernement pour l'eau ?",
  "Combien d'emplois à la GDIZ ?",
  "Bilan en éducation ?",
  "Projets Wadagni ?",
];

const demoResponses: Record<string, { content: string; sources: string [] }> = {
  default: {
    content:
      "Je suis votre Assistant pour le Bilan 2016-2026. Je peux vous éclairer sur les réalisations passées, les chantiers en cours et la vision portée par Romuald Wadagni pour l'avenir du Bénin. Quelle thématique vous intéresse aujourd'hui ?",
    sources: ["PAG 2021-2026", "Rapport National de Développement"],
  },
};

export function AssistantChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const exchangeCount = messages.filter((m) => m.role === "user").length;

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

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
        {
          role: "assistant",
          content: resp.content,
          sources: resp.sources,
        },
      ]);
      setIsTyping(false);
    }, 1200);
  }

  function handleSuggestedClick(q: string) {
    setInput(q);
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full bg-white my-12 rounded-[48px] border border-border/50 shadow-xl overflow-hidden min-h-[700px]">
      
      {/* Chat Header */}
      <div className="bg-surface-alt/50 border-b border-border/40 p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-benin-green flex items-center justify-center text-white shadow-lg">
             <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-serif text-lg font-bold text-ink">Assistant Intelligent</h2>
            <div className="flex items-center gap-1.5">
               <span className="h-2 w-2 rounded-full bg-green-500"></span>
               <span className="text-xs text-ink-muted font-medium">Réponses basées sur les faits</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-ink-muted uppercase tracking-widest bg-white border border-border px-4 py-2 rounded-full">
           <Info className="h-3 w-3" />
           Sources Officielles
        </div>
      </div>

      {/* Message Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="h-20 w-20 rounded-full bg-benin-green/5 flex items-center justify-center mb-6">
               <MessageCircle className="h-10 w-10 text-benin-green/40" />
            </div>
            <h3 className="editorial-heading text-3xl text-ink mb-4">Comment puis-je <br/>vous aider ?</h3>
            <p className="text-ink-secondary max-w-sm mx-auto mb-8">
              Posez-moi une question sur le bilan, les projets par département ou la vision Wadagni 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg">
               {suggestedQuestions.map(q => (
                 <button 
                  key={q}
                  onClick={() => handleSuggestedClick(q)}
                  className="bg-surface-alt hover:bg-benin-green hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-border/50"
                 >
                   {q}
                 </button>
               ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col",
              msg.role === "user" ? "items-end" : "items-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] p-5 shadow-sm",
                msg.role === "user" 
                  ? "bg-benin-green text-white rounded-[24px] rounded-tr-sm" 
                  : "bg-surface-alt text-ink rounded-[24px] rounded-tl-sm border border-border/50"
              )}
            >
              <p className={cn(
                "text-[15px] leading-relaxed",
                msg.role === "assistant" ? "font-serif text-lg" : "font-medium"
              )}>
                {msg.content}
              </p>
              
              {msg.sources && (
                <div className="mt-4 flex flex-wrap gap-2">
                   {msg.sources.map(s => (
                     <span key={s} className={cn(
                       "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border",
                       msg.role === "user" ? "border-white/20 bg-white/10" : "border-border bg-white text-ink-muted"
                     )}>
                       {s}
                     </span>
                   ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-3">
             <div className="h-8 w-8 rounded-xl bg-benin-green/10 flex items-center justify-center text-benin-green shrink-0">
                <Sparkles className="h-4 w-4" />
             </div>
             <div className="bg-surface-alt p-4 rounded-2xl rounded-tl-sm border border-border/50">
                <div className="flex gap-1">
                   <div className="h-2 w-2 bg-benin-green/40 rounded-full animate-bounce" />
                   <div className="h-2 w-2 bg-benin-green/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                   <div className="h-2 w-2 bg-benin-green/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-surface-alt/30 border-t border-border/40">
        
        {exchangeCount >= 2 && (
          <div className="mb-4 animate-fade-in-up">
            <div className="bg-benin-yellow/10 border border-benin-yellow/30 p-4 rounded-2xl flex items-center justify-between gap-4">
               <p className="text-sm font-medium text-benin-yellow-dark">Prêt à rejoindre l'aventure Wadagni 2026 ?</p>
               <Button size="sm" className="bg-benin-yellow hover:bg-benin-yellow-dark text-white rounded-full h-8 px-4" asChild>
                  <Link href="/#subscribe">Je m'engage</Link>
               </Button>
            </div>
          </div>
        )}

        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Votre question sur le Bénin..."
            className="w-full h-14 pl-6 pr-16 rounded-full bg-white border border-border shadow-sm focus:ring-2 focus:ring-benin-green/20 focus:border-benin-green outline-none transition-all text-ink placeholder:text-ink-muted"
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 h-10 w-10 rounded-full bg-benin-green text-white flex items-center justify-center shadow-md hover:bg-benin-green-dark disabled:opacity-50 disabled:bg-ink-muted transition-all"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-ink-muted mt-4 uppercase tracking-[0.2em]">
          Conversations sécurisées &bull; Wadagni 2026
        </p>
      </div>
    </div>
  );
}
