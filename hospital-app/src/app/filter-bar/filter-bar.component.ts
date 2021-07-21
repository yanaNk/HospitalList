import { orderBy } from 'lodash';
import { setUserParamsAction } from './../../root-store/patients-store/patients.actions';
import { UserParams } from './../../models/userParams.interface';
import { DataLoaderService } from './../data-loader.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  sortByOptions: string[] = [
    'age',
    'acceptedOrders',
    'canceledOrders',
    'averageDelay',
  ];
  @Output() startSearch = new EventEmitter<any>();
  searchForm: FormGroup;
  userParams: UserParams | undefined;
  constructor(fb: FormBuilder, private store: Store) {
    this.searchForm = fb.group({
      age: [],
      acceptedOrders: [],
      canceledOrders: [],
      averageDelay: [],
      name: [],
      orderBy:[]
    });
  }

  ngOnInit(): void {}
  search() {
    let userParams: UserParams = {
      maxAge: this.searchForm.get('age')?.value,
      sortBy: this.searchForm.get('sortBy')?.value,
      maxAcceptedOrders: this.searchForm.get('acceptedOrders')?.value,
      maxCanceledOffers: this.searchForm.get('canceledOrders')?.value,
      maxAverageDelay: this.searchForm.get('averageDelay')?.value,
      name: this.searchForm.get('name')?.value,
    };
    this.store.dispatch(setUserParamsAction({ userParams }));
  }
}
