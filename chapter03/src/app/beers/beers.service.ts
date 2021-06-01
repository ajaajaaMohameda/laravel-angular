import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BeersService {


  private url = 'https://api.punkapi.com/v2/beers?';

  constructor(private http: HttpClient) { }

  get(page: number, perPage: number) {
    return this.http.get(`${this.url}page=${page}&per_page=${perPage}`)
    .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error);
  }
}
