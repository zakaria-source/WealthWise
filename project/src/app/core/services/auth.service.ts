import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post('/api/auth/login', { email, password });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    // Clear local storage, cookies etc.
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}