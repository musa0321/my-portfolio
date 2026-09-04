import type { Project, SkillCategory, ServiceItem } from '@/types/portfolio';

// =============================================================================
// PROJECTS — 9 demo projects across 3 platforms
// =============================================================================

export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // WORDPRESS (3)
  // ---------------------------------------------------------------------------
  {
    id: 'wp-vertex-commerce',
    slug: 'vertex-commerce',
    title: 'Vertex Commerce',
    platform: 'wordpress',
    category: 'E-Commerce',
    description:
      'A high-performance WooCommerce storefront with custom product filtering, dynamic pricing rules, and optimized checkout flow. Built for conversion with sub-2s page loads.',
    role: 'Full-Stack WordPress Developer',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'Custom CSS', 'MySQL'],
    features: [
      'Custom product filtering system',
      'Dynamic pricing engine',
      'Optimized checkout flow',
      'Inventory management integration',
      'Mobile-first responsive design',
    ],
    images: {
      thumbnail: '/images/projects/wordpress/vertex-commerce.jpg',
    },
    featured: true,
  },
  {
    id: 'wp-nova-studio',
    slug: 'nova-studio',
    title: 'Nova Studio',
    platform: 'wordpress',
    category: 'Creative',
    description:
      'A visually rich creative agency website featuring immersive project showcases, animated page transitions, and a custom CMS architecture for portfolio management.',
    role: 'WordPress Developer & Frontend Engineer',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'GSAP', 'Custom CSS'],
    features: [
      'Custom portfolio post type',
      'Animated page transitions',
      'Filterable project gallery',
      'Team member profiles',
      'Blog with custom layouts',
    ],
    images: {
      thumbnail: '/images/projects/wordpress/nova-studio.jpg',
    },
    featured: false,
  },
  {
    id: 'wp-luma-interiors',
    slug: 'luma-interiors',
    title: 'Luma Interiors',
    platform: 'wordpress',
    category: 'Portfolio',
    description:
      'An editorial-style interior design portfolio with fullscreen image galleries, project case studies, and an integrated appointment booking system.',
    role: 'WordPress Customization & Architecture',
    technologies: ['WordPress', 'Elementor Pro', 'PHP', 'JavaScript', 'Custom CSS'],
    features: [
      'Fullscreen image galleries',
      'Project case study templates',
      'Appointment booking integration',
      'Before/after image comparisons',
      'SEO-optimized architecture',
    ],
    images: {
      thumbnail: '/images/projects/wordpress/luma-interiors.jpg',
    },
    featured: true,
  },

  // ---------------------------------------------------------------------------
  // WIX (3)
  // ---------------------------------------------------------------------------
  {
    id: 'wix-astra-wellness',
    slug: 'astra-wellness',
    title: 'Astra Wellness',
    platform: 'wix',
    category: 'Wellness',
    description:
      'A serene wellness and spa platform with integrated booking, membership management, and a resource library for holistic health content.',
    role: 'Wix Studio Architect',
    technologies: ['Wix Studio', 'Velo (Wix Code)', 'REST APIs', 'Custom CSS'],
    features: [
      'Wix Bookings integration',
      'Membership tiers with gated content',
      'Resource library with filtering',
      'Testimonial carousel',
      'Newsletter automation',
    ],
    images: {
      thumbnail: '/images/projects/wix/astra-wellness.jpg',
    },
    featured: true,
  },
  {
    id: 'wix-northline-creative',
    slug: 'northline-creative',
    title: 'Northline Creative',
    platform: 'wix',
    category: 'Agency',
    description:
      'A bold creative agency site with dynamic project showcases, team bios, and custom form architecture for client onboarding workflows.',
    role: 'Wix Developer',
    technologies: ['Wix', 'Velo', 'Custom Form Architecture', 'Wix CMS'],
    features: [
      'Dynamic project showcases',
      'Multi-step client onboarding form',
      'Team bio sections',
      'Service package comparison',
      'Custom CMS collections',
    ],
    images: {
      thumbnail: '/images/projects/wix/northline-creative.jpg',
    },
    featured: false,
  },
  {
    id: 'wix-maison-atelier',
    slug: 'maison-atelier',
    title: 'Maison Atelier',
    platform: 'wix',
    category: 'E-Commerce',
    description:
      'A luxury e-commerce boutique built on Wix Stores with curated product presentation, lookbook pages, and integrated sizing guides.',
    role: 'Wix E-Commerce Developer',
    technologies: ['Wix', 'Wix Stores', 'Velo', 'Custom CSS', 'Wix Payments'],
    features: [
      'Curated product presentation',
      'Lookbook-style collection pages',
      'Interactive sizing guide',
      'Wishlist functionality',
      'Order tracking integration',
    ],
    images: {
      thumbnail: '/images/projects/wix/maison-atelier.jpg',
    },
    featured: false,
  },

  // ---------------------------------------------------------------------------
  // SQUARESPACE (3)
  // ---------------------------------------------------------------------------
  {
    id: 'sq-mono-architecture',
    slug: 'mono-architecture',
    title: 'Mono Architecture',
    platform: 'squarespace',
    category: 'Architecture',
    description:
      'A minimalist architecture firm website with immersive project galleries, clean typographic layouts, and seamless navigation between case studies.',
    role: 'Squarespace Developer',
    technologies: ['Squarespace', 'Custom CSS', 'Custom JavaScript', 'Squarespace API'],
    features: [
      'Immersive project galleries',
      'Case study navigation system',
      'Award recognition section',
      'Team profiles with bios',
      'Contact form with project type selection',
    ],
    images: {
      thumbnail: '/images/projects/squarespace/mono-architecture.jpg',
    },
    featured: true,
  },
  {
    id: 'sq-atelier-north',
    slug: 'atelier-north',
    title: 'Atelier North',
    platform: 'squarespace',
    category: 'Portfolio',
    description:
      'A refined photography portfolio showcasing editorial and commercial work with fullscreen image presentations and project narratives.',
    role: 'Squarespace Specialist',
    technologies: ['Squarespace', 'Custom CSS/JS', 'Squarespace Gallery Blocks'],
    features: [
      'Fullscreen image presentations',
      'Project narrative layouts',
      'Client testimonials',
      'Print store integration',
      'Blog with visual storytelling',
    ],
    images: {
      thumbnail: '/images/projects/squarespace/atelier-north.jpg',
    },
    featured: false,
  },
  {
    id: 'sq-oak-and-form',
    slug: 'oak-and-form',
    title: 'Oak & Form',
    platform: 'squarespace',
    category: 'E-Commerce',
    description:
      'A handcrafted furniture brand website with product storytelling, custom collection layouts, and an integrated Squarespace Commerce storefront.',
    role: 'Squarespace E-Commerce Developer',
    technologies: ['Squarespace', 'Squarespace Commerce', 'Custom CSS', 'Form Routing'],
    features: [
      'Product storytelling pages',
      'Custom collection layouts',
      'Material sourcing transparency section',
      'Custom order inquiry form',
      'Shipping calculator integration',
    ],
    images: {
      thumbnail: '/images/projects/squarespace/oak-and-form.jpg',
    },
    featured: true,
  },
];

