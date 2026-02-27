# BENIN 2026  PRESIDENTIAL CAMPAIGN PLATFORM
## Complete Technical & Design Specification  V4 Final
## "10 Years of Proof"  Digital Campaign Machine

---

# 0. EXECUTIVE SUMMARY

Build a high-performance, mobile-first campaign platform for Benin's April 12, 2026 presidential election. This is NOT a brochure  it's a conversion machine that proves 10 years of results, answers citizen questions via AI, fights misinformation, and turns visitors into active supporters through WhatsApp-driven virality.

**Candidate**: Romuald Wadagni (economist, architect of Benin's economic reforms) + VP Mariam Chabi Talata
**Narrative**: CONTINUITY  don't let 10 years of progress stop
**Core challenge**: TURNOUT. The real opponent is abstention, not the rival candidate.
**Primary channel**: WhatsApp (80%+ of Beninese internet usage)
**Primary device**: Low-end Android (Tecno Spark, Itel, Infinix  720p, 2-3 GB RAM, 3G)

---

# 1. TECHNICAL STACK  EXPLICIT VERSIONS

```
CORE
 Next.js 15.2+              (App Router, React Server Components, Turbopack)
 React 19.0+                (useOptimistic, useTransition, use() hook)
 TypeScript 5.7+            (strict mode, satisfies operator)
 Tailwind CSS 4.0+          (v4 engine, @theme directive, no tailwind.config)
 Node.js 22 LTS             (runtime)

UI LAYER
 shadcn/ui (latest)         (copy-paste components, New York style base)
 Radix UI Primitives         (underlying accessible primitives)
 Framer Motion 12.x+        (animations, gestures, layout, scroll-triggered)
 Lucide React 0.470+        (icon set, tree-shakeable)
 class-variance-authority    (variant management for components)

TYPOGRAPHY (self-hosted via next/font)
 Outfit (Google Fonts)       (body + headings  geometric, light, modern)
 Newsreader (Google Fonts)   (editorial serif  section titles, hero, quotes)
 JetBrains Mono (Google)     (monospace  data, counters, stats, code)

FORMS & VALIDATION
 React Hook Form 7.54+      (performant forms, zero re-renders)
 Zod 3.24+                  (schema validation, shared client/server)
 @hookform/resolvers         (Zod  RHF bridge)

AI & DATA
 Anthropic SDK 0.39+        (Claude 3.5 Haiku for chatbot)
 Turbopuffer                 (vector database for RAG)
 Cloudflare D1               (SQLite  supporters, analytics)
 Drizzle ORM 0.38+          (type-safe queries for D1)

DEPLOYMENT
 Vercel                      (Edge Functions, Analytics, Speed Insights)
 OR Cloudflare Pages         (with @cloudflare/next-on-pages adapter)
 Vercel Analytics + custom   (event tracking)

TOOLING
 pnpm 9.x                   (package manager)
 Biome 1.9+                 (linter + formatter, replaces ESLint+Prettier)
 Playwright 1.49+            (E2E testing, mobile device emulation)
 Lighthouse CI               (performance regression testing)
```

### Why These Specific Choices

**Outfit over Geist/Inter/DM Sans**: Outfit is a geometric sans-serif designed by Rodrigo Fuenzalida. It has an exceptionally clean, airy feel at light weights (300-400) while remaining strong at bold (700-800). The "o" is a perfect circle, giving it a modern, optimistic personality. It's variable (single file ~45KB), available on Google Fonts, and has excellent Cyrillic/Latin Extended support. It reads lighter and more approachable than Geist or Inter on small screens.

**Newsreader over Instrument Serif**: Newsreader is designed by Production Type specifically for editorial/newspaper digital use. It has optical sizing built in  it automatically adjusts contrast and weight for the display size. At 36px+ it looks sharp and dramatic (like a newspaper masthead), at 16px it's perfectly readable. Variable font, ~30KB. Available on Google Fonts.

**Tailwind v4 over v3**: Native CSS cascade layers, no config file needed (@theme directive in CSS), faster builds with Turbopack, smaller output. The new `@theme` directive means colors and tokens live in your CSS, not a JS config  cleaner architecture.

---

# 2. PROJECT INITIALIZATION

```bash
# Create project
pnpm create next-app@latest benin-2026 \
  --typescript --tailwind --app --src-dir --turbopack \
  --import-alias "@/*"

cd benin-2026

# Core dependencies
pnpm add framer-motion@latest react-hook-form@latest zod@latest \
  @hookform/resolvers@latest lucide-react@latest \
  class-variance-authority@latest clsx tailwind-merge

# shadcn/ui init
pnpm dlx shadcn@latest init
#  Style: New York
#  Base color: Zinc (we override everything)
#  CSS variables: Yes

# shadcn components (install ALL of these)
pnpm dlx shadcn@latest add \
  button badge dialog sheet accordion card \
  input select textarea label separator \
  tabs progress scroll-area avatar alert \
  tooltip dropdown-menu command popover \
  drawer sonner

# Fonts (via next/font  no CDN)
# Configured in src/lib/fonts.ts (see below)

# Dev tooling
pnpm add -D @biomejs/biome@latest playwright@latest
```

---

# 3. DESIGN SYSTEM  "INSTITUTIONAL ELEGANCE"

## 3.1 Design Philosophy

**The site must feel like Bloomberg Terminal meets Monocle Magazine meets a modern African institution.**

REJECT (these are what AI-generated sites always do):
- Uniform card grids with equal spacing (screams "AI slop")
- Excessive whitespace between sections (says nothing, wastes data)
- Rounded illustration characters or decorative SVG blobs
- Pastel/muted color palettes with no contrast
- Inter, Roboto, DM Sans, Space Grotesk (AI's favorite generic fonts)
- Purple gradients, glassmorphism cards, floating UI elements
- Stock photography of any kind

EMBRACE:
- **Density with hierarchy**  more content per viewport, organized by typography weight and size
- **Asymmetric layouts**  full-width + half-width mixed, not uniform grids
- **Editorial typography**  serif for headlines creates gravitas, sans for body creates clarity
- **Data-forward**  numbers are the hero, not illustrations
- **Functional color**  green means "done", yellow means "now", red means "rumor". Never decorative.
- **Texture through type, not images**  the interplay of Newsreader (editorial), Outfit (clean), and JetBrains Mono (data) creates visual richness without loading a single image

## 3.2 Color System

```css
/* src/app/globals.css  Tailwind v4 @theme directive */

@theme {
  /* === Core: Beninese Flag === */
  --color-benin-green: #008751;
  --color-benin-green-light: #00A86B;
  --color-benin-green-dark: #005C37;
  --color-benin-green-muted: oklch(0.85 0.05 155 / 0.08);

  --color-benin-yellow: #FCD116;
  --color-benin-yellow-dark: #D4A800;
  --color-benin-yellow-muted: oklch(0.92 0.08 95 / 0.1);

  --color-benin-red: #E8112D;
  --color-benin-red-muted: oklch(0.95 0.02 25 / 0.06);

  /* === Surfaces === */
  --color-surface: #FAFAF8;
  --color-surface-alt: #F3F3EF;
  --color-surface-dim: #EAEAE4;
  --color-surface-inverse: #0C1810;
  --color-surface-card: #FFFFFF;

  /* === Ink (Text) === */
  --color-ink: #1A1A17;
  --color-ink-secondary: #6B6B65;
  --color-ink-muted: #9C9C95;
  --color-ink-inverse: #F5F5F0;
  --color-ink-inverse-muted: oklch(0.95 0 0 / 0.45);

  /* === WhatsApp === */
  --color-whatsapp: #25D366;
  --color-whatsapp-dark: #1DA851;

  /* === Spacing tokens === */
  --content-max: 680px;
  --content-wide: 880px;

  /* === Radius === */
  --radius-card: 14px;
  --radius-button: 10px;
  --radius-pill: 100px;
  --radius-sm: 8px;
}
```

## 3.3 Typography Configuration

```typescript
// src/lib/fonts.ts
import { Outfit, Newsreader, JetBrains_Mono } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500", "700"],
});
```

```typescript
// app/layout.tsx
import { outfit, newsreader, jetbrainsMono } from "@/lib/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-surface text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
```

### Typography Scale & Rules

```
DISPLAY      Newsreader 400   clamp(36px, 9vw, 64px)   leading-[1.0]    tracking-[-0.03em]
              ONLY: Hero H1

HEADING-1    Outfit 800       clamp(26px, 5vw, 36px)    leading-[1.1]    tracking-[-0.02em]
              Page titles

HEADING-2    Newsreader 400   clamp(24px, 4vw, 32px)    leading-[1.15]   tracking-[-0.01em]
              Section titles (gives editorial contrast)

HEADING-3    Outfit 700       18-22px                    leading-[1.25]   tracking-[-0.01em]
              Card titles, subsections

BODY         Outfit 400       15-16px                    leading-[1.65]   tracking-normal
              Paragraphs, descriptions

BODY-SM      Outfit 500       13-14px                    leading-[1.55]   tracking-normal
              Secondary text, captions

OVERLINE     Outfit 700       10-11px                    leading-[1.2]    tracking-[0.08em]  uppercase
              Category labels, status text

DATA-LG      JetBrains Mono 700   clamp(28px, 6vw, 48px)  leading-[1.0]    tabular-nums
              Hero stats, big counters

DATA         JetBrains Mono 700   16-22px                  leading-[1.0]    tabular-nums
              Inline stats, supporter counts

DATA-SM      JetBrains Mono 500   12-13px                  leading-[1.2]    tabular-nums
              Timestamps, metadata
```

**RULES**:
1. Body text NEVER below 14px on mobile. Prefer 15px. Users have 5-inch 720p screens.
2. `font-variant-numeric: tabular-nums` on ALL numbers (JetBrains Mono does this natively).
3. Newsreader (serif) is ONLY for Display (hero) and H2 (section titles). Everything else = Outfit.
4. Use Outfit weight 300 (light) for large decorative text like the opening quote mark `"` in testimonials.
5. Use Outfit weight 800 for H1 and buttons  it's punchy without being aggressive.

## 3.4 shadcn/ui Component Overrides

Override the shadcn default theme to match our design system. Key customizations:

### Button Variants
```typescript
// src/components/ui/button.tsx  extend variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-benin-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-benin-green-light text-white hover:bg-benin-green-dark shadow-sm",
        secondary: "bg-surface-alt text-ink hover:bg-surface-dim",
        outline: "border-2 border-benin-green text-benin-green hover:bg-benin-green-muted",
        ghost: "text-ink-secondary hover:text-ink hover:bg-surface-alt",
        whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-sm",
        yellow: "bg-benin-yellow text-surface-inverse hover:bg-benin-yellow-dark font-bold",
        destructive: "bg-benin-red text-white hover:bg-benin-red/90",
        link: "text-benin-green underline-offset-4 hover:underline p-0 h-auto",
        "outline-inverse": "border border-white/20 text-white hover:bg-white/10",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-[--radius-sm]",
        default: "h-10 px-5 text-sm rounded-[--radius-button]",
        lg: "h-12 px-8 text-base rounded-[--radius-button]",
        full: "h-12 w-full text-base rounded-[--radius-button]",
        icon: "h-10 w-10 rounded-[--radius-button]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
```

### Badge Variants
```typescript
// src/components/ui/badge.tsx  campaign-specific variants
{
  variant: {
    done: "bg-benin-green-muted text-benin-green border-benin-green/20 font-semibold",
    progress: "bg-benin-yellow-muted text-benin-yellow-dark border-benin-yellow/20 font-semibold",
    future: "bg-blue-50 text-blue-700 border-blue-200 font-semibold",
    rumor: "bg-benin-red-muted text-benin-red border-benin-red/20 font-semibold",
    fact: "bg-benin-green-muted text-benin-green border-benin-green/20 font-semibold",
    source: "bg-benin-green-muted text-benin-green text-[10px] font-semibold px-2 py-0.5",
    department: "bg-surface-alt text-ink-secondary font-medium",
  }
}
```

### Accordion (Decoder Page)
```typescript
// Customize AccordionTrigger to transition icon from  (red) to  (green)
// Use data-[state=open] and data-[state=closed] Tailwind selectors
<AccordionTrigger className="group">
  <div className="
    flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-300
    group-data-[state=closed]:bg-benin-red-muted group-data-[state=closed]:text-benin-red
    group-data-[state=open]:bg-benin-green-muted group-data-[state=open]:text-benin-green
  ">
    <span className="group-data-[state=closed]:inline group-data-[state=open]:hidden"></span>
    <span className="group-data-[state=closed]:hidden group-data-[state=open]:inline"></span>
  </div>
</AccordionTrigger>
```

### Sheet (Subscribe Modal on Mobile)
```typescript
// Use shadcn Sheet (from @radix-ui/react-dialog) as bottom drawer on mobile
// Use regular Dialog on desktop
// Detect with useMediaQuery hook or CSS-only approach
<Sheet>
  <SheetTrigger asChild>
    <Button>Je m'engage</Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="rounded-t-2xl max-h-[90vh]">
    <SubscribeForm />
  </SheetContent>
</Sheet>
```

## 3.5 Visual Signature Elements

### Flag Stripe (TOP  always visible)
```html
<div class="sticky top-0 z-[100] flex h-[5px]">
  <div class="flex-1 bg-benin-green" />
  <div class="flex-1 bg-benin-yellow" />
  <div class="flex-1 bg-benin-red" />
</div>
```

### Ticker Bar (below header)
```html
<div class="bg-surface-inverse overflow-hidden whitespace-nowrap">
  <div class="inline-block animate-marquee font-mono text-xs font-semibold text-benin-yellow tracking-wider py-2">
    <!-- Duplicate content 2x for seamless loop -->
     J-{days} AVANT LE SCRUTIN  {supporters} SYMPATHISANTS  ...
  </div>
</div>
```

### Diamond Pattern (dark sections background)
```html
<svg class="absolute inset-0 opacity-[0.03] pointer-events-none" width="100%" height="100%">
  <pattern id="diamonds" width="24" height="24" patternUnits="userSpaceOnUse">
    <path d="M12 0L24 12L12 24L0 12Z" fill="none" stroke="white" stroke-width="0.5"/>
  </pattern>
  <rect width="100%" height="100%" fill="url(#diamonds)"/>
</svg>
```

### Green Left Accent on Cards
Every data card uses `border-l-[3px] border-benin-green` instead of full borders. This is a signature visual element that runs throughout the entire site.

---

# 4. COMPLETE MOCK DATA

All data files go in `src/data/`. Every array and object below must be typed via the interfaces in `src/data/types.ts`.

## 4.1 National Statistics

```typescript
// src/data/stats.ts
export const stats = [
  {
    before: "0",
    after: "180+",
    unit: "MW",
    label: "lectricit produite",
    detail: "En 2016, le Bnin ne produisait aucun mgawatt. Aujourd'hui, la centrale Maria Glta (129 MW), les centrales solaires, et les micro-centrales alimentent le pays. Les dlestages sauvages appartiennent au pass.",
    icon: "Zap",
  },
  {
    before: "46%",
    after: "80%",
    unit: "",
    label: "Accs eau potable",
    detail: "Plus de 20 000 forages et adductions d'eau ont t raliss, principalement en zone rurale. Des millions de femmes ne marchent plus 3 km pour trouver de l'eau.",
    icon: "Droplets",
  },
  {
    before: "0",
    after: "1M+",
    unit: "",
    label: "Repas scolaires/jour",
    detail: "Le Programme National d'Alimentation Scolaire Intgr (PNASI) nourrit plus d'un million d'enfants par jour d'cole. La frquentation scolaire a explos dans les zones couvertes.",
    icon: "UtensilsCrossed",
  },
  {
    before: "~0",
    after: "2 600+",
    unit: "km",
    label: "Routes impactes",
    detail: "Routes bitumes, ponts, changeurs dans les 12 dpartements. Le projet Asphaltage a transform Cotonou, Porto-Novo, Parakou et des dizaines de communes.",
    icon: "Route",
  },
  {
    before: "0",
    after: "1 400",
    unit: "ha",
    label: "Zone industrielle GDIZ",
    detail: "La Glo-Djigb Industrial Zone est la plus grande zone industrielle d'Afrique de l'Ouest. Transformation locale du coton et des noix de cajou. Des milliers d'emplois directs crs.",
    icon: "Factory",
  },
  {
    before: "4,5%",
    after: "5,5%+",
    unit: "",
    label: "Croissance moyenne",
    detail: "Mme pendant la pandmie de Covid-19, le Bnin a maintenu une croissance positive de +2,3% en 2020. L'un des rares pays au monde  ne pas avoir connu de rcession.",
    icon: "TrendingUp",
  },
] as const;
```

## 4.2 Timeline (11 events)

```typescript
// src/data/timeline.ts
export const timeline = [
  {
    year: "2016",
    title: "L're de la Rupture",
    description: "Patrice Talon arrive au pouvoir. Wadagni est nomm Ministre de l'conomie et des Finances. Le Programme d'Action du Gouvernement (PAG) est lanc : 45 projets phares.",
    category: "Politique",
    status: "done" as const,
    icon: "Landmark",
  },
  {
    year: "2018",
    title: "Asphaltage : les villes changent de visage",
    description: "Le projet Asphaltage transforme radicalement les villes. 771 km de voirie bitume en 4 ans. Cotonou, Porto-Novo, Parakou ne ressemblent plus  ce qu'ils taient.",
    category: "Infrastructure",
    status: "done" as const,
    keyFigure: "771 km",
    icon: "Route",
  },
  {
    year: "2019",
    title: "Maria Glta : la lumire",
    description: "La centrale thermique Maria Glta II entre en service. 127 MW ajouts d'un coup. Pour la premire fois, le Bnin produit significativement sa propre lectricit. Fin des dlestages systmatiques.",
    category: "nergie",
    status: "done" as const,
    keyFigure: "127 MW",
    icon: "Zap",
  },
  {
    year: "2020",
    title: "Rsilience face au Covid",
    description: "L o la plupart des conomies africaines reculent, le Bnin maintient une croissance positive de +2,3%. Le FMI salue la gestion macroconomique du pays.",
    category: "conomie",
    status: "done" as const,
    keyFigure: "+2,3%",
    icon: "Shield",
  },
  {
    year: "2021",
    title: "1 million d'enfants mangent  l'cole",
    description: "Le PNASI franchit le cap du million d'enfants nourris quotidiennement. La frquentation scolaire explose dans les zones rurales. Les mres peuvent travailler pendant que leurs enfants mangent  l'cole.",
    category: "Social",
    status: "done" as const,
    keyFigure: "1M+ enfants/jour",
    icon: "UtensilsCrossed",
  },
  {
    year: "2022",
    title: "GDIZ : le Bnin s'industrialise",
    description: "La zone industrielle de Glo-Djigb entre en activit. 1 400 hectares ddis  la transformation du coton, du cajou, et bientt de l'ananas. Des milliers d'emplois directs, sans diplme requis.",
    category: "Industrie",
    status: "done" as const,
    keyFigure: "1 400 ha",
    icon: "Factory",
  },
  {
    year: "2023",
    title: "Tourisme : le Bnin sur la carte",
    description: "La Route des Pches, le Muse d'Ouidah, la restauration des Palais Royaux d'Abomey (UNESCO). Le Bnin devient une destination culturelle majeure en Afrique de l'Ouest.",
    category: "Culture",
    status: "done" as const,
    icon: "MapPin",
  },
  {
    year: "2024",
    title: "80% d'accs  l'eau potable",
    description: "De 46%  80% en 8 ans. Des dizaines de milliers de forages et systmes d'adduction construits jusque dans les villages les plus reculs. Des millions de vies transformes.",
    category: "Sant",
    status: "done" as const,
    keyFigure: "46%  80%",
    icon: "Droplets",
  },
  {
    year: "2026",
    title: "Vision 2060 ALAFIA",
    description: "Lancement de la Vision Bnin 2060 ALAFIA  un cadre de dveloppement  35 ans pour inscrire la transformation dans la dure et atteindre le statut de pays  revenu intermdiaire suprieur.",
    category: "Vision",
    status: "now" as const,
    icon: "Compass",
  },
  {
    year: "2028",
    title: "100% eau & lectricit",
    description: "Objectif Wadagni : couverture universelle en eau potable et en lectricit, jusque dans les zones les plus recules du Nord et de l'Atacora.",
    category: "Projet Wadagni",
    status: "future" as const,
    icon: "Target",
  },
  {
    year: "2030",
    title: "Hub Tech d'Afrique de l'Ouest",
    description: "100 000 jeunes forms aux mtiers du numrique et de l'IA. Cration d'un fonds souverain pour les startups bninoises. Le Bnin devient un hub d'innovation rgional.",
    category: "Projet Wadagni",
    status: "future" as const,
    icon: "Rocket",
  },
] as const;
```

## 4.3 Departments (all 12)

```typescript
// src/data/departments.ts
export const departments = [
  {
    name: "Littoral",
    slug: "littoral",
    capital: "Cotonou",
    population: "800K",
    supporters: 12450,
    achievements: [
      { title: "Asphaltage massif", status: "done", description: "Des centaines de km de voirie bitume dans toute la ville." },
      { title: "changeur de Godomey", status: "done", description: "Fin des embouteillages  l'entre de Cotonou." },
      { title: "Marina de Cotonou", status: "progress", description: "Projet phare de ramnagement du front de mer." },
      { title: "March Dantokpa rnov", status: "done", description: "Le plus grand march d'Afrique de l'Ouest modernis." },
    ],
    wadagniProjects: ["Smart City Cotonou", "Rseau de transport urbain", "Incubateur Tech national"],
    whatsappText: " LITTORAL / COTONOU\nAsphaltage massif  changeur Godomey  Marina en cours\nRejoins les 12 450 sympathisants ",
  },
  {
    name: "Atlantique",
    slug: "atlantique",
    capital: "Ouidah",
    population: "1.4M",
    supporters: 8934,
    achievements: [
      { title: "Centrale Maria Glta", status: "done", description: "129 MW  fin des dlestages pour tout le Sud." },
      { title: "Rhabilitation sites Ouidah", status: "done", description: "Porte du Non-Retour, muses, Route des Pches." },
      { title: "GDIZ Phase 1", status: "done", description: "1 400 ha de zone industrielle  Glo-Djigb." },
    ],
    wadagniProjects: ["Extension GDIZ Phase 2", "Marina Ouidah", "Tourisme culturel Vodoun"],
    whatsappText: " ATLANTIQUE\nCentrale 129 MW  GDIZ 1400 ha  Sites Ouidah restaurs\nRejoins les 8 934 sympathisants ",
  },
  {
    name: "Oum",
    slug: "oueme",
    capital: "Porto-Novo",
    population: "1.1M",
    supporters: 6234,
    achievements: [
      { title: "CHD Porto-Novo rnov", status: "done", description: "Centre hospitalier entirement modernis." },
      { title: "Muse Honm restaur", status: "done", description: "Patrimoine royal mis en valeur pour le tourisme." },
      { title: "Voirie Porto-Novo", status: "done", description: "Transformation des axes principaux de la capitale." },
    ],
    wadagniProjects: ["Capitale culturelle du Bnin", "Technopole de Porto-Novo"],
    whatsappText: " OUM / PORTO-NOVO\nCHD rnov  Muse Honm  Voirie transforme\nRejoins les 6 234 sympathisants ",
  },
  {
    name: "Borgou",
    slug: "borgou",
    capital: "Parakou",
    population: "1.2M",
    supporters: 4521,
    achievements: [
      { title: "234 km de routes", status: "done", description: "Routes + 12 ponts construits dans le dpartement." },
      { title: "89% d'accs  l'eau", status: "done", description: "Quasi couverture universelle atteinte." },
      { title: "Universit de Parakou agrandie", status: "done", description: "Nouvelles facults et infrastructures." },
    ],
    wadagniProjects: ["Ple logistique Nord", "Chemin de fer Cotonou-Parakou-Niamey"],
    whatsappText: " BORGOU / PARAKOU\n234 km routes  89% eau  Universit agrandie\nRejoins les 4 521 sympathisants ",
  },
  {
    name: "Zou",
    slug: "zou",
    capital: "Abomey",
    population: "850K",
    supporters: 3876,
    achievements: [
      { title: "Palais Royaux UNESCO restaurs", status: "done", description: "Site du patrimoine mondial entirement rhabilit." },
      { title: "Route Bohicon-Abomey", status: "done", description: "Axe principal bitum et largi." },
      { title: "March d'Abomey modernis", status: "done", description: "Infrastructure commerciale de rfrence." },
    ],
    wadagniProjects: ["Tourisme des Amazones", "Agropole Zou-Collines"],
    whatsappText: " ZOU / ABOMEY\nPalais UNESCO restaurs  Route Bohicon-Abomey  March modernis\nRejoins les 3 876 sympathisants ",
  },
  {
    name: "Atacora",
    slug: "atacora",
    capital: "Natitingou",
    population: "770K",
    supporters: 3102,
    achievements: [
      { title: "12 centres de sant", status: "done", description: "Couverture sanitaire tendue dans les communes." },
      { title: "Route Tata Somba restaure", status: "done", description: "Accs facilit au patrimoine Tata Somba." },
      { title: "Barrage de Dassari", status: "done", description: "Irrigation et scurit alimentaire." },
    ],
    wadagniProjects: ["Tourisme Tata Somba", "Scurit frontalire renforce"],
    whatsappText: " ATACORA\n12 centres de sant  Route Tata Somba  Barrage Dassari\nRejoins les 3 102 sympathisants ",
  },
  {
    name: "Alibori",
    slug: "alibori",
    capital: "Kandi",
    population: "870K",
    supporters: 2847,
    achievements: [
      { title: "156 km de routes", status: "done", description: "Dsenclavement des communes rurales." },
      { title: "6 micro-centrales solaires", status: "done", description: "nergie propre pour les zones isoles." },
      { title: "Production coton record", status: "done", description: "Le Bnin redevient leader cotonnier ouest-africain." },
    ],
    wadagniProjects: ["Hub agricole du Nord", "Couverture eau 100%"],
    whatsappText: " ALIBORI / KANDI\n156 km routes  6 centrales solaires  Coton record\nRejoins les 2 847 sympathisants ",
  },
  {
    name: "Collines",
    slug: "collines",
    capital: "Dassa",
    population: "720K",
    supporters: 2198,
    achievements: [
      { title: "34 coles rnoves", status: "done", description: "Conditions d'apprentissage transformes." },
      { title: "Cantines scolaires 100%", status: "done", description: "Tous les enfants du dpartement mangent  l'cole." },
      { title: "Voirie Dassa-Zoum", status: "done", description: "Chef-lieu dsenclav et modernis." },
    ],
    wadagniProjects: ["Ple touristique Collines", "Agro-transformation locale"],
    whatsappText: " COLLINES / DASSA\n34 coles rnoves  Cantines 100%  Voirie Dassa\nRejoins les 2 198 sympathisants ",
  },
  {
    name: "Mono",
    slug: "mono",
    capital: "Lokossa",
    population: "500K",
    supporters: 1987,
    achievements: [
      { title: "lectrification 91%", status: "done", description: "Quasi couverture universelle en lectricit." },
      { title: "Pont de Lokossa", status: "done", description: "Liaison stratgique entre les communes." },
      { title: "Cantines PNASI", status: "done", description: "Des milliers d'enfants nourris chaque jour." },
    ],
    wadagniProjects: ["Irrigation valle du Mono", "Ple piscicole"],
    whatsappText: " MONO / LOKOSSA\nlectrification 91%  Pont Lokossa  Cantines scolaires\nRejoins les 1 987 sympathisants ",
  },
  {
    name: "Couffo",
    slug: "couffo",
    capital: "Aplahou",
    population: "750K",
    supporters: 1876,
    achievements: [
      { title: "78 km routes + 8 ponts", status: "done", description: "Rseau routier compltement transform." },
      { title: "Microcrdit Alafia", status: "done", description: "Des milliers de femmes finances." },
      { title: "Centre hospitalier dpartemental", status: "done", description: "Soins de qualit accessibles localement." },
    ],
    wadagniProjects: ["Systme d'irrigation", "Centre artisanal"],
    whatsappText: " COUFFO\n78 km routes  8 ponts  Microcrdit Alafia\nRejoins les 1 876 sympathisants ",
  },
  {
    name: "Donga",
    slug: "donga",
    capital: "Djougou",
    population: "540K",
    supporters: 1543,
    achievements: [
      { title: "6 micro-centrales solaires", status: "done", description: "nergie propre pour les communes rurales." },
      { title: "Voirie Djougou", status: "done", description: "Chef-lieu modernis et accessible." },
      { title: "ARCH Sant dploy", status: "done", description: "Assurance maladie pour les plus vulnrables." },
    ],
    wadagniProjects: ["Barrage multi-usage", "Lyce technique agricole"],
    whatsappText: " DONGA / DJOUGOU\n6 centrales solaires  Voirie  ARCH Sant\nRejoins les 1 543 sympathisants ",
  },
  {
    name: "Plateau",
    slug: "plateau",
    capital: "Sakt",
    population: "580K",
    supporters: 1432,
    achievements: [
      { title: "Filire coton relance", status: "done", description: "Rendements amliors, revenus en hausse." },
      { title: "Forages ruraux", status: "done", description: "Dizaines de forages pour l'eau potable." },
      { title: "Routes communales", status: "done", description: "Dsenclavement des zones agricoles." },
    ],
    wadagniProjects: ["Zone agricole intgre", "Modernisation post-rcolte"],
    whatsappText: " PLATEAU / SAKT\nCoton relanc  Forages  Routes communales\nRejoins les 1 432 sympathisants ",
  },
] as const;
```

## 4.4 Rumor Decoder (5 items)

```typescript
// src/data/decoder.ts
export const decoderItems = [
  {
    rumor: "Le gouvernement n'a fait que des routes, le social a t oubli.",
    reality: "Le budget social a plus que doubl entre 2016 et 2026. Plus d'un million d'enfants mangent gratuitement  l'cole grce au PNASI. Le microcrdit Alafia a financ des milliers de femmes entrepreneurs. L'assurance maladie ARCH couvre les plus vulnrables. L'accs  l'eau est pass de 46%  80%.",
    source: "PAG 2021-2026, Ministre des Affaires Sociales",
    category: "Social",
    whatsappText: " VRAI OU FAUX ?\n\"Le gouvernement n'a fait que des routes\"\n FAUX ! Budget social doubl. 1M+ enfants nourris. 80% eau.\n\nVrifie les faits ",
  },
  {
    rumor: "La dette du pays est hors de contrle.",
    reality: "La dette publique se situe autour de 50% du PIB, soit bien en dessous du seuil de viabilit de l'UEMOA (70%). Le FMI l'a qualifie de  soutenable  dans son dernier Article IV. Cette dette a financ les centrales lectriques, les routes, et la GDIZ  des investissements productifs, pas des frais de fonctionnement.",
    source: "FMI Article IV 2024, UEMOA",
    category: "conomie",
    whatsappText: " VRAI OU FAUX ?\n\"La dette est hors de contrle\"\n FAUX ! ~50% du PIB, sous le seuil UEMOA de 70%. Le FMI dit \"soutenable\".\n\nVrifie ",
  },
  {
    rumor: "Seuls les proches du pouvoir profitent du dveloppement.",
    reality: "80% des Bninois ont dsormais accs  l'eau potable (contre 46% en 2016). Plus d'un million d'enfants sont nourris  l'cole. Le microcrdit Alafia cible les femmes rurales. L'lectrification couvre jusqu'aux villages isols. La GDIZ cre des emplois sans exigence de diplme.",
    source: "Banque Mondiale 2024, INSAE",
    category: "Gouvernance",
    whatsappText: " VRAI OU FAUX ?\n\"Seuls les proches profitent\"\n FAUX ! 80% ont l'eau. 1M enfants nourris. Emplois GDIZ sans diplme.\n\nVrifie ",
  },
  {
    rumor: "Le Bnin n'a pas d'avenir industriel.",
    reality: "La GDIZ (Glo-Djigb Industrial Zone) couvre 1 400 hectares  c'est la plus ambitieuse zone industrielle d'Afrique de l'Ouest. Elle transforme le coton et le cajou localement au lieu de les exporter bruts. Des milliers d'emplois directs crs. Le Bnin exporte dsormais des produits finis.",
    source: "APIEX, SIPI-BENIN",
    category: "Industrie",
    whatsappText: " VRAI OU FAUX ?\n\"Pas d'avenir industriel\"\n FAUX ! 1 400 ha de GDIZ. Transformation locale. Export de produits finis.\n\nVrifie ",
  },
  {
    rumor: "Le cot de la vie n'a fait qu'augmenter.",
    reality: "L'inflation au Bnin a t parmi les plus matrises de la sous-rgion (2-3% en moyenne). Les cantines scolaires PNASI allgent le budget alimentaire de millions de familles. L'accs  l'eau et l'lectricit rduisent les dpenses des mnages. Le microcrdit Alafia augmente les revenus des femmes.",
    source: "INSAE, BCEAO",
    category: "Vie quotidienne",
    whatsappText: " VRAI OU FAUX ?\n\"Le cot de la vie explose\"\n Inflation matrise (2-3%). Cantines gratuites. Eau et courant rduisent les charges.\n\nVrifie ",
  },
] as const;
```

## 4.5 Testimonials (6)

```typescript
// src/data/testimonials.ts
export const testimonials = [
  {
    name: "Marcelline A.",
    department: "Zou",
    age: 38,
    quote: "Avant, mes enfants marchaient 8 km pour aller  l'cole. Depuis la nouvelle route, le trajet ne prend plus que 15 minutes en zmidjan. Ils arrivent  l'heure et ils mangent  midi.",
    context: "Route" as const,
  },
  {
    name: "Kouassi D.",
    department: "Borgou",
    age: 42,
    quote: "Mon atelier de soudure tait paralys par les coupures d'lectricit. Maintenant j'ai du courant stable. J'ai embauch 3 apprentis et je travaille le soir.",
    context: "nergie" as const,
  },
  {
    name: "Fatouma S.",
    department: "Atacora",
    age: 29,
    quote: "Le centre de sant de notre commune a sauv la vie de ma fille. Avant, il fallait aller jusqu' Natitingou  4 heures de route en moto.",
    context: "Sant" as const,
  },
  {
    name: "Pascal K.",
    department: "Littoral",
    age: 24,
    quote: "Diplm en informatique, personne ne m'embauchait. La GDIZ m'a donn mon premier emploi. J'ai 24 ans, je gagne ma vie et je suis autonome.",
    context: "Emploi" as const,
  },
  {
    name: "Adjo M.",
    department: "Couffo",
    age: 45,
    quote: "Le microcrdit Alafia m'a permis de lancer mon commerce de tissus au march. Aujourd'hui je nourris mes 4 enfants et j'ai ouvert une deuxime boutique.",
    context: "Microcrdit" as const,
  },
  {
    name: "Ibrahim Y.",
    department: "Alibori",
    age: 50,
    quote: "L'eau au robinet dans notre village, c'tait impensable. Ma femme ne marche plus 3 km avec une bassine sur la tte. Mes petits-enfants ne connatront jamais a.",
    context: "Eau" as const,
  },
] as const;
```

## 4.6 Gamification (Missions & Levels)

```typescript
// src/data/missions.ts
export const weeklyMissions = [
  { id: "share-bilan", title: "Partager le bilan sur WhatsApp", description: "Envoyez le lien  5 contacts", points: 50, icon: "Share2", actionLabel: "Partager", actionUrl: "#share" },
  { id: "check-registration", title: "Vrifier son inscription lectorale", description: "Assurez-vous d'tre sur la liste", points: 100, icon: "ClipboardCheck", actionLabel: "Vrifier", actionUrl: "#check" },
  { id: "invite-friends", title: "Inviter 3 amis", description: "Envoyez votre lien personnel", points: 150, icon: "Users", actionLabel: "Inviter", actionUrl: "#invite" },
  { id: "testimony", title: "Partager votre tmoignage", description: "Qu'est-ce qui a chang depuis 2016 ?", points: 200, icon: "MessageCircle", actionLabel: "Tmoigner", actionUrl: "#testify" },
  { id: "quiz", title: "Quiz bilan", description: "10 questions pour tester vos connaissances", points: 100, icon: "Brain", actionLabel: "Jouer", actionUrl: "#quiz" },
  { id: "decode-rumor", title: "Dcoder une rumeur", description: "Lisez et partagez un dcodage", points: 75, icon: "Search", actionLabel: "Dcoder", actionUrl: "/decodeur" },
] as const;

export const levels = [
  { name: "Sympathisant", minPoints: 0, maxPoints: 99, badge: "" },
  { name: "Militant", minPoints: 100, maxPoints: 299, badge: "" },
  { name: "Ambassadeur", minPoints: 300, maxPoints: 599, badge: "" },
  { name: "Champion", minPoints: 600, maxPoints: 999, badge: "" },
  { name: "Hros de la Continuit", minPoints: 1000, maxPoints: Infinity, badge: "" },
] as const;
```

## 4.7 Constants

```typescript
// src/data/constants.ts
export const ELECTION_DATE = new Date("2026-04-12T07:00:00+01:00");
export const CAMPAIGN_START = new Date("2026-03-27T00:00:00+01:00");
export const CAMPAIGN_END = new Date("2026-04-10T23:59:59+01:00");
export const EXCHANGE_RATE = 557; // 1 USD = 557 FCFA
export const SITE_URL = "https://benin2026.bj";
export const SITE_NAME = "Bnin 2026  10 ans de preuves";
export const TOTAL_SUPPORTERS = 51347; // Initial mock  replaced by live DB query
```

---

# 5. PAGE SPECIFICATIONS

## 5.0 Global Layout

```

  FLAG STRIPE (5px)   sticky top:0, z-[100]

 W26  Accueil Bilan IA QG  [CTA]  sticky top:5px, z-[99], glass blur

  J-44  51,347  12/12   ticker marquee, hidden on /assistant

                                 
         PAGE CONTENT            
                                 
         max-w-[680px]           
         mx-auto                 
         px-4                    
                                 

 Footer                          

 J-44        [Rejoindre ]        fixed bottom:0, z-[98]

```

Content max-width is 680px. NOT 1200px. This is a mobile-first campaign, not a SaaS dashboard. Even on desktop, narrow centered content reads better and feels more editorial.

## 5.1 Home Page (`/`)

**Section order (top  bottom):**

### A. Hero (dark bg, `surface-inverse`)
- Diamond SVG pattern background at 3% opacity
- Status pill with green pulse: "PRSIDENTIELLE  12 AVRIL 2026"
- H1 (Newsreader display): "10 ans de\nfondations.\nScurisons l'avenir."  "fondations" has inline green underline (CSS pseudo-element), "Scurisons" in `benin-yellow`
- Subtitle (Outfit 400, 15px, `text-ink-inverse/55`): 2 sentences about the platform
- Two CTAs: "Rejoindre le mouvement " (green) + "Interroger le bilan " (outline white)
- **Inline stat bar** AT THE BOTTOM of the hero (not a separate section): 4-column compact grid (`rgba(255,255,255,0.04)` cells). Numbers in JetBrains Mono 700 green/yellow. Labels in Outfit 10px muted. Stats: `180+ MW` | `80% eau` | `1M+ repas` | `J-XX`

### B. Before/After (light bg, `surface`)
- H2 (Newsreader): "Avant / Aprs" + right-aligned "Sources officielles" caption
- **Asymmetric grid**: card[0] = `col-span-2`, cards[1-4] = `grid-cols-2`, card[5] = `col-span-2`
- Each card: shadcn `Card` with `border-l-[3px] border-benin-green`. Before value (strikethrough, muted mono)  arrow  After value (large green mono). Click to expand detail text.
- Framer Motion: `useInView` triggers scale+fade animation staggered at 80ms intervals

### C. Chat Teaser (alt bg, `surface-alt`)
- H2 (Newsreader): "Posez la question." + "Ouvrir l'IA " link aligned right
- Fake chat card: green dot "en ligne", demo user message, demo AI response with source `Badge` components. Entire card is clickable  `/assistant`

### D. Department Explorer (light bg, `surface`)
- H2 (Newsreader): "Votre dpartement."
- **Vertical list, NOT a grid**. shadcn `Accordion` with custom styling:
  - Each trigger: numbered index (mono, muted 01-12) + name (Outfit 700) + capital (muted) + supporter count (mono green)
  - Each content: achievements text + "Rejoindre {dept}" button (yellow) + WhatsApp share button (green)
  - Open state: full green background, white text, yellow count
- Sorted by supporter count descending

### E. Testimonials (dark bg, `surface-inverse`)
- H2 (Newsreader, white): "Des vies qui changent."
- Auto-carousel (4.5s). Giant opening `"` in Newsreader 300 weight, benin-yellow
- Quote in Newsreader italic 18px. Name + department + initial avatar (green gradient circle)
- Dot indicators: active = yellow elongated pill, inactive = white/12 circle
- Framer Motion `AnimatePresence` for smooth transitions

### F. Final CTA (light bg)
- Giant animated counter (JetBrains Mono 48px green, `useInView` trigger)
- "Bninois ont rejoint" small text
- H2 (Newsreader): "Et vous ?"
- Full-width green button (shadcn `Button` variant="default" size="full")
- WhatsApp share link below

## 5.2 Bilan Page (`/bilan`)
- H1 (Newsreader): "D'o on vient. O on va."
- Vertical timeline with gradient rail (green  yellow  muted)
- 11 event cards with status badges (shadcn `Badge` variant="done|progress|future")
- Key figures in JetBrains Mono large green when present
- Framer Motion staggered scroll reveal
- Optional: shadcn `Tabs` at top to toggle "Bilan 2016-2026" / "Projets 2026-2033"

## 5.3 Assistant IA Page (`/assistant`)
- FULL-HEIGHT chat. No ticker, no countdown bar, no footer.
- Header: green "IA" badge (mono) + "IA Bilan Bnin" + status text
- Messages: ScrollArea. User = green right-aligned. AI = white left with "IA" avatar + source `Badge`s
- Typing indicator: 3 bouncing dots
- Suggested questions: horizontal scroll of pill `Button`s (variant="secondary" size="sm")
- Input: fixed bottom. Outfit input + green send `Button` (variant="default" size="icon")
- Conversion: after 3+ exchanges, `Alert` component banner appears above input

## 5.4 Dcodeur Page (`/decodeur`)
- Header card: `benin-red-muted` bg with H1 "Le Dcodeur."
- shadcn `Accordion`: trigger has  icon transition (see 3.4 above)
- Each content: green bg card with facts + source + WhatsApp `Button` (variant="whatsapp" size="sm")
- Bottom CTA  link to `/assistant`

## 5.5 QG Militant Page (`/qg`)
- Dark header card (inset with margin, `surface-inverse`, rounded bottom)
- Progress: shadcn `Progress` component customized with green gradient fill
- Missions: shadcn `Card` list. Completed = muted + strikethrough + green left border
- Leaderboard: top 5 departments by supporters. Gold/Silver/Bronze styling
- Militant card: dark gradient card with tricolor bottom stripe

---

# 6. CONVERSION FUNNEL

```
ARRIVE     WhatsApp link / Facebook / Google organic
DISCOVER   Hero + Before/After stats  ("wow, I didn't know")
EXPLORE    Chatbot or Department detail  (personalization)
CONVINCE   Decoder answers objections  (trust)
CONVERT    Subscribe via Sheet modal  (action)
ACTIVATE   QG Militant missions  (retention)
MULTIPLY   WhatsApp shares  (virality  new arrivals)
```

### Progressive Engagement Scoring (client-side state)
```
Click department        +1 point
Ask chatbot question    +2 points
Open decoder item       +1 point
Scroll 75% of homepage  +1 point
When score  3          Show floating banner (NOT a blocking modal)
User clicks banner      Open subscribe Sheet
```

---

# 7. WHATSAPP STRATEGY

Every shareable element gets a UNIQUE pre-formatted message. Use the `WhatsAppShareButton` component everywhere:

```typescript
// Pre-formatted wa.me URL builder
export function waUrl(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message + "\n " + SITE_URL)}`;
}
```

Messages per content type  see the `whatsappText` field in every data file above.

---

# 8. SEO & OPEN GRAPH

- Root metadata in `app/layout.tsx`: title template, description, OG image 1200x630
- Per-page metadata via `generateMetadata()` in each page.tsx
- Dynamic OG images for `/departement/[slug]` using `next/og` (Satori)
- Each OG image: flag colors, department name, key stat, supporter count
- Critical for WhatsApp previews (WhatsApp shows OG card when link is shared)

---

# 9. PERFORMANCE & PWA

| Metric | Budget |
|--------|--------|
| FCP (3G) | < 1.2s |
| LCP (3G) | < 2.0s |
| TBT | < 150ms |
| CLS | < 0.05 |
| Home weight (gzip) | < 120 KB |
| JS bundle (home) | < 50 KB |
| Font files total | < 80 KB |
| TTI (3G) | < 2.5s |

**PWA manifest**: name "Bnin 2026", theme `#008751`, background `#0C1810`. Installable on Chrome Android. Service Worker caches static pages. Offline fallback for bilan + decoder.

---

# 10. ANALYTICS EVENTS

Track every meaningful interaction:
```
cta_click        { location, page }
modal_open       { trigger: "button"|"banner"|"auto" }
subscribe        { department }
department_view  { department }
decoder_open     { index }
chat_question    { question_preview }
whatsapp_share   { content_type, department? }
scroll_depth     { page, depth: 25|50|75|100 }
mission_start    { mission_id }
```

---

# 11. LAUNCH CHECKLIST

- [ ] Lighthouse mobile  90 (throttled 3G)
- [ ] Tested on Tecno Spark 10 (Chrome, 720p, Android 13)
- [ ] Geist  Outfit + Newsreader + JetBrains Mono self-hosted via next/font
- [ ] PWA installable on Chrome Android
- [ ] All wa.me links produce correct preview cards
- [ ] Every page has unique title + meta + OG tags
- [ ] Dynamic OG images for department pages
- [ ] Color contrast  4.5:1 everywhere
- [ ] Forms work without JS (progressive enhancement)
- [ ] All analytics events firing
- [ ] All copy reviewed (zero placeholder text)
- [ ] Domain configured with SSL
- [ ] Static export fallback ready

---

# 12. DO NOT

- Use Inter, Roboto, DM Sans, Space Grotesk, Geist, Poppins, or any AI-favorite font
- Create uniform card grids  every section must have a distinct layout rhythm
- Use stock photos or placeholder images  text + CSS only for MVP
- Add features not in this spec  ship MVP first, iterate later
- Compromise on performance budget  cut features before compromising speed
- Use Lorem Ipsum anywhere  all content is provided above
- Use purple gradients, glassmorphism, or floating decorative elements
- Put the candidate's face as the hero image  this platform is about DATA and PEOPLE
- Ignore WhatsApp  it's the #1 distribution channel, not an afterthought
- Build for desktop first  90%+ of traffic will be mobile on low-end Android
