import { Component, OnInit } from '@angular/core';

import { QuestionService } from 'src/app/services/question.services';
import { TokenStorageService } from '../../services/token-storage.services';

@Component({
  selector: 'app-calification',
  templateUrl: 'calification.page.html',
  styleUrls: ['calification.page.scss']
})
export class CalificationPage implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private questionService: QuestionService,
    private tokenStorage: TokenStorageService,) { }

  ngOnInit(): void {
    /* if (this.tokenStorage.getToken()) {
       this.isLoggedIn = true;
     }*/

    this.onQuestion()
  }

  onQuestion(): void {
    console.log(this.tokenStorage.getToken())

    this.questionService.getQuestion().subscribe(
      data => {
      /*  this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;*/
        console.log("respuesta")
        console.log(data)

        //  this.reloadPage();
        //  this.router.navigate(['/calification'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
