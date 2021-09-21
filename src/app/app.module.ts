import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/header/header.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { AppTaskTableComponent } from './components/app-task-table/app-task-table.component';
import { AppTaskCalculatorComponent } from './components/app-task-calculator/app-task-calculator.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { UsersService } from './services/users.service';
import { AppTaskGraphComponent } from './components/app-task-graph/app-task-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AppTaskTableComponent,
    AppTaskCalculatorComponent,
    PageNotFoundComponent,
    AppTaskGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
