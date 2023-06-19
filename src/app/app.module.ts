import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import {  FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors} from '@angular/forms';
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
import { TemplateFormsComponent } from './template-form/template-form.component';
import { TemplateFormAssignComponent } from './template-form-assign/template-form-assign.component';
import { TemplateFormAssign2Component } from './template-form-assign2/template-form-assign2.component';
import { TemplateFormLecture1Component } from './template-form-lecture1/template-form-lecture1.component';
import { TemplateFormLecture2Component } from './template-form-lecture2/template-form-lecture2.component';
import { TemplateFormLecture3Component } from './template-form-lecture3/template-form-lecture3.component';
import { TemplateFormAssign3Component } from './template-form-assign3/template-form-assign3.component';
import { ReactiveFormLecture1Component } from './reactive-form-lecture1/reactive-form-lecture1.component';
import { ReactiveFormLecture2Component } from './reactive-form-lecture2/reactive-form-lecture2.component';
import { ReactiveFormLecture3Component } from './reactive-form-lecture3/reactive-form-lecture3.component';
import { ReactiveFormAssigComponent } from './reactive-form-assig/reactive-form-assig.component';
import { ReactiveFormAssign2Component } from './reactive-form-assign2/reactive-form-assign2.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { ReactiveFormAssign3Component } from './reactive-form-assign3/reactive-form-assign3.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import{EmployeeService} from './service/employee.service';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Service3Component } from './service3/service3.component';
import { TypescriptLectureComponent } from './typescript-lecture/typescript-lecture.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ObservableComponent } from './observable/observable.component';
import { PostComponent } from './post/post.component';
import { ServiceEmployeeAssignComponent } from './service-employee-assign/service-employee-assign.component';
import { ServiceDropdownBindingAssignComponent } from './service-dropdown-binding-assign/service-dropdown-binding-assign.component';
import { TodoComponent } from './todo/todo.component';
import { StateComponent } from './state/state.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RapidApiComponent } from './rapid-api/rapid-api.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { CrickbuzzApiComponent } from './crickbuzz-api/crickbuzz-api.component';
import { SubjectAssignComp1Component } from './subject-assign-comp1/subject-assign-comp1.component';
import { SubjectAssignComp2Component } from './subject-assign-comp2/subject-assign-comp2.component';
import { SubjectAssignComp3Component } from './subject-assign-comp3/subject-assign-comp3.component';
import { CricketinfoComponent } from './cricketinfo/cricketinfo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { GiphyComponent } from './giphy/giphy.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TVComponent } from './product/tv/tv.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchApiAssignComponent } from './search-api-assign/search-api-assign.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';
import { LoginCartComponent } from './login-cart/login-cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HooksComponent } from './hooks/hooks.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { CartService } from './service/cart.service';
import { UserGridComponent } from './user-grid/user-grid.component';
import { AsyncComponent } from './async/async.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DiscountCalculatorComponent } from './discount-calculator/discount-calculator.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

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
    ReactiveFormLecture1Component,
    ReactiveFormLecture2Component,
    ReactiveFormLecture3Component,
    ReactiveFormAssigComponent,
    ReactiveFormAssign2Component,
    Service1Component,
    Service2Component,
    ReactiveFormAssign3Component,
    Service3Component,
    TypescriptLectureComponent,
    ObservableComponent,
    PostComponent,
    ServiceEmployeeAssignComponent,
    ServiceDropdownBindingAssignComponent,
    TodoComponent,
    StateComponent,
    RapidApiComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    CrickbuzzApiComponent,
    SubjectAssignComp1Component,
    SubjectAssignComp2Component,
    SubjectAssignComp3Component,
    CricketinfoComponent,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    LoginComponent,
    GiphyComponent,
    MobileComponent,
    TVComponent,
    LaptopComponent,
    WashingmachineComponent,
    PagenotfoundComponent,
    SearchApiAssignComponent,
    FirebaseComponent,
    PostlistComponent,
    PostdetailsComponent,
    PipeComponent,
    FilterPipe,
    LoginCartComponent,
    HomepageComponent,
    HooksComponent,
    CartComponent,
    HeaderComponent,
    UserGridComponent,
    AsyncComponent,
    RxjsComponent,
    DiscountCalculatorComponent,
    TaskListComponent,
    TaskFormComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule  ,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  HttpClientModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatTableModule
  ],
  providers: [EmployeeService,CartService],
  // {provider:HTTP_INTERCEPTORS}
  bootstrap: [AppComponent]
})
export class AppModule { }
