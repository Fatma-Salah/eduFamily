import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }
  handelErrorResponce(errorResponce:HttpErrorResponse):Observable<any>{
if(errorResponce.status==0){
  // client error
  console.log('client error ',errorResponce);
  
}else{
  console.log('server error' , errorResponce);
  
}
    return throwError(()=>{console.log('tesarae');
    })
  }
}
