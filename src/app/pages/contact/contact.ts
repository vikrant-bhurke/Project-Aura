import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatIconModule, SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly email = PORTFOLIO.email;
  readonly location = PORTFOLIO.location;
  readonly social = PORTFOLIO.social;

  readonly submitted = signal(false);

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(): void {
    this.submitted.set(true);
    this.form = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.submitted.set(false), 4000);
  }
}
