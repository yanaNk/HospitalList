import { DataLoaderService } from './../data-loader.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  sortByOptions:string[]= ['age','acceptedOrders','canceledOrders','averageDelay'];
  userParams: any = {};
  constructor(private dataLoader:DataLoaderService) { }

  ngOnInit(): void {
    
  }
  sendData(){
    this.dataLoader.setData(this.userParams);
  }

}
