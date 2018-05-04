import { Action } from '@ngrx/store';

export enum FormActionTypes {
  FormAction = '[Form] Action'
}

export class Form implements Action {
  readonly type = FormActionTypes.FormAction;
}

export type FormActions = Form;
