export const SITE = {
  name: 'Vikrant Bhurke',
  titleDefault: 'Vikrant Bhurke | Software Engineer & Angular Expert',
  description:
    'Portfolio of Vikrant Bhurke — Software Engineer, Angular Expert, and AI Enthusiast building enterprise-grade web apps in Mumbai, India.',
  url: 'https://vikrantbhurke.com',
  locale: 'en_IN',
  twitter: '@bhurkevikrant',
  image: 'https://vikrantbhurke.com/assets/images/og-image.jpg',
  imageAlt: 'Vikrant Bhurke — Software Engineer and Angular Expert',
  email: 'vikrantbhurke.dev@gmail.com',
  location: 'Mumbai, India',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/vikrant-bhurke',
    'https://www.linkedin.com/in/vikrantbhurke12',
    'https://x.com/bhurkevikrant',
  ],
} as const;

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'profile' | 'article';
}

export const PAGE_SEO: Record<string, PageSeo> = {
  '': {
    title: SITE.titleDefault,
    description: SITE.description,
    path: '/',
    type: 'profile',
  },
  about: {
    title: 'About | Vikrant Bhurke',
    description:
      'Learn about Vikrant Bhurke — Software Engineer specializing in Angular, scalable architectures, and modern web experiences.',
    path: '/about',
  },
  skills: {
    title: 'Skills | Vikrant Bhurke',
    description:
      'Tech stack and skills of Vikrant Bhurke — Angular, TypeScript, Node.js, cloud platforms, and modern frontend tooling.',
    path: '/skills',
  },
  experience: {
    title: 'Experience | Vikrant Bhurke',
    description:
      'Professional experience of Vikrant Bhurke building enterprise Angular applications for product companies.',
    path: '/experience',
  },
  projects: {
    title: 'Projects | Vikrant Bhurke',
    description:
      'Featured Angular and web projects by Vikrant Bhurke for enterprise clients and startups.',
    path: '/projects',
  },
  certifications: {
    title: 'Certifications | Vikrant Bhurke',
    description:
      'Certifications and credentials validating Vikrant Bhurke’s expertise in modern web and cloud technologies.',
    path: '/certifications',
  },
  blog: {
    title: 'Blog | Vikrant Bhurke',
    description:
      'Articles and notes from Vikrant Bhurke on Angular, frontend engineering, and building digital products.',
    path: '/blog',
    type: 'article',
  },
  contact: {
    title: 'Contact | Vikrant Bhurke',
    description:
      'Get in touch with Vikrant Bhurke for Angular development, consulting, and collaboration opportunities.',
    path: '/contact',
  },
};
