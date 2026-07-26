import { Component } from '@angular/core';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  readonly certifications = PORTFOLIO.certifications;
}
