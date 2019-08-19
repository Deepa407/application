import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer;
  invalidName:string[]=['xyz','abc'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customer=this.fb.group({
      firstname:new FormControl(null,[Validators.required,Validators.minLength(3),this.checkFirstName.bind(this)]),
      lastname:new FormControl(null)
    });

  }

  checkFirstName(x:AbstractControl):{[y:string]:boolean}
  {
    let value=x.value;
    if(this.invalidName.indexOf(value)!==-1){
      return{'invalidName':true};
    }
    return null;
  }
  onSubmit(){
    console.log(this.customer);
  }

}
