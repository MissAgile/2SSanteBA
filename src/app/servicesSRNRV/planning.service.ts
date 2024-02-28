import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { baseUrl } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  private apiUrl = `${baseUrl}/planning`;

  constructor(private http: HttpClient) { }

  // Récupérer la liste des plannings depuis le backend
  getPlannings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getPlanning(planningId: number): Observable<any> {
    const url = `${this.apiUrl}/${planningId}`;
    return this.http.get<any>(url);
  }
  // Récupérer la liste des plannings d'un médecin spécifique
  getALLPlannings(medecinId: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/home/planning-medecin/${medecinId}`);
  }

  // Ajouter un nouveau planning
  ajouterPlanning(planning: any): Observable<any> {
    // Validation des heures de début et de fin
    if (planning.heure_debut >= planning.heure_fin) {
      Swal.fire('Erreur', "L'heure de fin doit être postérieure à l'heure de début.", 'error');
      return throwError("L'heure de fin doit être postérieure à l'heure de début.");
    }

    // Empêcher la programmation à une date passée
    if (new Date(planning.date) < new Date()) {
      Swal.fire('Erreur', 'La date de programmation ne peut pas être dans le passé.', 'error');
      return throwError("La date de programmation ne peut pas être dans le passé.");
    }

    return this.http.post<any>(this.apiUrl, planning).pipe(
      catchError(error => {
        Swal.fire('Erreur', 'Une erreur est survenue lors de l\'ajout du planning.', 'error');
        return throwError(error);
      })
    );
  }

  // Mettre à jour un planning existant
  mettreAJourPlanning(planningId: string, updatedPlanning: any): Observable<any> {
    const url = `${this.apiUrl}/${planningId}`;
    return this.http.put<any>(url, updatedPlanning).pipe(
      catchError(error => {
        Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour du planning.', 'error');
        return throwError(error);
      })
    );
  }

  // Supprimer un planning existant
  supprimerPlanning(planningId: string): Observable<any> {
    const url = `${this.apiUrl}/${planningId}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        Swal.fire('Erreur', 'Une erreur est survenue lors de la suppression du planning.', 'error');
        return throwError(error);
      })
    );
  }
}
