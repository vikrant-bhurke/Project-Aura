import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { ScrollTop } from './layout/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    ScrollTop
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}