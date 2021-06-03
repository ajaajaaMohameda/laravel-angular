import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Bike } from '../bike';
import { HandleError, HttpHandleErrorService } from '../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private readonly apiUrl = environment.apiUrl;
  private bikesUrl = this.apiUrl + '/bikes';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpHandleError: HttpHandleErrorService) {
    this.handleError = httpHandleError.createHandleError('BikesService');
  }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl).pipe(
      catchError(this.handleError('getBikes', []))
    );
  }

  getBikeDetail(id: number): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getBikeDetail', []))
      );
  }

  addBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.bikesUrl, bike).pipe(
      catchError(this.handleError('addBike', bike))
    )
  }

  updateBike(bike: Bike, id: number): Observable<Bike> {
    return this.http.put<Bike>(this.bikesUrl + `/${id}`, bike).pipe(
      catchError(this.handleError('updateBike', bike))
    )
  }
  /** DELETE bike bike endpoint */
  deleteBike(id: number): Observable<Bike[]> {
    return this.http.delete<Bike[]>(this.bikesUrl
      + `/${id}`)
      .pipe(

        catchError(this.handleError('deleteBike'))
      );
  }

  voteOnBike(vote: any, bike: number): Observable<any> {
    const rating = vote;
    return this.http.post(this.bikesUrl + `/${bike}/ratings`, { rating })
      .pipe(
        catchError(this.handleError('voteOnBike', []))
      )
  }

}
