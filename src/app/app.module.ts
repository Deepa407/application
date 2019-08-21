import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { TasksidebarComponent } from './taskdisplay/tasksidebar/tasksidebar.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { Product1Component } from './product1/product1.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductdisplayComponent,
    MenuComponent,
    SidebarComponent,
    ProductaddComponent,
    UserdisplayComponent,
    SignupComponent,
    EdituserComponent,
    EditproductComponent,
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    TasksidebarComponent,
    CustomerComponent,
    SignupReactiveDemoComponent,
    EdiuserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Product1Component,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
