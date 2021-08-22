import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Todo } from './todo';
import  jwt_decode from 'jwt-decode';
import {environment} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line:object-literal-key-quotes

  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todoUrl = environment.todoUrl;
  constructor(private http: HttpClient) { }



  postTodo(f: Todo): Observable<any> {
    return this.http.post(this.todoUrl, f)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTodo(id): Observable<any> {
    return this.http.get(`${this.todoUrl}/${id}`)

      .pipe(
        catchError(this.handleError)
      );
  }
  updateTodo(id: string, data): Observable<any> {
    const url = `${this.todoUrl}/${id}`;
    return this.http.put(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTodo(id): Observable<any> {
    return this.http.delete(`${this.todoUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getToken() {
    const token = localStorage.getItem('token');
    const decode = jwt_decode(token);
    return decode;

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }





}




