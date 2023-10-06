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
import { Observable, of, tap } from 'rxjs';
import { StepService } from '../services/step.service';

@Injectable({ providedIn: 'root' })
export class StepGuard implements CanMatch, CanActivate {
  private result: boolean = true;
  constructor(private stepService: StepService, private router: Router) {}

  private checkFirstAccessStatus(): boolean {
    this.stepService.checkFirstAccess().subscribe((firstAccess) => {
      if (firstAccess) {
        this.result = false;
        if (!this.result) this.router.navigate(['./step']);
      } else {
        this.result = true;
      }
    });

    return this.result;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    console.log('canActivate');
    console.log({ route, state });

    return this.checkFirstAccessStatus();
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    console.log('canMatch');
    console.log({ route, segments });
    return this.checkFirstAccessStatus();
  }
}
