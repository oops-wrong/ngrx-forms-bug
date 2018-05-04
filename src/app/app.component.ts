import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, selectFormState } from './reducers';

interface Option {
  display: string;
  value: string;
}

const initOptions: Option[] = [
  {
    display: 'Option #1 1',
    value: 'option1',
  },
  {
    display: 'Option #1 2',
    value: 'option2',
  },
];

const updatedOptions: Option[] = [
  {
    display: 'Option #2 1',
    value: 'option1',
  },
  {
    display: 'Option #2 2',
    value: 'option2',
  },
  {
    display: 'Option #2 3',
    value: 'option2',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formState$: Observable<AppState['form']>;
  selectOptions = initOptions;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.formState$ = this.store.pipe(select(selectFormState));
  }

  onOptionsInitChange(): void {
    this.selectOptions = initOptions;
  }

  onOptionsUpdatedChange(): void {
    this.selectOptions = updatedOptions;
  }
}
