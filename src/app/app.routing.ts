import { Routes,RouterModule} from  "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { ProductResolverService } from './product-resolver.service';
import { Product1Component } from './product1/product1.component';
import { UserResolverService } from './user-resolver.service';
import { UsersComponent } from './users/users.component';


const arr:Routes=[
   {path:'',component:ProductdisplayComponent},
   {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
   {path:'addproduct',canActivate:[UserGuardService], component:ProductaddComponent},
   {path:'editproduct/:pro_id',component:EditproductComponent},

   {path:'userdisplay', component:UserdisplayComponent},
   {path:'user1', resolve:{uData:UserResolverService}, component:UsersComponent},
   {path:'edituser/:user_email',component:EdituserComponent},
   {path:'signup',component:SignupComponent},

   {path:'taskdisplay',canActivate:[UserGuardService], component:TaskdisplayComponent},
   {path:'addtask',canActivate:[UserGuardService], component:AddtaskComponent},
   {path:'edittask/:Id',component:EdittaskComponent},

   {path:'customer',component:CustomerComponent},

   {path:'signup2',component:SignupReactiveDemoComponent},

   {path:'edituserreactive/:user_email',component:EdiuserreactiveComponent},

   {path:'login',component:LoginComponent},

   {path:'demo',component:DemoComponent},
   {path:'demo1/:id',component:Demo1Component},
   {path:'demo2',component:Demo2Component}
  ];

export const routing=RouterModule.forRoot(arr);
