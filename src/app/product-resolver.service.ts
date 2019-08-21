import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ProductResolved } from './productdisplay/product';
import { ProductdataService } from './productdisplay/productdata.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<ProductResolved>{

  constructor(private _productdata:ProductdataService) {}

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._productdata.getAllProducts().pipe(
      map(x=>({products:x,errormsg:''})),
      catchError(error=>{
        return of({products:null,errormsg:'Something went wrong'})
      })
    );
  }
}
