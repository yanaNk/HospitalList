import { Observable } from 'rxjs';
import { DataLoaderService } from './../data-loader.service';
import { Patient } from './../../models/patient.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPatients, selectPatientsIds } from 'src/root-store/patients-store/patients.selectors';
import { getPatientsDataAction, loadAll } from 'src/root-store/patients-store/patients.actions';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  data: Patient[] = [];
  patients$!: Observable<Patient[]>;
  allIds$!: Observable<string[]>;
  allIds: string[] = [];
  constructor(private dataLoader:DataLoaderService,private store:Store) { }

  ngOnInit(): void {
    //this.fetchData(true);
    this.store.dispatch(loadAll());
    this.allIds$ = this.store.select(selectPatientsIds).pipe(tap(ids => this.allIds = ids as string[])) as unknown as Observable<string[]>;
    this.patients$ = this.store.select(selectAllPatients);
    this.dataLoader.getData().subscribe((data) => this.data = data);
  }

  fetchData(offset: number){
    //this.data# = this.dataLoader.getPart(20);
    this.store.dispatch(getPatientsDataAction({ids:this.allIds,offset,limit:40}))
  }



}
