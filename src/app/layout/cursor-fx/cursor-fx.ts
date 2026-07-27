import {
  Component,
  DestroyRef,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

@Component({
  selector: 'app-cursor-fx',
  standalone: true,
  templateUrl: './cursor-fx.html',
  styleUrl: './cursor-fx.scss',
})
export class CursorFx implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly enabled = signal(false);
  readonly visible = signal(false);
  readonly hovering = signal(false);
  readonly x = signal(0);
  readonly y = signal(0);
  readonly spotX = signal(0);
  readonly spotY = signal(0);
  readonly trail = signal<TrailPoint[]>([]);

  private targetX = 0;
  private targetY = 0;
  private currentSpotX = 0;
  private currentSpotY = 0;
  private rafId = 0;
  private trailId = 0;
  private lastTrailAt = 0;

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reduceMotion) {
      return;
    }

    this.enabled.set(true);
    document.body.classList.add('has-cursor-fx');
    this.tick();

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(this.rafId);
      document.body.classList.remove('has-cursor-fx');
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    if (!this.enabled()) {
      return;
    }

    this.targetX = event.clientX;
    this.targetY = event.clientY;
    this.x.set(event.clientX);
    this.y.set(event.clientY);
    this.visible.set(true);

    const target = event.target as HTMLElement | null;
    const interactive = !!target?.closest(
      'a, button, [role="button"], input, textarea, select, .hire-btn, .primary-btn, .secondary-btn, .btn-primary, .btn-outline, .tab, .skill-card, .project-card, .tech',
    );
    this.hovering.set(interactive);

    const now = performance.now();
    if (now - this.lastTrailAt > 28) {
      this.lastTrailAt = now;
      this.trailId += 1;
      const next = [{ x: event.clientX, y: event.clientY, id: this.trailId }, ...this.trail()].slice(0, 10);
      this.trail.set(next);
    }
  }

  @HostListener('document:mouseleave')
  onLeave(): void {
    this.visible.set(false);
    this.trail.set([]);
  }

  private tick = (): void => {
    this.currentSpotX += (this.targetX - this.currentSpotX) * 0.12;
    this.currentSpotY += (this.targetY - this.currentSpotY) * 0.12;
    this.spotX.set(this.currentSpotX);
    this.spotY.set(this.currentSpotY);
    this.rafId = requestAnimationFrame(this.tick);
  };
}
