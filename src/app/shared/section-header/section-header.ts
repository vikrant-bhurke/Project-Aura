import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {
  tag = input<string>('');
  title = input.required<string>();
  subtitle = input<string>('');
  /** Optional word in the title to highlight in accent blue */
  accent = input<string>('');

  readonly styledTitle = computed(() => {
    const title = this.title();
    const accent = this.accent().trim();

    if (!accent || !title.includes(accent)) {
      return title;
    }

    return title.replace(
      accent,
      `<span class="title-accent">${accent}</span>`,
    );
  });
}
