import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class MaterialModule {}
