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


const arr:Routes=[
   {path:'',component:ProductdisplayComponent},
   {path:'addproduct',component:ProductaddComponent},
   {path:'editproduct/:pro_id',component:EditproductComponent},

   {path:'userdisplay',component:UserdisplayComponent},
   {path:'edituser/:user_email',component:EdituserComponent},
   {path:'signup',component:SignupComponent},

   {path:'taskdisplay',component:TaskdisplayComponent},
   {path:'addtask',component:AddtaskComponent},
   {path:'edittask/:Id',component:EdittaskComponent},

   {path:'customer',component:CustomerComponent}
];

export const routing=RouterModule.forRoot(arr);
