import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarServiceService {
  constructor(private http: HttpClient) { }

  addEventToCalendar(eventData: any): Observable<any> {
    // Logique pour ajouter l'événement au calendrier Google
    return this.http.post<any>('url_pour_ajouter_l_evenement', eventData);
  }


  // constructor() { }
}
