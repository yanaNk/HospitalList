import { UserParams } from './../models/userParams.interface';
import { Patient } from './../models/patient.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './../mocks/patients.json';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  patientsData: Patient[] =[]
  dataToReturn: Patient[] = [];
  constructor(private http: HttpClient) {}
  public setData(userParams: UserParams) {
    if (userParams.sortBy) {
      this.dataToReturn = this.dataToReturn.sort((patient) => patient.age);
    }
  }
  public getJSON():Patient[] {
     this.http.get<Patient[]>('./mocks/patients.json').subscribe((res:any) =>{
       this.patientsData = res;
     });
     return this.patientsData;
  }

  public getPart(index:number){
    return this.patientsData.slice(index-1);
  }
  public getData(): Observable<Patient[]> {
    return of(data);
  }
}
