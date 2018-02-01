import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../auth/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //intercept request before post it, add the token in params
    const copiedReq = req.clone({params: req.params.append('auth', this.authService.getToken())});
    return next.handle(copiedReq);
  }

}
