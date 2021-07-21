import { Patient } from './../../models/patient.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface PatientState extends EntityState<Patient> {
    isLoading:boolean;
    error:string;
    fullIds:string[]
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();
export const initialPatientsDataState: PatientState = adapter.getInitialState({
    isLoading: false,
    error:"",
    fullIds:[]
});