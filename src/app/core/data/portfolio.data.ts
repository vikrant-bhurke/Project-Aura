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
  logoUrl?: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
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
  email: 'vikrantbhurke.dev@gmail.com',
  location: 'Mumbai, India',
  resumeUrl: '#',

  social: {
    github: 'https://github.com/vikrant-bhurke',
    linkedin: 'https://www.linkedin.com/in/vikrantbhurke12',
    twitter: 'https://twitter.com/vikrantbhurke',
    instagram: 'https://instagram.com/vikrantbhurke',
  },

  stats: [
    { value: '3.5+', label: 'Years Experience', icon: 'work_history' },
    { value: '20+', label: 'Projects Completed', icon: 'folder_open' },
    { value: '10+', label: 'Technologies', icon: 'code' },
    { value: '5★', label: 'Client Ratings', icon: 'star' },
  ] as Stat[],

  about: {
    bio: `I'm a passionate Software Engineer specializing in Angular and modern web technologies. With 3.5+ years of experience building enterprise applications, I focus on creating scalable, performant, and user-friendly solutions that drive business value.`,
    highlights: [
      { label: 'Experience', value: '3.5+ Years', icon: 'schedule' },
      { label: 'Projects', value: '20+ Completed', icon: 'rocket_launch' },
      { label: 'Companies', value: '3 Worked At', icon: 'business' },
      { label: 'Location', value: 'Mumbai, India', icon: 'location_on' },
    ],
    image: 'assets/images/vikrant.webp',
  },

  skills: {
    frontend: [
      { name: 'Angular', icon: 'assets/icons/Angular.svg' },
      { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
      { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
      { name: 'HTML5', icon: 'assets/icons/html5-svgrepo-com.svg' },
      { name: 'CSS3', icon: 'assets/icons/CSS3.svg' },
      { name: 'SCSS', icon: 'assets/icons/sass.svg' },
      { name: 'Angular Material', icon: 'assets/icons/material.svg' },
      { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
      { name: 'RxJS', icon: 'assets/icons/rxjs.svg' },
      { name: 'NgRx', icon: 'assets/icons/ngrx.svg' },
      { name: 'Chart.js', icon: 'assets/icons/chartjs.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
      { name: 'Express.js', icon: 'assets/icons/express.svg' },
      { name: 'REST APIs', icon: 'assets/icons/restapi.svg' },
      { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'assets/icons/git-icon-logo-svgrepo-com.svg' },
      { name: 'VS Code', icon: 'assets/icons/visual-studio-code-svgrepo-com.svg' },
      { name: 'Angular CLI', icon: 'assets/icons/Angular.svg' },
      { name: 'npm', icon: 'assets/icons/npm.svg' },
      { name: 'Ionic', icon: 'assets/icons/ionic.svg' },
    ],
    cloud: [
      { name: 'AWS', icon: 'assets/icons/aws.svg' },
      { name: 'Firebase', icon: 'assets/icons/firebase.svg' },
      { name: 'Vercel', icon: 'assets/icons/vercel.svg' },
    ],
    future: [
      { name: 'AI/ML', icon: 'assets/icons/tensorflow.svg' },
      { name: 'Python', icon: 'assets/icons/python.svg' },
      { name: 'Docker', icon: 'assets/icons/docker.svg' },
      { name: 'Kubernetes', icon: 'assets/icons/kubernetes.svg' },
    ],
  },

  experience: [
    {
      company: '63 moons',
      role: 'Software Engineer',
      period: '05/2025 – Present',
      logo: '63',
      logoUrl: 'assets/images/companies/63moons.png',
      location: 'Mumbai, India',
      summary:
        'Building client-facing dashboards and internal enterprise platforms with Angular, Chart.js, and modern web technologies.',
      highlights: [
        'Built interactive client dashboards using Chart.js for data visualization and reporting',
        'Developed and enhanced HRMS modules for internal people and operations workflows',
        'Contributed to an in-house SharePoint-like collaboration platform for documents and team productivity',
      ],
    },
    {
      company: 'Alwrite',
      role: 'Angular Developer',
      period: '03/2024 – 02/2025',
      logo: 'AW',
      logoUrl: 'assets/images/companies/alwrite.png',
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
      logoUrl: 'assets/images/companies/truecover.png',
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
      image: 'assets/images/projects/admin-portal.jpg',
    },
    {
      title: 'Angular Portal Migration',
      description:
        'Migrated a production insurance portal from Angular 10 to Angular 14 for better performance and compatibility.',
      tags: ['Angular', 'TypeScript', 'Migration'],
      gradient: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)',
      image: 'assets/images/projects/migration.jpg',
    },
    {
      title: 'User Management System',
      description:
        'Comprehensive system with role-based access control, reusable components, and ticket management.',
      tags: ['Angular', 'NgRx', 'RBAC', 'REST API'],
      gradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 100%)',
      image: 'assets/images/projects/user-mgmt.jpg',
    },
    {
      title: 'Ionic Insurance Mobile App',
      description:
        'Cross-platform Ionic app for brokers and customers with real-time data and API integration.',
      tags: ['Ionic', 'Angular', 'Mobile', 'API'],
      gradient: 'linear-gradient(135deg, #0f766e 0%, #22d3ee 100%)',
      image: 'assets/images/projects/ionic-app.jpg',
    },
    {
      title: 'Endorsement Module',
      description:
        'Modernized insurance endorsement workflows to automate processes and improve user experience.',
      tags: ['Angular', 'Forms', 'Insurance'],
      gradient: 'linear-gradient(135deg, #9a3412 0%, #f97316 100%)',
      image: 'assets/images/projects/endorsement.jpg',
    },
    {
      title: 'Wallet Web Application',
      description:
        'Wallet experience for claims and payments within the TrueCover ecosystem, built with Angular.',
      tags: ['Angular', 'Wallet', 'REST API'],
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
      image: 'assets/images/projects/wallet.jpg',
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
      name: 'Mukul Kumar',
      role: 'AVP Engineering, TrueCover',
      quote:
        'Vikrant consistently delivered high-quality Angular work across complex insurance modules. Reliable, fast, and strong on architecture.',
      avatar: 'MK',
      rating: 5,
    },
    {
      name: 'Amiya Sagar',
      role: 'Cofounder & CTO, TrueCover',
      quote:
        'A dependable engineer who owns features end to end. Vikrant helped scale our portals with clean Angular code and solid delivery.',
      avatar: 'AS',
      rating: 5,
    },
    {
      name: 'Nitin Srivastava',
      role: 'Co-Founder & CEO, TrueCover',
      quote:
        'Vikrant played a key role in building product experiences that mattered to our customers. Professional, proactive, and outcome-focused.',
      avatar: 'NS',
      rating: 5,
    },
    {
      name: 'Nikhil Nemade',
      role: 'Co-founder, Alwrite',
      quote:
        'From dashboards to mobile workflows, Vikrant executed with clarity and speed. A strong Angular developer and great team collaborator.',
      avatar: 'NN',
      rating: 5,
    },
    {
      name: 'Shivraj Nadar',
      role: 'Founding Team Member, Senior Product Manager, Alwrite',
      quote:
        'Working with Vikrant was smooth from ideation to release. He understands product needs and ships polished, maintainable UI.',
      avatar: 'SN',
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
      { label: 'GitHub', path: 'https://github.com/vikrant-bhurke', external: true },
      { label: 'LinkedIn', path: 'https://www.linkedin.com/in/vikrantbhurke12', external: true },
    ],
  },
};

export type SkillCategory = keyof typeof PORTFOLIO.skills;
