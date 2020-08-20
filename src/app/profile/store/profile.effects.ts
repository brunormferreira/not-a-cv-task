import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map, mapTo, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { ProfileService } from './../profile.service';
import * as ProfileActions from './profile.actions';
import * as ProfileSelectors from './profile.selectors';

@Injectable()
export class ProfileEffects {
  checkData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.checkData),
      withLatestFrom(this.store.select(ProfileSelectors.selectIsDataLoaded)),
      filter(([_, isDataLoaded]) => !isDataLoaded),
      mapTo(ProfileActions.load())
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.load),
      switchMap(() =>
        this.profileService.getData().pipe(
          map((data) => ProfileActions.loadSuccess({ data })),
          catchError((error) => of(ProfileActions.loadError({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.update),
      exhaustMap(({ data }) =>
        this.profileService.updateData(data).pipe(
          map(() => ProfileActions.updateSuccess()),
          catchError(() => of(ProfileActions.updateError()))
        )
      )
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateSuccess),
      tap(() => {
        this.router.navigateByUrl('/profile');
        this.showSnackbar('Profile has been updated!');
      }),
      mapTo(ProfileActions.load())
    )
  );

  updateError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.updateError),
        tap(() => {
          this.showSnackbar('Error during update. Please try again...');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{}>,
    private router: Router,
    private snackbar: MatSnackBar,
    private profileService: ProfileService
  ) {}

  private showSnackbar(message: string): void {
    this.snackbar.open(message, null, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
