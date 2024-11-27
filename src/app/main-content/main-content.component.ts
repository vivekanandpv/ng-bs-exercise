import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
