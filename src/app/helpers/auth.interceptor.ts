import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.services';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    /*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          let authReq = req;
          const token = this.token.getToken();
          if (token != null) {
              authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
          }
          return next.handle(authReq);
      }*/

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const re = 'auth/signin'
       
        if (request.url.search(re) === -1) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`,
                },
            })
        }
        return next.handle(request)
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];