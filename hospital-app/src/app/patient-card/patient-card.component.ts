import { Patient } from './../../models/patient.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.patient);
  }

}
