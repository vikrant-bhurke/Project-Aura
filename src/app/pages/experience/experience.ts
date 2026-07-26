import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeader, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experience = PORTFOLIO.experience;
}
