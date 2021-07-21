import { UserParams } from './../../models/userParams.interface';
import { Patient } from './../../models/patient.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface PatientState extends EntityState<Patient> {
  isLoading: boolean;
  error: string;
  userParams: UserParams;
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();
export const initialPatientsDataState: PatientState = adapter.getInitialState({
  isLoading: false,
  error: '',
  userParams: {
    age: -1,
    sortBy: '',
    averageReplyTime: -1,
    acceptedOffers: -1,
    canceledOffers: -1,
    name: '',
  },
});
