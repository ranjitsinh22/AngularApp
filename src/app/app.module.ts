import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import {  FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';
import { PasswardGeneratorLectureComponent } from './passward-generator-lecture/passward-generator-lecture.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { CountryStateComponent } from './country-state/country-state.component';
import { NgForCountryDropDownComponent } from './ng-for-country-dropdown/ng-for-country-dropdown.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CustomDirective } from './custom.directive';
import { StructuralDirectiveAssignComponent } from './structural-directive-assign/structural-directive-assign.component';
import { CommonModule } from '@angular/common';
import { TemplateFormsComponent } from './template-form/template-form.component';
import { TemplateFormAssignComponent } from './template-form-assign/template-form-assign.component';
import { TemplateFormAssign2Component } from './template-form-assign2/template-form-assign2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material';
import { TemplateFormLecture1Component } from './template-form-lecture1/template-form-lecture1.component';
import { TemplateFormLecture2Component } from './template-form-lecture2/template-form-lecture2.component';
import { TemplateFormLecture3Component } from './template-form-lecture3/template-form-lecture3.component';
import { TemplateFormAssign3Component } from './template-form-assign3/template-form-assign3.component';

@NgModule({
  declarations: [
    AppComponent,
  TestComponent,
    Test2Component,
    DatabindingComponent,
    PasswordGeneratorComponent,
    NgIfComponent,
    NgForComponent,
    PasswardGeneratorLectureComponent,
    NgSwitchComponent,
    CountryStateComponent,
    NgForCountryDropDownComponent,
    NgStyleComponent,
    NgClassComponent,
    CustomDirective,
    StructuralDirectiveAssignComponent,
    TemplateFormsComponent,
    TemplateFormAssignComponent,
    TemplateFormAssign2Component,
    TemplateFormLecture1Component,
    TemplateFormLecture2Component,
    TemplateFormLecture3Component,
    TemplateFormAssign3Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
  ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
