import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { User } from '../user';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: User = new User;
  private readonly apiUrl = environment.endpoint;
  private registerUrl = this.apiUrl + '/register';
  private loginUrl = this.apiUrl + '/login';
  constructor(
    private http: HttpClient, private router: Router
  ) { }

  onRegister(user: User): Observable<User|any> {
    const request = JSON.stringify({
      name: user.name, email: user.email, password: user.password
    });

    return this.http.post<any>(this.registerUrl, request, httpOptions).pipe(
      map((response: User) => {
      const token: string = response['access_token'];

      if (token) {
        this.setToken(token);
        this.getUser().subscribe();
      }

      return response;
    }), catchError(error => this.handleError(error)));
  }

  onLogin(user: User): Observable<User> {
    const request = JSON.stringify({
      email: user.email, password: user.password
    });

    return this.http.post<any>(this.loginUrl, request, httpOptions).pipe(map((response: User) => {
      const token: string = response['access_token'];

      if (token) {
        this.setToken(token);
        this.getUser().subscribe();
      }
      return response;
    }), catchError(error => this.handleError(error)));
  }

  onLogout(): Observable<User> {
    return this.http.post<any>(this.apiUrl + '/logout', httpOptions).pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      })
    )
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token);
  }

  getToken(): any {
    // return localStorage.getItem('token');
    const token = localStorage.getItem('token');
    if(token) {
      return token;
    }
  }

  getUser(): Observable<User> {
    return this.http.get(this.apiUrl + '/me').pipe(
      tap((user: User) => {
        this.currentUser = user;
      })
    )
  }

  isAuthenticated(): boolean {
    const token: string = this.getToken();
    return token ? true : false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client side error
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend error
      return throwError(error);
    }
    // return a custom error message
    return throwError('Ohps something wrong happen here; please try again later');
  }
}