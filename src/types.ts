export type PageRoute =
  | 'home'
  | 'philosophy'
  | 'journal'
  | 'my-story'
  | 'stories'
  | 'faq'
  | 'connect';

export interface NavItem {
  id: PageRoute;
  label: string;
  href: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface JournalStage {
  number: string;
  title: string;
  theme: string;
  days: string;
  description: string;
  colorAccent: string;
  corePractice: string;
}

export interface StudentStory {
  id: string;
  name: string;
  category: string;
  quote: string;
  reflection: string;
  verifiedOutcome?: string;
  imagePlaceholderText: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
}

