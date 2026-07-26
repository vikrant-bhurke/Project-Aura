import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../../../core/data/portfolio.data';
import { SectionHeader } from '../../../../shared/section-header/section-header';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatIconModule, SectionHeader],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly testimonials = PORTFOLIO.testimonials;
  readonly stars = [1, 2, 3, 4, 5];
}
