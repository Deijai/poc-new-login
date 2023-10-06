import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService
      .checkAuthentication()
      .pipe(
        tap((isAuthenticated) => {
          if(!isAuthenticated) this.router.navigate(['./step/welcome']);
        }),
        tap(isAuthenticated => console.log(isAuthenticated))
      );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    console.log('canActivate');
    console.log({ route, state });

    return this.checkAuthStatus();
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    console.log('canMatch');
    console.log({ route, segments });
    return this.checkAuthStatus();
  }
}
