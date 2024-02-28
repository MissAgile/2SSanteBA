// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedecinPatientServiceService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinPatientService {
  constructor() {}
  // private apiUrl = 'URL_de_votre_backend';

  // constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des médecins
  // getMedecins(token: string): Observable<any[]> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   return this.http.get<any[]>(`${this.apiUrl}/medecins`, { headers });
  // }

  // Méthode pour récupérer la liste des patients
  // getPatients(token: string): Observable<any[]> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   return this.http.get<any[]>(`${this.apiUrl}/patients`, { headers });
  // }
}
