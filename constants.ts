
import { Project, CaseLog } from './types';
import { Layers, Zap, Crown, Code, Smartphone, Globe, Cpu, Palette } from 'lucide-react';

export const HERO_TITLES = [
  "Founder of Dotvely Studios",
  "Vibe Coder",
  "High-End 21st Century Specialist"
];

export const TECH_STACK = [
  { name: 'React', icon: Code },
  { name: 'Vite', icon: Zap },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Framer Motion', icon: Layers },
  { name: 'GSAP', icon: Cpu },
  { name: 'TypeScript', icon: Code },
  { name: 'Next.js', icon: Globe },
  { name: 'Mobile First', icon: Smartphone },
];

export const PHILOSOPHY_POINTS = [
  { title: "0.4s Load Speeds", desc: "Optimized for instant interaction." },
  { title: "Experience-First", desc: "Design that feels alive." },
  { title: "Built for the 1%", desc: "Exclusive standards for elite brands." },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Dotvely Studios",
    category: "Agency System",
    image: "https://image2url.com/r2/bucket2/images/1768059360431-9aba5450-b173-43c9-8012-58cf13bfab1e.png", 
    live: true,
    link: "https://dotvely.vercel.app/",
    description: "The official digital headquarters. A masterclass in hacker-luxury aesthetics, performance architecture, and brand identity.",
    tech: ["React", "Framer Motion", "Vite"]
  },
  {
    id: 2,
    title: "BluBloom Interior",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=60&w=800&auto=format&fit=crop&fm=webp", 
    live: true,
    link: "https://blubloom-interior.vercel.app/",
    description: "Immersive interior design showcase featuring fluid gallery transitions and minimalist luxury spacing.",
    tech: ["Next.js", "Tailwind", "GSAP"]
  },
  {
    id: 3,
    title: "SCS Designers",
    category: "Creative Collective",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=800&auto=format&fit=crop&fm=webp", 
    live: true,
    link: "https://scs-designers-demo.vercel.app/",
    description: "Experimental grid layout for a design collective, pushing the boundaries of standard web typography.",
    tech: ["React", "WebGL", "Three.js"]
  }
];

export const CASE_LOGS: CaseLog[] = [
  {
    id: "LOG_042",
    client: "FinTech Startup X",
    type: "Performance Audit",
    issue: "Legacy dashboard rendering lag (>2s)",
    solution: "Implemented WebWorkers & Virtualized Lists",
    impact: "Latency reduced to 120ms. User retention +15%.",
    status: "OPTIMIZED"
  },
  {
    id: "LOG_089",
    client: "Luxe Fashion House",
    type: "Brand Experience",
    issue: "Low conversion on mobile devices",
    solution: "App-like gesture navigation & Prefetching",
    impact: "Mobile conversion rate doubled (1.2% -> 2.5%)",
    status: "DEPLOYED"
  },
  {
    id: "LOG_101",
    client: "SaaS Enterprise",
    type: "Architecture",
    issue: "Unstable websocket connections",
    solution: "Rewrote state management layer with Signals",
    impact: "99.99% Uptime during peak traffic.",
    status: "SCALED"
  }
];

export const WHATSAPP_LINK = "https://wa.me/918527960872";
