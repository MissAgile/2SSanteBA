import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from './api-url.service';
import { RendezVous } from '../modelSRS/rendezVous';
// import { RendezVous } from '../chemin/vers/le/modele/RendezVous'; // Assurez-vous d'importer correctement le modèle RendezVous

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  rendezVousList = [
    // { id: 1, patientName: 'John Doe', date: '2024-02-05', heure: '10:00' },
    // { id: 2, patientName: 'Jane Smith', date: '2024-02-06', heure: '11:30' },
    // Vous pouvez ajouter plus de rendez-vous ici
  ];

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des rendez-vous
  // a decommenter
  // getRendezVousList(): Observable<any[]> {
  //   // Simulation d'un appel HTTP pour récupérer les données
  //   return of(this.rendezVousList);
  // }
    // Méthode pour récupérer la liste des rendez-vous du médecin
    getRendezVousList(): Observable<any[]> {
      return this.http.get<any[]>(`${baseUrl}/liste-consultation`, {});
    }

  // Méthode pour récupérer les rendez-vous depuis votre API ou autre source de données
  getRendezVous(): Observable<RendezVous[]> {
    return this.http.post<RendezVous[]>(`${baseUrl}/consulter-docteur`, {});
  }
  getRendez(planning:any): Observable<RendezVous[]> {
    return this.http.post<RendezVous[]>(`${baseUrl}/consulter-docteur`, planning);
  }
  // Méthode pour accepter un rendez-vous
  acceptRendezVous(id: number): Observable<any> {
    return this.http.get<any[]>(`${baseUrl}/accepter-consultation/${id}`, {})
    // console.log("Rendez-vous accepté : ", id);
    // return of({ message: 'Rendez-vous accepté avec succès' });
  }

  // Méthode pour refuser un rendez-vous
  refuseRendezVous(id: number): Observable<any> {
    console.log("Rendez-vous refusé : ", id);
    return of({ message: 'Rendez-vous refusé avec succès' });
  }


  getRendezVousAcceptes(): Observable<any> {
    return this.http.get(`${baseUrl}/accepter-consultation/acceptes`);
  }
}
