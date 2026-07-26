import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatIconModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = PORTFOLIO.about;
  readonly resumeUrl = PORTFOLIO.resumeUrl;
}
