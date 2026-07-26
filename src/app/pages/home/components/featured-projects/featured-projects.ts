import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../../../core/data/portfolio.data';
import { SectionHeader } from '../../../../shared/section-header/section-header';
import { RevealDirective } from '../../../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [RouterLink, SectionHeader, RevealDirective],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  readonly featuredProjects = PORTFOLIO.projects;
}
