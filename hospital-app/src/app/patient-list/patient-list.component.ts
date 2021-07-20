import { DataLoaderService } from './../data-loader.service';
import { Patient } from './../../models/patient.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  data: Patient[] = [];
  constructor(private dataLoader:DataLoaderService) { }

  ngOnInit(): void {
    
  }

  fetchData(event:any){

  }

}
