import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

  private onLoginSubmit(event) {

    const email = event.login;
    const password = event.password;
    this.authService
      .authenticate(email, password)
      .subscribe(
        () => this.router.navigate(['home']),
        err => {
          console.log(err);

          alert('Login / senha inválidos.');
        }
      )
  }
}
