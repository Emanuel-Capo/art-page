import { animate, group, query, stagger, style, transition, trigger } from "@angular/animations";

export const pageAnimation =
  trigger('init', [
    transition('* => true', [
      group([
        query('#text',[
          style({opacity: 0, transform: 'translateX(0) translateX(-50px) '}),]),
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', [
          animate('750ms ease-in-out', style({ opacity: 1 }))
        ], { optional: true }),
      ]),
      query('p',style({opacity: 0, transform: 'translateX(0) translateX(-50px) '}), { optional: true }),
      query('#text',[
        stagger('300ms',animate('500ms ease-in', style({opacity: 1, transform: 'scale(1) translateY(0)'})))
      ], { optional: true }),
      query('p',[
        stagger('300ms',animate('500ms ease-in', style({opacity: 1, transform: 'scale(1) translateY(0)'})))
      ], { optional: true }),
    ])
  ])

