import { Action, createReducer, on } from '@ngrx/store';

import { ProfileData } from './../profile.model';
import * as ProfileActions from './profile.actions';

export interface ProfileState {
  loading: boolean;
  updating: boolean;
  data: ProfileData | null;
  error: any;
}

export const initialState: ProfileState = {
  loading: false,
  updating: false,
  data: null,
  error: null,
};

export const profileFeatureKey = 'profile';

const profileReducer = createReducer(
  initialState,
  on(ProfileActions.load, (state) => ({
    ...state,
    loading: true,
    data: null,
    error: null,
  })),
  on(ProfileActions.loadSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(ProfileActions.loadError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(ProfileActions.update, (state) => ({
    ...state,
    updating: true,
  })),
  on(ProfileActions.updateSuccess, ProfileActions.updateError, (state) => ({
    ...state,
    updating: false,
  }))
);

export function reducer(
  state: ProfileState | undefined,
  action: Action
): ProfileState {
  return profileReducer(state, action);
}
