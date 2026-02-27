import { SITE_URL } from "@/data/constants";

export function waUrl(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message + "\n👉 " + SITE_URL)}`;
}
