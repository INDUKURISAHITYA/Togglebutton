import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule ,routers} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import {MatModule,Material} from './mat/mat.module';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { FormarrayComponent } from './formarray/formarray.component';
import {ServiceService} from './service.service';
import { GetserviceComponent} from './getservice/getservice.component';
import { ValidatorService } from './validator.service';
import { Formarray2Component } from './formarray2/formarray2.component';
import { FormArray1Component } from './form-array1/form-array1.component';
import { AnimationsComponent } from './animations/animations.component';




@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    MyDialogComponent,
    FormarrayComponent,
    routers,
    GetserviceComponent,
    Formarray2Component,
    FormArray1Component,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    
  ],
  entryComponents: [
    MyDialogComponent, MaterialComponent
  ],
  providers: [ServiceService, ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
