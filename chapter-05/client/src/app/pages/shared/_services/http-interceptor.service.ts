import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/_services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor running');

    const authToken = this.auth.getToken();

    if(authToken) {
      const authReq = req.clone({
        headers:req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      console.log('interceptor running with new headers');

      return next.handle(authReq).pipe(
        tap((event: HttpEvent<any>) => {
          if(event instanceof HttpResponse) {
            console.log('TAP function ', event)
          }
        }, (err: any) => {
          console.log(err);
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              localStorage.removeItem('token');
              this.router.navigate(['/'])
            }
          }
        })
      );
    } else {
      console.log('interceptor without changes');
      return next.handle(req);
    }

  }
}
