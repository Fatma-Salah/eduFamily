import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getGeneric } from '../../../environments/app-url';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
http=inject(HttpClient)

  get(url:string):Observable<any> { 
   return this.http.get(getGeneric.get(url));
  }
}
 