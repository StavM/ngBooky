/*
 * a Route Guard used to prevent unauthorized users from getting the js chunk for relevant feature modules.
*/
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import * as fromApp from 'src/app/app.reducer';
import * as LoginActions from 'src/app/pages/login-page/store/login.actions';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanLoad {

  constructor(private store: Store<fromApp.AppState>) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .select(s => !!s.login.user).pipe(
        take(1),
        tap((isLoggedin) => {
          if (!isLoggedin) {
            this.store.dispatch(LoginActions.loginGuardFailure({ error: null }));
          }
        })
      );
  }
}
