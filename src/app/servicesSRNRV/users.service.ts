import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './api-url.service';
import { Users } from '../modelSRS/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<Users[]>(`${baseUrl}/liste-user/`);
  }

  validerCompteMedecin(userId: number): Observable<any> {
    return this.http.post<any>(`${baseUrl}/valider-compte-medecin/${userId}`, {});
  }

  refuserCompteMedecin(userId: number): Observable<any> {
    return this.http.post<any>(`${baseUrl}/refuser-compte-medecin/${userId}`, {});
  }
}
