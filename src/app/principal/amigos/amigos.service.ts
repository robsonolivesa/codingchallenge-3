import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { TokenService } from 'src/app/auth/login/token.service';
import { AuthService } from 'src/app/auth/authentication/auth.service';

@Injectable({providedIn: 'root'})

export class AmigosService {

  private readonly API = `${environment.API}people`;

  constructor(private http: HttpClient,
    private tokenService: TokenService,
    private authService: AuthService) { }

  listaPeoples() {

    this.authService.refresh().subscribe(() => {});

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    
    const params = new HttpParams().set('page', '1')
                                    .set('pageSize', '9')
                                    .set('name', '')

    return this.http.get<any>(`${this.API}`,
      {headers: headers, params: params})
      .pipe(take(1));
  }

  listaPeoplesName(name) {

    const token: String = this.tokenService.getToken("access_token");

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    const params = new HttpParams().set('page', '1')
                                    .set('pageSize', '9')
                                    .set('name', name)

    return this.http.get<any>(`${this.API}`,
      { headers: headers, params: params })
      .pipe(take(1));
  }

}
