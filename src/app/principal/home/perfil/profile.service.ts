import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Profile } from 'src/app/shared/profile/profile';
import { TokenService } from 'src/app/auth/login/token.service';
import { AuthService } from 'src/app/auth/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly API = `${environment.API}people/me`;

  constructor(private http: HttpClient,
    private tokenService: TokenService,
    private authService: AuthService) { }

  get() {
    
    this.authService.refresh().subscribe(() => {});

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get<Profile>(`${this.API}`,
      { headers: headers })
      .pipe(take(1));
  }

  put(newData: any) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.put(`${this.API}`, newData,
      { headers: headers })
      .pipe(take(1));
  }

  getFotoPerfil(cId) {

    this.authService.refresh().subscribe(() => {});

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get<Profile>(environment.APIIMG+'photo/'+cId,
      { headers: headers })
      .pipe(take(1));
  }

}
