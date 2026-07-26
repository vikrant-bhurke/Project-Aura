import { Component, computed, signal } from '@angular/core';
import { PORTFOLIO, SkillCategory } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly tabs = [
    { key: 'frontend' as SkillCategory, label: 'Frontend' },
    { key: 'backend' as SkillCategory, label: 'Backend' },
    { key: 'tools' as SkillCategory, label: 'Tools' },
    { key: 'cloud' as SkillCategory, label: 'Cloud' },
    { key: 'future' as SkillCategory, label: 'Future' },
  ];

  readonly activeTab = signal<SkillCategory>('frontend');

  readonly activeSkills = computed(() => PORTFOLIO.skills[this.activeTab()]);

  setTab(tab: SkillCategory): void {
    this.activeTab.set(tab);
  }
}
