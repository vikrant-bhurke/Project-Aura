export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

export const PORTFOLIO = {
  name: 'Vikrant Bhurke',
  initials: 'VB',
  title: 'Software Engineer | Angular Expert | AI Enthusiast | Future Export Entrepreneur',
  tagline:
    'Building enterprise-grade web applications, beautiful user experiences and scalable digital products with Angular and modern technologies.',
  email: 'vikrant.bhurke@email.com',
  location: 'Pune, India',
  resumeUrl: '#',

  social: {
    github: 'https://github.com/vikrantbhurke',
    linkedin: 'https://linkedin.com/in/vikrantbhurke',
    twitter: 'https://twitter.com/vikrantbhurke',
    instagram: 'https://instagram.com/vikrantbhurke',
  },

  stats: [
    { value: '2.5+', label: 'Years Experience', icon: 'work_history' },
    { value: '20+', label: 'Projects Completed', icon: 'folder_open' },
    { value: '10+', label: 'Technologies', icon: 'code' },
    { value: '5★', label: 'Client Ratings', icon: 'star' },
  ] as Stat[],

  about: {
    bio: `I'm a passionate Software Engineer specializing in Angular and modern web technologies. With 2.5+ years of experience building enterprise applications, I focus on creating scalable, performant, and user-friendly solutions that drive business value.`,
    highlights: [
      { label: 'Experience', value: '2.5+ Years', icon: 'schedule' },
      { label: 'Projects', value: '20+ Completed', icon: 'rocket_launch' },
      { label: 'Companies', value: '2 Worked At', icon: 'business' },
      { label: 'Location', value: 'India', icon: 'location_on' },
    ],
    image: 'assets/images/vikrant.png',
  },

  skills: {
    frontend: [
      { name: 'Angular', icon: 'assets/icons/Angular.svg' },
      { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
      { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
      { name: 'HTML5', icon: 'assets/icons/html5-svgrepo-com.svg' },
      { name: 'CSS3', icon: 'assets/icons/CSS3.svg' },
      { name: 'SCSS', icon: 'assets/icons/CSS3.svg' },
      { name: 'Angular Material', icon: 'assets/icons/Angular.svg' },
      { name: 'Bootstrap', icon: 'assets/icons/CSS3.svg' },
      { name: 'RxJS', icon: 'assets/icons/javascript.svg' },
      { name: 'NgRx', icon: 'assets/icons/Angular.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
      { name: 'Express.js', icon: 'assets/icons/nodejs.svg' },
      { name: 'REST APIs', icon: 'assets/icons/javascript.svg' },
      { name: 'MongoDB', icon: 'assets/icons/nodejs.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'assets/icons/git-icon-logo-svgrepo-com.svg' },
      { name: 'VS Code', icon: 'assets/icons/visual-studio-code-svgrepo-com.svg' },
      { name: 'Angular CLI', icon: 'assets/icons/Angular.svg' },
      { name: 'npm', icon: 'assets/icons/nodejs.svg' },
    ],
    cloud: [
      { name: 'AWS', icon: 'assets/icons/aws.svg' },
      { name: 'Firebase', icon: 'assets/icons/aws.svg' },
      { name: 'Vercel', icon: 'assets/icons/aws.svg' },
    ],
    future: [
      { name: 'AI/ML', icon: 'assets/icons/javascript.svg' },
      { name: 'Python', icon: 'assets/icons/nodejs.svg' },
      { name: 'Docker', icon: 'assets/icons/aws.svg' },
      { name: 'Kubernetes', icon: 'assets/icons/aws.svg' },
    ],
  },

  experience: [
    {
      company: 'Alwrite',
      role: 'Angular Developer',
      period: '03/2024 – 02/2025',
      logo: 'AW',
      location: 'Lower Parel, Mumbai',
      summary:
        'Product (SuperAdmin, Property, Marine, Liability, Motor) + Service. Alwrite is a next-gen platform designed to empower intermediaries and insurance providers.',
      highlights: [
        'Built Ionic mobile app for the insurance tech platform',
        'Developed admin portal with Moody’s APIs and Google integration',
        'Delivered endorsement module for insurance workflows',
        'Created dashboards for Underwrite, Sale, and multi-user roles',
        'Integrated Google Maps and third-party services into the portal',
      ],
    },
    {
      company: 'TrueCover',
      role: 'Angular Developer',
      period: '08/2022 – 03/2024',
      logo: 'TC',
      location: 'MBC Park, Thane',
      summary:
        'Product (Admin, Claims, Wallet, Motor, Health & Life) + Service. TrueCover offers cutting-edge Claims Automation using AI and ML-powered OCR.',
      highlights: [
        'Revamped Admin 2.0 portal on Angular 14',
        'Built client onboarding flows for brokers, insurers, and HR',
        'Migrated production portal from Angular 10 to Angular 14',
        'Implemented User & Ticket Management systems with RBAC',
        'Developed Wallet web application for claims and payments',
      ],
    },
  ] as Experience[],

  projects: [
    {
      title: 'Admin Portal Revamping',
      description:
        'Portal for brokers, insurers, and HR with customizable benefit options, onboarding flows, and data visualization.',
      tags: ['Angular 14', 'Material', 'RxJS', 'Charts'],
      gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    },
    {
      title: 'Angular Portal Migration',
      description:
        'Migrated a production insurance portal from Angular 10 to Angular 14 for better performance and compatibility.',
      tags: ['Angular', 'TypeScript', 'Migration'],
      gradient: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)',
    },
    {
      title: 'User Management System',
      description:
        'Comprehensive system with role-based access control, reusable components, and ticket management.',
      tags: ['Angular', 'NgRx', 'RBAC', 'REST API'],
      gradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 100%)',
    },
    {
      title: 'Ionic Insurance Mobile App',
      description:
        'Cross-platform Ionic app for brokers and customers with real-time data and API integration.',
      tags: ['Ionic', 'Angular', 'Mobile', 'API'],
      gradient: 'linear-gradient(135deg, #0f766e 0%, #22d3ee 100%)',
    },
    {
      title: 'Endorsement Module',
      description:
        'Modernized insurance endorsement workflows to automate processes and improve user experience.',
      tags: ['Angular', 'Forms', 'Insurance'],
      gradient: 'linear-gradient(135deg, #9a3412 0%, #f97316 100%)',
    },
    {
      title: 'Wallet Web Application',
      description:
        'Wallet experience for claims and payments within the TrueCover ecosystem, built with Angular.',
      tags: ['Angular', 'Wallet', 'REST API'],
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
    },
  ] as Project[],

  certifications: [
    { title: 'Angular Developer', issuer: 'Google', icon: 'assets/icons/Angular.svg', color: '#dd0031' },
    { title: 'AWS Cloud Practitioner', issuer: 'Amazon', icon: 'assets/icons/aws.svg', color: '#ff9900' },
    { title: 'JavaScript Specialist', issuer: 'Meta', icon: 'assets/icons/javascript.svg', color: '#f7df1e' },
    { title: 'TypeScript Pro', issuer: 'Microsoft', icon: 'assets/icons/typescript.svg', color: '#3178c6' },
    { title: 'Git & GitHub', issuer: 'GitHub', icon: 'assets/icons/git-icon-logo-svgrepo-com.svg', color: '#f05032' },
  ] as Certification[],

  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager, TechCorp',
      quote: 'Vikrant delivered exceptional work on our enterprise portal. His Angular expertise and attention to detail exceeded our expectations.',
      avatar: 'SJ',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupHub',
      quote: 'A talented developer who consistently produces clean, maintainable code. Vikrant is a valuable asset to any development team.',
      avatar: 'MC',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Design Lead, Creative Agency',
      quote: 'Working with Vikrant was seamless. He understands both technical requirements and user experience, delivering pixel-perfect implementations.',
      avatar: 'ED',
      rating: 5,
    },
  ] as Testimonial[],

  blogPosts: [
    {
      title: 'Building Scalable Angular Applications',
      excerpt: 'Learn best practices for structuring large-scale Angular projects with modular architecture and lazy loading.',
      date: 'Jul 15, 2026',
      readTime: '8 min read',
      tag: 'Angular',
    },
    {
      title: 'State Management with NgRx',
      excerpt: 'A comprehensive guide to implementing NgRx for complex state management in enterprise applications.',
      date: 'Jun 28, 2026',
      readTime: '12 min read',
      tag: 'NgRx',
    },
    {
      title: 'Optimizing Angular Performance',
      excerpt: 'Techniques to improve your Angular app performance including OnPush strategy, trackBy, and lazy loading.',
      date: 'Jun 10, 2026',
      readTime: '6 min read',
      tag: 'Performance',
    },
    {
      title: 'Getting Started with AI in Web Development',
      excerpt: 'Exploring how AI tools and integrations can enhance modern web development workflows.',
      date: 'May 22, 2026',
      readTime: '10 min read',
      tag: 'AI',
    },
  ] as BlogPost[],

  services: [
    'Web Development',
    'Angular Consulting',
    'UI/UX Implementation',
    'Code Review',
    'Technical Mentoring',
  ],

  footerLinks: {
    quick: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Skills', path: '/skills' },
      { label: 'Experience', path: '/experience' },
      { label: 'Projects', path: '/projects' },
    ],
    resources: [
      { label: 'Certifications', path: '/certifications' },
      { label: 'Blog', path: '/blog' },
      { label: 'GitHub', path: 'https://github.com/vikrantbhurke', external: true },
      { label: 'LinkedIn', path: 'https://linkedin.com/in/vikrantbhurke', external: true },
    ],
  },
};

export type SkillCategory = keyof typeof PORTFOLIO.skills;
