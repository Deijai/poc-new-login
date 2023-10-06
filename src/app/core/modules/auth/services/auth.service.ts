import { Observable, catchError, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private user?: User;

  constructor(private http: HttpClient, private router: Router) {}

  public get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  public login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) =>
        localStorage.setItem('token', 'AShgGTTqwqtTa.ASytwqeusbhd.UDuasdbasd')
      )
    );
  }

  public logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  public checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
