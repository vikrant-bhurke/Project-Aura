import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { finalize } from 'rxjs';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly email = PORTFOLIO.email;
  readonly location = PORTFOLIO.location;
  readonly social = PORTFOLIO.social;

  readonly submitting = signal(false);
  readonly submitted = signal(false);
  readonly submitError = signal<string | null>(null);
  readonly attempted = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    website: [''], // honeypot — leave empty
  });

  fieldError(controlName: 'name' | 'email' | 'subject' | 'message'): string | null {
    const control = this.form.controls[controlName];
    if (!control || (!control.touched && !this.attempted())) {
      return null;
    }

    if (control.hasError('required')) {
      return 'This field is required.';
    }
    if (control.hasError('email')) {
      return 'Enter a valid email address.';
    }
    if (control.hasError('minlength')) {
      const min = control.getError('minlength')?.requiredLength;
      return `Must be at least ${min} characters.`;
    }
    if (control.hasError('maxlength')) {
      const max = control.getError('maxlength')?.requiredLength;
      return `Must be under ${max} characters.`;
    }
    return null;
  }

  onSubmit(): void {
    this.attempted.set(true);
    this.submitError.set(null);
    this.submitted.set(false);
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    // Bot filled honeypot
    if (this.form.controls.website.value.trim()) {
      this.submitted.set(true);
      this.form.reset({ name: '', email: '', subject: '', message: '', website: '' });
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();
    this.submitting.set(true);

    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(this.email)}`;

    this.http
      .post<{ success?: string | boolean; message?: string }>(endpoint, {
        name,
        email,
        subject,
        message,
        _subject: `Portfolio contact: ${subject}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
        from_site: environment.siteUrl,
      })
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: () => {
          this.submitted.set(true);
          this.attempted.set(false);
          this.form.reset({ name: '', email: '', subject: '', message: '', website: '' });
          setTimeout(() => this.submitted.set(false), 6000);
        },
        error: () => {
          this.submitError.set(
            `Could not send right now. Email me directly at ${this.email} or try again.`,
          );
        },
      });
  }
}
