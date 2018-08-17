import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request).pipe(tap((res: any) => {
      if (res instanceof HttpResponse && res.body.token) {
        this.saveToken(res.body);  // Triabva da se dobavi router i da se napravi redirect kum home primerno
        this.toastr.success(res.body.message, 'Success!');
        this.router.navigate(['/']);
      }
      if (res instanceof HttpResponse && res.body.success && res.url.endsWith('register')) {
        this.toastr.success(res.body.message, 'Success!');
        this.router.navigate(['/user/login']);
      }
      if (res instanceof HttpResponse && res.body.success && res.url.endsWith('create')) {
        this.toastr.success(res.body.message, 'Success!');
        this.router.navigate(['/']);
      }
    }));
  }

  private saveToken(data) {
    localStorage.setItem('currentUser', JSON.stringify({
      'username': data.user,
      'token': data.token,
      'isAdmin': data.isUserAuthorized
    }));
  }
}