// =============================================================================
// SKILLS — 4 categories
// =============================================================================

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'jQuery' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'CMS & E-commerce',
    skills: [
      { name: 'WordPress' },
      { name: 'WooCommerce' },
      { name: 'Shopify' },
      { name: 'Shopify Liquid' },
      { name: 'Wix' },
      { name: 'Squarespace' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'MySQL' },
      { name: 'Firebase' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Figma' },
      { name: 'Vercel' },
      { name: 'Netlify' },
    ],
  },
];

// =============================================================================
// SERVICES — 8 service items
// =============================================================================

export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'WordPress Development',
    description:
      'Custom WordPress solutions from theme development to complex plugin architecture. Performance-optimized builds with clean, maintainable code.',
    tags: ['Custom Themes', 'Plugin Development', 'PHP', 'Gutenberg'],
  },
  {
    number: '02',
    title: 'WooCommerce Development',
    description:
      'Scalable e-commerce experiences built on WooCommerce. Custom checkout flows, payment integrations, and inventory management systems.',
    tags: ['E-Commerce', 'Payment Gateways', 'Inventory', 'Subscriptions'],
  },
  {
    number: '03',
    title: 'Wix Development',
    description:
      'Professional Wix Studio and Velo development. Custom functionality, database collections, and third-party API integrations.',
    tags: ['Wix Studio', 'Velo', 'CMS Collections', 'API Integration'],
  },
  {
    number: '04',
    title: 'Squarespace Development',
    description:
      'Tailored Squarespace solutions with custom code injection, advanced styling, and e-commerce configuration for premium brand experiences.',
    tags: ['Custom CSS/JS', 'Commerce', 'Templates', 'SEO'],
  },
  {
    number: '05',
    title: 'Shopify Development',
    description:
      'Shopify storefront development with Liquid templating, theme customization, and app integrations for optimized conversion funnels.',
    tags: ['Liquid', 'Theme Development', 'App Integration', 'Storefront API'],
  },
  {
    number: '06',
    title: 'Frontend Development',
    description:
      'Modern frontend development with React, Next.js, and TypeScript. Component-driven architecture with responsive, accessible interfaces.',
    tags: ['React', 'Next.js', 'TypeScript', 'Responsive Design'],
  },
  {
    number: '07',
    title: 'Performance Optimization',
    description:
      'Core Web Vitals optimization, asset compression, lazy loading strategies, and server-side rendering for peak site performance.',
    tags: ['Core Web Vitals', 'Caching', 'CDN', 'Lazy Loading'],
  },
  {
    number: '08',
    title: 'Website Maintenance',
    description:
      'Ongoing website maintenance, security updates, performance monitoring, and content management support to keep your site running smoothly.',
    tags: ['Security', 'Updates', 'Monitoring', 'Support'],
  },
];

// =============================================================================
// HELPER — Platform-based project filtering
// =============================================================================

export function getProjectsByPlatform(platform: Project['platform']): Project[] {
  return projects.filter((p) => p.platform === platform);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
