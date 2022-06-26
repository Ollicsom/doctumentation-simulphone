import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { StepComponent } from './step/step.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { DocComponent } from './doc/doc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StepFormComponent } from './step-form/step-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStepComponent } from './add-component/add-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    StepComponent,
    DocComponent,
    StepFormComponent,
    AddStepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
