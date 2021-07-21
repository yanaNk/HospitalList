import { selectFilteredResult } from './../../root-store/patients-store/patients.selectors';
import { Observable } from 'rxjs';
import { Patient } from './../../models/patient.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadAll,
} from 'src/root-store/patients-store/patients.actions';
import { distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  data: Patient[] = [];
  data$!: Observable<Patient[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadAll());
    this.store
      .select(selectFilteredResult)
      .pipe(distinctUntilChanged())
      .subscribe((dataToSet) => {
        this.data = dataToSet;
      });
  }
}
