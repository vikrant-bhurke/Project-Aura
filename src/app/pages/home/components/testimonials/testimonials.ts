import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../../../core/data/portfolio.data';
import { SectionHeader } from '../../../../shared/section-header/section-header';
import { RevealDirective } from '../../../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatIconModule, SectionHeader, RevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly testimonials = PORTFOLIO.testimonials;
  readonly stars = [1, 2, 3, 4, 5];

  starIcon(rating: number, star: number): string {
    if (rating >= star) {
      return 'star';
    }
    if (rating >= star - 0.5) {
      return 'star_half';
    }
    return 'star_border';
  }
}
