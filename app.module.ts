import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CarService } from './Services/car.service';
import { RegisterService } from './Services/register.service';
import { CarsummaryComponent } from './carsummary/carsummary.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { DeletedcarsummaryComponent } from './deletedcarsummary/deletedcarsummary.component';
import { CustomerComponent } from './customer/customer.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { CustcarsummaryComponent } from './custcarsummary/custcarsummary.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    CarsummaryComponent,
    CrudoperationsComponent,
    DeletedcarsummaryComponent,
    CustomerComponent,
    CustloginComponent,
    CustcarsummaryComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    Ng2SearchPipeModule
  ],
  providers: [CarService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
