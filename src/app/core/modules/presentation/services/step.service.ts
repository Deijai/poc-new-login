import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  constructor(private http: HttpClient) {}

  public checkFirstAccess(): Observable<string> {
    const firtsAccess = localStorage.getItem('firtsAccess');
    if (!firtsAccess) return of('');
    return of(firtsAccess);
  }
}
