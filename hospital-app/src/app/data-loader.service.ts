import { UserParams } from './../models/userParams.interface';
import { Patient } from './../models/patient.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from './../mocks/patients.json';
@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  patientsData: Patient[] = data;
  dataToReturn: Patient[] = [];
  constructor(private http: HttpClient) {}
  public setData(userParams: UserParams) {
    if (userParams.sortBy) {
      this.dataToReturn = this.dataToReturn.sort((patient) => patient.age);
    }
  }
  public getJSON(): Observable<Patient[]> {
    return this.http.get<Patient[]>('./mocks/patients.json');
  }
}
