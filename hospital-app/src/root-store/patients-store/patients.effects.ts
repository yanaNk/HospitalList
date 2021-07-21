import { DataLoaderService } from './../../app/data-loader.service';
import { Injectable } from '@angular/core';

import {
  loadAll,
  getPatientsDataSuccessAction,
  getPatientsDataAction,
} from './patients.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';

@Injectable()
export class PatientsEffetcs {
  constructor(
    private actions$: Actions,
    private dataLoaderService: DataLoaderService
  ) {}

  getAllPatientsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      switchMap(() =>
        this.dataLoaderService
          .getData()
          .pipe(
            map((patients) => getPatientsDataSuccessAction({ data: patients }))
          )
      )
    )
  );
}
