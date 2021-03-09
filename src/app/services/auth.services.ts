import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
const AUTH_API = 'https://dindon-api.herokuapp.com/auth/';
//const AUTH_API2 = 'http://localhost:3000/auth/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(username: string): Observable<any> {
        return this.http.post(AUTH_API + 'signin', {
            names: username
        }, httpOptions);
    }

}