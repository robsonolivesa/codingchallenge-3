import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../login/token.service';
import { UserService } from './user.service';
import { Refresh } from './refresh';
import { Auth } from './auth';

const API_URL = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService) { }

  authenticate(email: string, password: string) {
    console.log("Tentativa de login: "+email)
    return this.http
      .post(API_URL + '/auth/new',
        { 'email': email, 'password': password },
        { observe: 'response' })
      .pipe(tap(res => {
        const authToken = res.body as Auth;
        this.userService.setToken('access_token', authToken.access_token);
        this.userService.setToken('refresh_token', authToken.refresh_token);
      }));
  }

  //-- atualiza o token
  refresh() {
    
    const refreshToken = this.tokenService.getToken('refresh_token');

    return this.http
      .post(API_URL + '/auth/refresh',
        { 'refresh_token': refreshToken },
        { observe: 'response' })
      .pipe(tap(res => {
        const authToken = res.body as Refresh;
        this.userService.setToken('access_token', authToken.access_token);
      }));
  }
}
