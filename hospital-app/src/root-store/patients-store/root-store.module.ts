import { PatientsEffetcs } from './patients.effects';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { patientReducer } from './patients.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('patientsState', patientReducer),
    EffectsModule.forFeature([PatientsEffetcs]),
  ],
  providers: [PatientsEffetcs],
})
export class RootStoreModule {}
