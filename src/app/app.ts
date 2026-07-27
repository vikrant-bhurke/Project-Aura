import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { ScrollTop } from './layout/scroll-top/scroll-top';
import { CursorFx } from './layout/cursor-fx/cursor-fx';
import { SeoService } from './core/seo/seo.service';
import { AnalyticsService } from './core/analytics/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    ScrollTop,
    CursorFx,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly analytics = inject(AnalyticsService);
  private readonly viewport = inject(ViewportScroller);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.analytics.init();
    this.seo.applyForUrl(this.router.url);
    this.syncViewportOffset();

    // #home sits under the fixed navbar — treat it as page top
    if (typeof window !== 'undefined' && window.location.hash === '#home') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        this.seo.applyForUrl(event.urlAfterRedirects);
        this.syncViewportOffset();

        const fragment = event.urlAfterRedirects.split('#')[1];
        if (!fragment || fragment === 'home') {
          requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
        }
      });
  }

  private syncViewportOffset(): void {
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height').trim();
    const offset = Number.parseInt(raw, 10);
    this.viewport.setOffset([0, Number.isFinite(offset) ? offset + 8 : 112]);
  }
}
