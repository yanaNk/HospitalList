import { orderBy } from 'lodash';
import { setUserParamsAction } from './../../root-store/patients-store/patients.actions';
import { UserParams } from './../../models/userParams.interface';
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
    'acceptedOffers',
    'canceledOffers',
    'averageReplyTime',
  ];
  @Output() startSearch = new EventEmitter<any>();
  searchForm: FormGroup;
  userParams: UserParams | undefined;
  selectedSort: string | undefined;
  constructor(fb: FormBuilder, private store: Store) {
    this.searchForm = fb.group({
      age: [],
      acceptedOffers: [],
      canceledOffers: [],
      averageReplyTime: [],
      name: [],
      sortBy: [],
    });
  }

  ngOnInit(): void {}
  search() {
    let userParams: UserParams = {
      age: this.searchForm.get('age')?.value,
      sortBy: this.searchForm.get('sortBy')?.value,
      acceptedOffers: this.searchForm.get('acceptedOffers')?.value,
      canceledOffers: this.searchForm.get('canceledOffers')?.value,
      averageReplyTime: this.searchForm.get('averageReplyTime')?.value,
      name: this.searchForm.get('name')?.value,
    };
    this.store.dispatch(setUserParamsAction({ userParams }));
  }
}
