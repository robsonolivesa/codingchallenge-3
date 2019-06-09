import * as jwt_decode from 'jwt-decode';

import { User } from '../user/user';
import { TokenService } from '../login/token.service';


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken('access_token') &&
    this.decodeAndNotify();
  }

  setToken(key: string, token: string){
    this.tokenService.setToken(key, token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken('access_token');
    const user = jwt_decode(token) as User;

    this.userSubject.next(user);
  }

  isLogged() {
    return this.tokenService.hasToken('access_token');
  }
}
