import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs/index';
import {tap, catchError} from 'rxjs/internal/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

// Triabva da se dobavi CSS-a na toastr

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: any) => {
      switch (err.status) {
        case 401:
          this.toastr.error(err.error.message, 'Warning!');
          break;
        case 400:
          const message = Object.keys(err.error.errors).map(e => err.error.errors[e]).join('\n');
          this.toastr.error(message, 'Warning!');
          break;
      }


      return throwError(err);
      // return Observable.throw(err);
    }));
  }
}
