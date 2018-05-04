import { createFormGroupReducerWithUpdate, createFormGroupState, FormGroupState } from 'ngrx-forms';

import { FormActions, FormActionTypes } from './form.actions';

export interface FormValue {
  select: string;
}

const FORM_ID = 'form';

const initialFormState = createFormGroupState<FormValue>(FORM_ID, { select: 'option1' });

export interface State extends FormGroupState<FormValue> {}

const formReducer = createFormGroupReducerWithUpdate<FormValue>({});

export function reducer(state = initialFormState, action: FormActions): State {
  const form = formReducer(state, action);
  if (form !== state) {
    state = { ...state, ...form };
  }

  switch (action.type) {
    case FormActionTypes.FormAction:
      return state;

    default:
      return state;
  }
}
