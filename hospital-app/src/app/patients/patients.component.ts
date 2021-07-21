import { loadSearchStateAction } from '../../root-store/patients-store/patients.actions';
import { UserParams } from '../../models/userParams.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  searchAll(searchParams: UserParams){
    this.store.dispatch(loadSearchStateAction({searchArgs:searchParams}))
  }

}
