import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { RoleFilterPipe } from './filterPipe';

@NgModule({
  declarations: [
    AppComponent,
    JobFilterComponent,
    RoleFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
