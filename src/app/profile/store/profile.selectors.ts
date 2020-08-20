import { createFeatureSelector, createSelector } from '@ngrx/store';

import { profileFeatureKey, ProfileState } from './profile.recuder';

export const selectProfile = createFeatureSelector<any, ProfileState>(
  profileFeatureKey
);

export const selectLoading = createSelector(
  selectProfile,
  ({ loading }) => loading
);

export const selectUpdating = createSelector(
  selectProfile,
  ({ updating }) => updating
);

export const selectPending = createSelector(
  selectLoading,
  selectUpdating,
  (loading, updating) => loading || updating
);

export const selectData = createSelector(selectProfile, ({ data }) => data);
export const selectIsDataLoaded = createSelector(
  selectData,
  (data) => data !== null
);

export const selectError = createSelector(selectProfile, ({ error }) => error);
