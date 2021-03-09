import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  calificationPage = "calificationPage";

  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    /* if (this.tokenStorage.getToken()) {
       this.isLoggedIn = true;
     }*/
  }

  onSubmit(): void {

    this.authService.login(this.username).subscribe(
      data => {
      
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        //  this.reloadPage();
        this.router.navigate(['/calification'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
