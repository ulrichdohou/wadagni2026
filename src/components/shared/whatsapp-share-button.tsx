"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waUrl } from "@/lib/whatsapp";

interface WhatsAppShareButtonProps {
  message: string;
  label?: string;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function WhatsAppShareButton({
  message,
  label = "Partager sur WhatsApp",
  size = "sm",
  className,
}: WhatsAppShareButtonProps) {
  return (
    <Button
      variant="whatsapp"
      size={size}
      asChild
      className={className}
    >
      <a
        href={waUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="size-4" />
        {label}
      </a>
    </Button>
  );
}
