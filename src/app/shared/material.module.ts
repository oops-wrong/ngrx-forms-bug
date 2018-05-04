import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';

import { ErrorStateMatcherDirective } from './error-state-matcher.directive';
import { NgrxMatSelectValueAccessor } from './mat-select-value-accessor.directive';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  declarations: [ErrorStateMatcherDirective, NgrxMatSelectValueAccessor],
  exports: [
    ErrorStateMatcherDirective,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgrxMatSelectValueAccessor,
  ],
})
export class MaterialModule {}
