import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { LoginHttpService } from '../login.http.service';
import * as LoginActions from './login.actions';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private loginHttpService: LoginHttpService,
    private router: Router) { }

  /*
  * a request to log in.
  * accepts a username and returns a valid user object.
  */
  loginRequest$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.loginRequest),
    switchMap((action) => {
      const username = action.username.trim();
      return this.loginHttpService.getUser$(username)
        .pipe(
          map(user => LoginActions.loginSuccess({ user })),
          catchError(error => of(LoginActions.loginFailure({ error })))
        );
    }))
  );

  /*
  * a login failure effect.
  * when login fails (either because of bad username, or route guard failure) we log the error
  * and navigate away back to intro.
  */
  loginFailure = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.loginFailure, LoginActions.loginGuardFailure),
    tap(err => console.log('Login error !', err.error)),
    tap(() => this.router.navigate(['/']))
  ), { dispatch: false });

  /*
  * a login success effect.
  * when login works as expected we navigate to booky.
  * at this point we'll lazy load the JS chunk of the feature module.
  */
  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.loginSuccess),
    tap(() => this.router.navigate(['main', 'books']))
  ), { dispatch: false });

    /*
  * a logout effect.
  * when a logout request is dispatched we navigate the intro page.
  */
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.logout),
    tap(() => this.router.navigate(['']))
  ), { dispatch: false });
}
