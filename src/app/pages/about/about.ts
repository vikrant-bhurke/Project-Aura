import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = PORTFOLIO.about;
  readonly resumeUrl = PORTFOLIO.resumeUrl;
}
