import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly router = inject(Router);
  private initialized = false;

  init(): void {
    const id = environment.gaMeasurementId?.trim();
    if (!id || this.initialized || typeof document === 'undefined') {
      return;
    }

    this.initialized = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', id, {
      anonymize_ip: true,
      send_page_view: false,
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.pageView(event.urlAfterRedirects));
  }

  pageView(path: string): void {
    const id = environment.gaMeasurementId?.trim();
    if (!id || !window.gtag) {
      return;
    }

    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      page_location: `${environment.siteUrl}${path}`,
      send_to: id,
    });
  }
}
