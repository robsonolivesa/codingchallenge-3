import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { TokenService } from 'src/app/auth/login/token.service';
import { AuthService } from 'src/app/auth/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  //private API = `${environment.API}people`;

  API : string;

  constructor(private http: HttpClient,
    private tokenService: TokenService,
    private authService: AuthService) { }

  getPeopleDepoimentoById(id) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const params = new HttpParams().set('page', '1')
                                    .set('pageSize', '5')


    headers.append('Content-Type' , 'application/json');
                                    
    this.API =`${environment.API}people/${id}/testimonials`

    return this.http.get<any>(`${this.API}`,
      { headers: headers, params: params })
      .pipe(take(1));
  }

  getPeopleDepoimentoByIdStatus(id, xstatus) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const params = new HttpParams().set('page', '1')
                                    .set('pageSize', '5')
                                    .set('status',xstatus)
                                    


    headers.append('Content-Type' , 'application/json');
                                    
    this.API =`${environment.API}people/${id}/testimonials`

    return this.http.get<any>(`${this.API}`,
      { headers: headers, params: params })
      .pipe(take(1));
  }

  put(newData: any, peopleId, depoId) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    this.API =`${environment.API}people/${peopleId}/testimonials/${depoId}`

    return this.http.put(`${this.API}`, newData,
      { headers: headers })
      .pipe(take(1));
  }


  excluirDepoimento(peopleId, depoId) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const params = new HttpParams().set('status', '2')

    this.authService.refresh().subscribe(() => {});
                                    
    this.API =`${environment.API}people/${peopleId}/testimonials/${depoId}`

    return this.http.delete(`${this.API}`,
      { headers: headers, params: params })
      .pipe(take(1));
  }


  getPeopleById(id) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const params = new HttpParams().set('page', '1')
                                    .set('pageSize', '5')


    headers.append('Content-Type' , 'application/json');
                                    
    this.API =`${environment.API}people/${id}`

    return this.http.get<any>(`${this.API}`,
      { headers: headers, params: params })
      .pipe(take(1));
  }

  post(newData: any, id:string) {

    const token: String = this.tokenService.getToken("access_token");
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    headers.append('Content-Type' , 'application/json');

    this.API =`${environment.API}people/${id}/testimonials`

    return this.http.post(this.API, newData,{ headers: headers }).pipe(take(1));
  }

}
