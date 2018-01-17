import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
} from '@angular/material';

const modules = [
  CommonModule,
  FormsModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  FlexLayoutModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class SharedModule { }
