import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';


export class Interceptordemo implements HttpInterceptor{
  intercept(req:HttpRequest<any>,next:HttpHandler)
  {
    const httpreq=req.clone({
      //headers:req.headers.set('Content-Type','application/json')
      headers:new HttpHeaders().set('Content-Type','application/json')
      //headers:req.headers.append('Content-Type','applicaiton/json')
    });
    console.log(httpreq);
    return next.handle(httpreq);
  }
}
