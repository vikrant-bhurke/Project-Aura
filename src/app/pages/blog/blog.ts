import { Component } from '@angular/core';
import { PORTFOLIO } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SectionHeader],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly posts = PORTFOLIO.blogPosts;
}
