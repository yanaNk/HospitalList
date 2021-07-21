import { createFeatureSelector } from '@ngrx/store';
import { adapter, PatientState } from './patients.state';
export const getIsLoadingPatients = ( state: PatientState) => state.isLoading;

export const selectPatientsState = createFeatureSelector<PatientState>('patientsState')
export const {
    selectEntities: selectPatientsEntities,
    selectIds: selectPatientsIds,
    selectAll: selectAllPatients,
} = adapter.getSelectors(selectPatientsState);
