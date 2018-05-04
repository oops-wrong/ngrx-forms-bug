import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import * as fromForm from './form/form.reducer';

export interface AppState {
  form: fromForm.State;
}

export const reducers: ActionReducerMap<AppState> = {
  form: fromForm.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];

export const selectFormState = (state: AppState): AppState['form'] => state.form;
