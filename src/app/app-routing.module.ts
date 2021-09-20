import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
 
import { AppTaskTableComponent } from './components/app-task-table/app-task-table.component';
import { AppTaskCalculatorComponent } from './components/app-task-calculator/app-task-calculator.component';

const routes: Routes = [
  { path: '',redirectTo:'app-task-table',pathMatch:'full'},
  { path: 'app-task-table', component:AppTaskTableComponent },
  { path: 'app-task-calculator', component: AppTaskCalculatorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
