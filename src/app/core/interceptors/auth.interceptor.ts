import { AuthService } from '../services/interceptorServices/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class authInterceptor implements HttpInterceptor {
    authService = inject(AuthService)
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getToken();
        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }
        return next.handle(req).pipe(
        )
    }
}
