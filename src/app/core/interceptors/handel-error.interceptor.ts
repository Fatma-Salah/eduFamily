import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { HandleErrorService } from "../services/interceptorServices/handle-error.service";

 @Injectable()
 export class handelErrorInterceptor implements HttpInterceptor{
handelErrorService=inject(HandleErrorService)
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log();
    
     return next.handle(req).pipe(
      
      catchError((error:HttpErrorResponse)=>{
        return this.handelErrorService.handelErrorResponce(error)
      })
     )
   }

   
 }
