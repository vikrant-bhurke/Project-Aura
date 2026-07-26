import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly social = PORTFOLIO.social;
  readonly email = PORTFOLIO.email;
  readonly services = PORTFOLIO.services;
  readonly quickLinks = [
    { label: 'Home', path: '/', fragment: 'home' },
    { label: 'About', path: '/', fragment: 'about' },
    { label: 'Skills', path: '/', fragment: 'skills' },
    { label: 'Experience', path: '/', fragment: 'experience' },
    { label: 'Projects', path: '/', fragment: 'projects' },
  ];
  readonly resourceLinks = [
    { label: 'Certifications', path: '/', fragment: 'certifications', external: false },
    { label: 'Blog', path: '/blog', fragment: null as string | null, external: false },
    { label: 'GitHub', path: 'https://github.com/vikrantbhurke', fragment: null, external: true },
    { label: 'LinkedIn', path: 'https://linkedin.com/in/vikrantbhurke', fragment: null, external: true },
  ];

  readonly subscribed = signal(false);
  emailInput = '';

  onSubscribe(): void {
    this.subscribed.set(true);
    this.emailInput = '';
    setTimeout(() => this.subscribed.set(false), 4000);
  }
}
