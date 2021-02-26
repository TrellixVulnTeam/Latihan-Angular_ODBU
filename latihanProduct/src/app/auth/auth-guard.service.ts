import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<any> | boolean | undefined {

    return this.authservice.isAuthenticated().then( authenticated => {
      if (authenticated) {
        return true;
      } else {
        console.log("access denied");
        this.router.navigate(['/']);
        return false;
      }
    });

  }

}