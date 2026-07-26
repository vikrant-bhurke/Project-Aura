import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { FeaturedProjects } from './components/featured-projects/featured-projects';
import { Testimonials } from './components/testimonials/testimonials';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Experience } from '../experience/experience';
import { Certifications } from '../certifications/certifications';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Stats,
    About,
    Skills,
    Experience,
    FeaturedProjects,
    Certifications,
    Testimonials,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
