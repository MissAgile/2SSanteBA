import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { patient } from '../modelSRS/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients: patient[] = [];

  constructor(private http: HttpClient) { }

  verifierExistencePatient(email: string): Observable<boolean> {
    const patientExist = this.patients.find(patient => patient.email === email);
    return of(patientExist ? true : false);
  }
}
