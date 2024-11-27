import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  themeService = inject(ThemeService);
}
