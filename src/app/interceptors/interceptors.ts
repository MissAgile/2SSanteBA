import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = JSON.parse(localStorage.getItem("token") || '');

    // Assurez-vous que userToken et userToken.authorization sont dÃ©finis
    if (userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
