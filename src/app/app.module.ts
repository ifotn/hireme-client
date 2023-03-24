import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';
import { EmployerService } from './services/employer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployerService],
  bootstrap: [EmployerComponent]
})
export class AppModule { }
