export interface Stat {
  before: string;
  after: string;
  unit: string;
  label: string;
  detail: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: string;
  status: "done" | "now" | "future";
  keyFigure?: string;
  icon: string;
}

export interface Achievement {
  title: string;
  status: "done" | "progress" | "future";
  description: string;
}

export interface Department {
  name: string;
  slug: string;
  capital: string;
  population: string;
  supporters: number;
  achievements: Achievement[];
  wadagniProjects: string[];
  whatsappText: string;
}

export interface DecoderItem {
  rumor: string;
  reality: string;
  source: string;
  category: string;
  whatsappText: string;
}

export interface Testimonial {
  name: string;
  department: string;
  age: number;
  quote: string;
  context: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: string;
  actionLabel: string;
  actionUrl: string;
}

export interface Level {
  name: string;
  minPoints: number;
  maxPoints: number;
  badge: string;
}
