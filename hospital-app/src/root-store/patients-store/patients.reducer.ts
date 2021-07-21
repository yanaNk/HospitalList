import { adapter, initialPatientsDataState } from './patients.state';
import { createReducer, on } from "@ngrx/store";
import { getPatientsDataAction, getPatientsDataSuccessAction } from './patients.actions';

export const patientReducer = createReducer(
    initialPatientsDataState,
    on(getPatientsDataAction,(state) => ({
        ...state,
        isLoading: true
    })),
    on(getPatientsDataSuccessAction,(state,{data}) =>
    adapter.addMany(data,{...state,isLoading:false,error:""})));