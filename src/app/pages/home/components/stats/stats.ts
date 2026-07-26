import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../../../core/data/portfolio.data';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  readonly stats = PORTFOLIO.stats;
}
