/*
 * Login http service, this service is responsible on the user login logic. (mock atm)
 * any xhr login related requests should go through here.
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  // validate user input and return a valid user object to be used thoughought the app.
  getUser$(username: string): Observable<User> {
    let returnedUser: User = null;
    if (username && username.length) {
      returnedUser = { id: -1, name: username };
    }

    return of(returnedUser);
  }
}
