import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(true);

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  toggle(): void {
    if (this.isDark()) {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  private setDark(): void {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    this.isDark.set(true);
  }

  private setLight(): void {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    this.isDark.set(false);
  }
}
