import { UserParams } from './../../models/userParams.interface';
import { Patient } from './../../models/patient.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface PatientState extends EntityState<Patient> {
    isLoading:boolean;
    error:string;
    userParams:UserParams
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();
export const initialPatientsDataState: PatientState = adapter.getInitialState({
    isLoading: false,
    error:"",
    userParams:{maxAge:-1,sortBy:"",maxAverageDelay:-1,maxAcceptedOrders:-1,maxCanceledOffers:-1,name:""}
    
});