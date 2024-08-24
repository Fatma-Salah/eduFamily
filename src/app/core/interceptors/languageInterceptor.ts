import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { LanguageServiceService } from '../services/interceptorServices/language-service.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor { 
    languageService= inject(LanguageServiceService)
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = request.headers.set('Accept-Language', this.languageService.getcurrentLanguage());
    const updatedRequest = request.clone({ headers });
    return next.handle(updatedRequest);
  }
}