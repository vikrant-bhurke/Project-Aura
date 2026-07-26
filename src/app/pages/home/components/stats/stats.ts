import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../../../core/data/portfolio.data';
import { RevealDirective } from '../../../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [MatIconModule, RevealDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  readonly stats = PORTFOLIO.stats;
}
