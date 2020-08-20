import { createAction, props } from '@ngrx/store';

import { ProfileData } from './../profile.model';

export const checkData = createAction('[Profile] Check data');

export const load = createAction('[Profile] Load');

export const loadSuccess = createAction(
  '[Profile] Load Success',
  props<{ data: ProfileData }>()
);

export const loadError = createAction(
  '[Profile] Load Error',
  props<{ error: any }>()
);

export const update = createAction(
  '[Profile] Update',
  props<{ data: ProfileData }>()
);

export const updateSuccess = createAction('[Profile] Update Success');

export const updateError = createAction('[Profile] Update Error');
