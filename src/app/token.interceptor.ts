// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HTTP_INTERCEPTORS
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthentificationService } from './servicesSRNRV/authentification.service';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor(
//     private tokenService: AuthentificationService
//   ) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Récupérer le token JWT depuis le service d'authentification
//     const token = this.tokenService.getToken();

//     // Cloner la requête et ajouter le token JWT aux en-têtes de la requête clonée
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }

//     // Passer la requête au prochain intercepteur s'il existe, sinon à la fonction de gestionnaire de requêtes
//     return next.handle(request);
//   }
// }

// // Fournisseur pour enregistrer l'intercepteur de token dans les intercepteurs HTTP
// export const TokenInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: TokenInterceptor,
//   multi: true
// };
