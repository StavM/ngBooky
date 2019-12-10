import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { User } from '../../../shared/models';

export const loginRequest = createAction('[Login Page] Login Request', props<{ username: string }>());
export const loginSuccess = createAction('[Login Effects] Login Success', props<{ user: User }>());
export const loginFailure = createAction('[Login Effects] Login Failure', props<{ error: HttpErrorResponse }>());
export const loginGuardFailure = createAction('[Auth Guard] Login Failure', props<{ error: Error }>());

export const logout = createAction('[Main Header] Logout');
