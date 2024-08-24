import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 
import { LoggerService } from '../services/interceptorServices/logger.service';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now();
    return next.handle(request).pipe(
      tap(() => {
        const end = performance.now();
        this.loggerService.log(`Request to ${request.url} took ${end - start} ms`);
      })
    );
  }
}