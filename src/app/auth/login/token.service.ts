import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class TokenService {

  hasToken(token: string) {
    return !!this.getToken(token);
  }

  setToken(key: string, token: string) {
    window.localStorage.setItem(key, token);
  }

  getToken(token: string) {
    return window.localStorage.getItem(token);
  }

  removeToken(): void {
    window.localStorage.clear();
  }
}
