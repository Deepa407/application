import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { UserResolved } from './userdisplay/user';
import { UserdataService } from './userdisplay/userdata.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserResolved> {

  constructor(private _userdata:UserdataService) {}

  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>
  {
          return this._userdata.getAllUsers().pipe(
        map(x => ({ data: x,errorMessage:'' })),
        catchError(err=>{
          console.log(err);
          return of({ product: null,errorMessage:err.message });
        })
      );


  }
}
