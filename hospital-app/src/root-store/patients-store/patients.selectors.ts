import { filter } from 'rxjs/operators';
import { UserParams } from './../../models/userParams.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, PatientState } from './patients.state';
import { isEmpty, orderBy } from 'lodash';
import { Patient } from 'src/models/patient.interface';

export const selectPatientsState = createFeatureSelector<PatientState>('patientsState')
export const selectUserParams = createSelector(selectPatientsState,(state) => state?.userParams);
export const {
    selectEntities: selectPatientsEntities,
    selectIds: selectPatientsIds,
    selectAll: selectAllPatients,
} = adapter.getSelectors(selectPatientsState);

export const selectFilteredResult = createSelector(
    selectAllPatients,
    selectUserParams,
    (patients:Patient[],userParams:UserParams) => {
        let getRelevantFields = Object.entries(userParams)
        .filter((key,value) => !isEmpty(value));
        // if (Object.values(getRelevantFields).every(value => isEmpty(value)))
        //     return patients;
        // for (let field in getRelevantFields){
        //     if (field.includes("max")){
        //        //patients = patients.filter((item) => item[field]> field.valueOf())
        //     }
        //     if(field.includes("sortBy")){
        //         patients = orderBy(patients,userParams.sortBy);
        //     }
        // }
        if(userParams.sortBy != "")
            patients = orderBy(patients,userParams.sortBy);
        if(userParams.maxAge > 0)
            patients = patients.filter(patient => patient.age < userParams.maxAge);
        return patients;
        
    }
)
