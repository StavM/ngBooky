import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/app.reducer';
import { customFade } from 'src/app/shared/animations';
import * as LoginActions from './store/login.actions';
import * as fromLogin from './store/login.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [customFade(0.5)]
})
export class LoginPageComponent implements OnInit {
  loginState$: Observable<fromLogin.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.loginState$ = this.store.select(s => s.login);
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const username = form.form.value;
      this.store.dispatch(LoginActions.loginRequest(username));
    }
  }
}
