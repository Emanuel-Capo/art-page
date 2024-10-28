import { Component, signal } from '@angular/core';
import { pageAnimation } from '../../animations/page-animation';

@Component({
  selector: 'app-especialization',
  standalone: true,
  imports: [],
  templateUrl: './especialization.component.html',
  styleUrl: './especialization.component.css',
  animations:[pageAnimation]
})
export class EspecializationComponent {
init=signal(true)
}
