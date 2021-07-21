import { UserParams } from './../../models/userParams.interface';
import { DataLoaderService } from './../data-loader.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  sortByOptions:string[]= ['age','acceptedOrders','canceledOrders','averageDelay'];
  @Output() startSearch = new EventEmitter<any>();
  searchForm: FormGroup ;
  userParams: any = {};
  constructor(private dataLoader:DataLoaderService,fb: FormBuilder) {
    this.searchForm = fb.group({
      age:[],
      acceptedOrders:[],
      canceledOrders:[],
      averageDelay:[]
    });
   }

  ngOnInit(): void {
    
  }
  sendData(){
    this.startSearch.emit({
      age:this.searchForm.get('age')?.value
    })
    this.dataLoader.setData(this.userParams);
  }

}
