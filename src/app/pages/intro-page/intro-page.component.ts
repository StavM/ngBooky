import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { customFade } from 'src/app/shared/animations';
import { environment } from 'src/environments/environment';

const DELAY_FOR_NAVIGATION_IN_MSEC = environment.intro.navigatonDelayInMsec;

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
  animations: [customFade(1.2)]
})
export class IntroPageComponent implements OnInit, OnDestroy {
  private destroyed = new Subject();

  constructor(private router: Router) { }

  ngOnInit() {
    timer(DELAY_FOR_NAVIGATION_IN_MSEC).pipe(
      takeUntil(this.destroyed),
    ).subscribe(() => this.navigateToLogin());
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
