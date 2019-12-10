import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../../../shared/models';
import * as LoginActions from './login.actions';

export interface State {
  user: User;
  isInProcess: boolean;
}

const initialState: State = {
  user: null,
  isInProcess: false
};

export function loginReducer(loginState: State | undefined, loginAction: Action) {
  return createReducer(
    initialState,

    on(LoginActions.loginRequest, (state) => ({
      ...state,
      user: null,
      isInProcess: true
    })),

    on(LoginActions.loginSuccess, (state, action) => ({
      ...state,
      user: action.user,
      isInProcess: false
    })),

    on(LoginActions.loginFailure, LoginActions.loginGuardFailure, (state) => ({
      ...state,
      user: null,
      isInProcess: false
    })),

    on(LoginActions.logout, (state) => ({
      ...initialState,
    })),

  )(loginState, loginAction);
}

