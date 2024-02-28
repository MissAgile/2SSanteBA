import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './api-url.service';
import { Router } from '@angular/router';
import { Ville, Hopital, secteur_activite } from '../modelSRS/typesVHS'

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  accepterInscription(id: number) {
    throw new Error('Method not implemented.');
  }
  refuserInscription(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private route: Router) { }

  inscriptionMedecin(userData: any): Observable<any> {
    return this.http.post(`${baseUrl}/register-medecin`, userData);
  }

  inscriptionPatient(userData: any): Observable<any> {
    return this.http.post(`${baseUrl}/register-patient`, userData);
  }

  connexion(userData: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, userData);
  }

  setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token))
  }
  getToken() {
    return localStorage.getItem('token');
  }


  // // Implémentez les méthodes suivantes pour gérer l'ajout, la modification et la suppression d'articles
  // ajoutArticle(formData: FormData): Observable<any> {
  //   const httpOptions = {       headers: new HttpHeaders({         Authorization: "Bearer" + JSON.parse(localStorage.getItem("userData") ?? '{}').access_token.token       })     };
  //   return this.http.post(`${baseUrl}/article`, formData,httpOptions);
  // }

  // updateArticle(id: number, formData: FormData): Observable<any> {
  //   return this.http.put(`${baseUrl}/articles/${id}`, formData);
  // }

  // deleteArticle(id: number): Observable<any> {
  //   return this.http.delete(`${baseUrl}/articles/${id}`);
  // }

  // Méthode pour récupérer les villes depuis la base de données
  getVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(`${baseUrl}/home`);
  }

  // // Méthode pour récupérer les hôpitaux depuis la base de données
  getHopitaux(): Observable<Hopital[]> {
    return this.http.get<Hopital[]>(`${baseUrl}/home`);
  }

  // // Méthode pour récupérer les spécialités depuis la base de données
  // getSpecialites(): Observable<Specialite[]> {
  //   return this.http.get<Specialite[]>('url_specialites');
  // }
  getSecteurs_actives(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/home`);
}

  // getAllHome() {
  //   return this.http.get(`${baseUrl}/home`);
  // }


}
