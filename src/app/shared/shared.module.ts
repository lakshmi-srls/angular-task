import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMeterialsModule } from './modules/angular-meterials/angular-meterials.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMeterialsModule
  ],
  exports:[
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMeterialsModule
  ]
})
export class SharedModule { }
