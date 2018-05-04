import { Action } from '@ngrx/store';
import { createFormGroupReducerWithUpdate, createFormGroupState, FormGroupState } from 'ngrx-forms';

export interface FormValue {
  select: string;
}

const FORM_ID = 'form';

const initialFormState = createFormGroupState<FormValue>(FORM_ID, { select: 'option1' });

export interface State extends FormGroupState<FormValue> {}

const formReducer = createFormGroupReducerWithUpdate<FormValue>({});

export function reducer(state = initialFormState, action: Action): State {
  const form = formReducer(state, action);
  if (form !== state) {
    state = { ...state, ...form };
  }

  switch (action.type) {
    default:
      return state;
  }
}
