import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { patientReducer } from './patients.reducer';

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        StoreModule.forFeature('patientsState',patientReducer)
    ],
    
})
export class RootStoreModule{}