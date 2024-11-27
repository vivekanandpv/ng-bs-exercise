import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal('light');

  constructor() {}

  toggle() {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }
}
