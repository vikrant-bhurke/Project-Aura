import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../../../core/data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly social = PORTFOLIO.social;
  readonly resumeUrl = PORTFOLIO.resumeUrl;
  readonly socialEmail = PORTFOLIO.email;
}
