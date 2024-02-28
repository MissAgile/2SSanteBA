// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class DataService {

// //   constructor() {private http: HttpClient };
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   url="http://127.0.0.1:8000/api";

//   // getSecteursSpecialistes: any;
//   constructor(private http: HttpClient) {}
//   //methode de connexion
//   connect(users:any):Observable <any> {
//     return this.http.post('http://127.0.0.1:8000/api/login',users)
//   }
//   // getHopitaux: any;
//   getHopitaux() {
//     throw new Error('Method not implemented.');
//   }
//     // Méthode pour récupérer les villes depuis une source de données
//     getVilles(): Observable<any[]> {
//       // Remplacez 'url_villes' par l'URL réelle pour récupérer les villes depuis votre API
//       const url_villes = 'https://example.com/api/villes';
//       return this.http.get<any[]>(url_villes);
//     }
//     getSecteursSpecialistes(): Observable<any[]> {
//       // Remplacez 'url_secteurs' par l'URL réelle pour récupérer les secteurs spécialistes depuis votre API
//       const url_secteurs = 'https://example.com/api/secteurs';
//       return this.http.get<any[]>(url_secteurs);
//     }


// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSecteurs_active() {
    throw new Error('Method not implemented.');
  }
   getSecteurs_actives() {
    throw new Error('Method not implemented.');
  }

  url = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  // Méthode de connexion
  connect(users: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/login`, users);
  }

  // Méthode pour récupérer les villes depuis une source de données
  getVilles(): Observable<any[]> {
    // Remplacez 'url_villes' par l'URL réelle pour récupérer les villes depuis votre API
    const url_villes = 'https://example.com/api/villes';
    return this.http.get<any[]>(url_villes);
  }
  //   // Méthode pour récupérer les hôpitaux depuis une source de données
    getHopitaux(): Observable<any[]> {
      const url_hopitaux = 'https://example.com/api/hopitaux';
      return this.http.get<any[]>(url_hopitaux);
    }

  // // Méthode pour récupérer les secteurs spécialistes depuis une source de données
  getSecteursSpecialistes(): Observable<any[]> {
    // Remplacez 'url_secteurs' par l'URL réelle pour récupérer les secteurs spécialistes depuis votre API
    const url_secteurs = 'https://example.com/api/secteurs';
    return this.http.get<any[]>(url_secteurs);
  }
}
