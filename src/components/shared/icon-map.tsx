import {
  Zap,
  Droplets,
  UtensilsCrossed,
  Route,
  Factory,
  TrendingUp,
  Landmark,
  Shield,
  MapPin,
  Compass,
  Target,
  Rocket,
  Share2,
  ClipboardCheck,
  Users,
  MessageCircle,
  Brain,
  Search,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  UtensilsCrossed,
  Route,
  Factory,
  TrendingUp,
  Landmark,
  Shield,
  MapPin,
  Compass,
  Target,
  Rocket,
  Share2,
  ClipboardCheck,
  Users,
  MessageCircle,
  Brain,
  Search,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
