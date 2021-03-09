import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const AUTH_API = 'https://dindon-api.herokuapp.com/question/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: "root"
})

export class QuestionService {
    constructor(private http: HttpClient) {
    }

    getQuestion(): Observable<any> {
        return this.http.get(AUTH_API + 'getQuestion', httpOptions);
    }

}