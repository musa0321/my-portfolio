// =============================================================================
// Portfolio Type Definitions
// Strict contracts for all portfolio data structures
// =============================================================================

/** Supported CMS/website platforms */
export type Platform = 'wordpress' | 'wix' | 'squarespace';

/** Project category for filtering and display */
export type ProjectCategory =
  | 'E-Commerce'
  | 'Portfolio'
  | 'Corporate'
  | 'SaaS'
  | 'Blog'
  | 'Agency'
  | 'Architecture'
  | 'Wellness'
  | 'Creative';

/** A single portfolio project */
export interface Project {
  id: string;
  slug: string;
  title: string;
  platform: Platform;
  category: ProjectCategory;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  challenge?: string;
  approach?: string;
  solution?: string;
  outcome?: string;
  images: {
    thumbnail: string;
    gallery?: string[];
  };
  featured: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
}

/** Skill category groupings */
export type SkillCategoryName =
  | 'Frontend'
  | 'CMS & E-commerce'
  | 'Backend'
  | 'Tools';

/** A single skill entry */
export interface Skill {
  name: string;
}

/** A category containing multiple skills */
export interface SkillCategory {
  category: SkillCategoryName;
  skills: Skill[];
}

/** A service offering */
export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Social media link */
export interface SocialLink {
  platform: string;
  url?: string;
  label: string;
}

/** Site-wide configuration */
export interface SiteConfig {
  name: string;
  role: string;
  description: string;
  navigation: NavLink[];
  social: SocialLink[];
  contact: {
    email?: string;
    phone?: string;
    location?: string;
  };
}
