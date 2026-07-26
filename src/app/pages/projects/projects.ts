import { Component } from '@angular/core';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = PORTFOLIO.projects;
}
