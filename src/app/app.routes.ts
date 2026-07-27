import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Vikrant Bhurke | Software Engineer & Angular Expert',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About | Vikrant Bhurke',
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills),
    title: 'Skills | Vikrant Bhurke',
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
    title: 'Experience | Vikrant Bhurke',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Projects | Vikrant Bhurke',
  },
  {
    path: 'certifications',
    loadComponent: () => import('./pages/certifications/certifications').then((m) => m.Certifications),
    title: 'Certifications | Vikrant Bhurke',
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
    title: 'Blog | Vikrant Bhurke',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | Vikrant Bhurke',
  },
  { path: '**', redirectTo: '' },
];
