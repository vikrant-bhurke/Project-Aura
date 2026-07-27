import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_SEO, PageSeo, SITE } from './site.config';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  applyForUrl(url: string): void {
    const path = url.split('?')[0].split('#')[0].replace(/^\//, '');
    const key = path === '' ? '' : path.split('/')[0];
    const page = PAGE_SEO[key] ?? PAGE_SEO[''];
    this.apply(page);
  }

  apply(page: PageSeo): void {
    const absoluteUrl = `${SITE.url}${page.path === '/' ? '/' : page.path}`;
    const image = page.image ?? SITE.image;
    const type = page.type ?? 'website';

    this.title.setTitle(page.title);

    this.updateTag('name', 'description', page.description);
    this.updateTag('name', 'author', SITE.name);
    this.updateTag('name', 'robots', 'index, follow, max-image-preview:large');
    this.updateTag('name', 'theme-color', '#0F172A');

    this.updateTag('property', 'og:type', type);
    this.updateTag('property', 'og:site_name', SITE.name);
    this.updateTag('property', 'og:locale', SITE.locale);
    this.updateTag('property', 'og:title', page.title);
    this.updateTag('property', 'og:description', page.description);
    this.updateTag('property', 'og:url', absoluteUrl);
    this.updateTag('property', 'og:image', image);
    this.updateTag('property', 'og:image:alt', SITE.imageAlt);

    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', page.title);
    this.updateTag('name', 'twitter:description', page.description);
    this.updateTag('name', 'twitter:image', image);
    this.updateTag('name', 'twitter:site', SITE.twitter);
    this.updateTag('name', 'twitter:creator', SITE.twitter);

    this.setCanonical(absoluteUrl);
    this.setJsonLd(absoluteUrl, page);
    this.setSearchConsoleVerification();
  }

  private updateTag(attr: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attr]: key, content } as Record<string, string>);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setSearchConsoleVerification(): void {
    const token = environment.searchConsoleVerification?.trim();
    if (!token) {
      return;
    }
    this.updateTag('name', 'google-site-verification', token);
  }

  private setJsonLd(url: string, page: PageSeo): void {
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE.name,
      url: SITE.url,
      image: SITE.image,
      jobTitle: SITE.jobTitle,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
      },
      sameAs: SITE.sameAs,
      description: SITE.description,
    };

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${SITE.name} Portfolio`,
      url: SITE.url,
      description: SITE.description,
      publisher: {
        '@type': 'Person',
        name: SITE.name,
      },
      inLanguage: 'en',
    };

    const webpage = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url,
      isPartOf: {
        '@type': 'WebSite',
        url: SITE.url,
      },
      about: {
        '@type': 'Person',
        name: SITE.name,
      },
    };

    this.upsertJsonLd('ld-person', person);
    this.upsertJsonLd('ld-website', website);
    this.upsertJsonLd('ld-webpage', webpage);
  }

  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
