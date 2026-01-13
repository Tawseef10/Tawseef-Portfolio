
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  live: boolean;
  link: string;
  description: string;
  tech: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CaseLog {
  id: string;
  client: string;
  type: string;
  issue: string;
  solution: string;
  impact: string;
  status: 'OPTIMIZED' | 'DEPLOYED' | 'SCALED';
}

export enum SectionId {
  HERO = 'hero',
  PHILOSOPHY = 'philosophy',
  WORK = 'work',
  SERVICES = 'services',
  LOGS = 'logs',
  ABOUT = 'about',
  CONTACT = 'contact'
}
