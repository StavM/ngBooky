import { animate, style, transition, trigger } from '@angular/animations';

export function customFade(durationInSeconds: number = 0.3) {
  return trigger('customFade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`${durationInSeconds}s ease-in-out`, style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(`${durationInSeconds}s ease-in-out`, style({ opacity: 0 }))
    ])
  ]);
}
