import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeader, MatIconModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experience = PORTFOLIO.experience;
}
