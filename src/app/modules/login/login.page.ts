import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.services';
import { TokenStorageService } from '../../services/token-storage.services';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

  username = null;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    /* if (this.tokenStorage.getToken()) {
       this.isLoggedIn = true;
     }*/
  }

  onSubmit(): void {
   // const { username } = this.username;
    console.log(this.username)
    this.authService.login(this.username).subscribe(
      data => {
        console.log("resultado")
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.reloadPage();
      },
      err => {
        console.log("Hol<<<<<<<<<")
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
