import { UserParams } from './../../models/userParams.interface';
import { createAction, props} from '@ngrx/store';
import { Patient } from 'src/models/patient.interface';

export const getPatientsDataAction = createAction(
    '[Patients Component] Get Pateitns Data Request',
    props<{ids:string[],offset:number,limit:number}>(),
);

export const getPatientsDataSuccessAction = createAction(
    '[patients data] get patients data success',
    props<{data:Patient[]}>(),
);
export const loadSearchStateAction = createAction(
    '[Patients search component] search patients',
    props<{ searchArgs: UserParams}>(),
);

export const setUserParamsAction = createAction(
    '[Patients search component] search by params',
    props<{userParams:UserParams}>()
);

export const loadAll = createAction(
    '[Patients getAll] get all',
)
