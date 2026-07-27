import { Component, DestroyRef, HostListener, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  readonly theme = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('home');
  readonly currentUrl = signal('/');

  readonly navLinks = [
    { label: 'Home', path: '/', fragment: null as string | null },
    { label: 'About', path: '/', fragment: 'about' },
    { label: 'Skills', path: '/', fragment: 'skills' },
    { label: 'Experience', path: '/', fragment: 'experience' },
    { label: 'Projects', path: '/', fragment: 'projects' },
    { label: 'Blog', path: '/blog', fragment: null as string | null },
    { label: 'Contact', path: '/contact', fragment: null as string | null },
  ];

  private readonly sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'testimonials'];

  ngOnInit(): void {
    this.currentUrl.set(this.router.url.split('#')[0] || '/');

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((e) => {
        const url = e.urlAfterRedirects.split('#')[0] || '/';
        this.currentUrl.set(url);
        const fragment = e.urlAfterRedirects.split('#')[1];
        if (fragment) {
          this.activeSection.set(fragment);
        } else if (url === '/') {
          this.activeSection.set('home');
        }
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);

    if (this.currentUrl() !== '/') {
      return;
    }

    const offset = window.scrollY + 140;
    let current = 'home';

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= offset) {
        current = id === 'certifications' || id === 'testimonials' ? 'projects' : id;
      }
    }

    this.activeSection.set(current);
  }

  isActive(link: { path: string; fragment: string | null }): boolean {
    const url = this.currentUrl();

    if (link.path === '/' && !link.fragment) {
      return url === '/' && this.activeSection() === 'home';
    }

    if (link.fragment) {
      return url === '/' && this.activeSection() === link.fragment;
    }

    return url.startsWith(link.path);
  }

  onNavClick(link: { path: string; fragment: string | null }): void {
    this.closeMenu();

    if (link.path === '/' && !link.fragment) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
