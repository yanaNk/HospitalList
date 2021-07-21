import { ofType } from '@ngrx/effects';
import { UserParams } from './../../models/userParams.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, PatientState } from './patients.state';
import { isEmpty, orderBy } from 'lodash';
import { Patient } from 'src/models/patient.interface';

export const selectPatientsState =
  createFeatureSelector<PatientState>('patientsState');
export const selectUserParams = createSelector(
  selectPatientsState,
  (state) => state?.userParams
);
export const {
  selectEntities: selectPatientsEntities,
  selectIds: selectPatientsIds,
  selectAll: selectAllPatients,
} = adapter.getSelectors(selectPatientsState);

export const selectFilteredResult = createSelector(
  selectAllPatients,
  selectUserParams,
  (patients: Patient[], userParams: UserParams) => {
    let getRelevantFields = Object.entries(userParams).filter(
      (value) =>
        !isEmpty(value[1]) || (typeof value[1] == 'number' && value[1] > -1)
    );
    if (getRelevantFields.length == 0) return patients;
    for (let propArray of Object.values(getRelevantFields)) {
      if (propArray[0] === 'name') {
        patients = patients.filter((patient) =>
          patient.name.toLowerCase().startsWith(userParams.name.toLowerCase())
        );
      }
      if (propArray[0].includes('sortBy')) {
        patients = orderBy(patients, userParams.sortBy);
      }
    }
    if (userParams.age > 0)
      patients = patients.filter((patient) => patient.age < userParams.age);
    if (userParams.acceptedOffers > 0)
      patients = patients.filter(
        (patient) => patient.acceptedOffers < userParams.acceptedOffers
      );
    if (userParams.canceledOffers > 0) {
      patients = patients.filter(
        (patient) => patient.canceledOffers < userParams.canceledOffers
      );
    }
    if (userParams.averageReplyTime > 0) {
      patients = patients.filter(
        (patient) => patient.averageReplyTime < userParams.averageReplyTime
      );
    }

    return patients;
  }
);
