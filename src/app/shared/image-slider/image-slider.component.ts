import { Component, input, Input, model, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';

const resetRoute = [
    style({ position: 'relative' }),
    query(
        ':enter, :leave',
	    [
        	style({
                position: 'absolute',
                opacity: 0,
            }),
    	],
	    { optional: true }
    ),
];

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  animations: [
    trigger('slideToggle', [
      transition('* => *', [

        group([
          query('#text',[
            style({opacity: 0, transform: 'translateX(0) translateX(-50px) '}),]),
          query(':enter', style({ opacity: 0 }), { optional: true }),
          query(':leave', [
            animate('750ms ease-in-out', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('750ms ease-in-out', style({ opacity: 1 }))
          ]),
        ]),
        query('p',style({opacity: 0, transform: 'translateX(0) translateX(-50px) '})),
        query('#text',[
          stagger('300ms',animate('500ms ease-in', style({opacity: 1, transform: 'scale(1) translateY(0)'})))
        ], { optional: true }),
        query('p',[
          stagger('300ms',animate('500ms ease-in', style({opacity: 1, transform: 'scale(1) translateY(0)'})))
        ], { optional: true }),
      ])
    ]),
  ]
})
export class ImageSliderComponent implements OnInit {

  protected selectedImage = signal(3);

  previous() {
      this.selectedImage.set((((this.selectedImage() - 1)%4)+4)%4);
  }

  next() {
      this.selectedImage.set((this.selectedImage() + 1) % 4);
  }

   ngOnInit() {
    this.next()
    setInterval(() => {
      this.next();
    }, 5000);

   }
}
