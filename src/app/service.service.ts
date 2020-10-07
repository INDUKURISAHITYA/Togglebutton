import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

 
export class ServiceService {

  public url =" https://jsonplaceholder.typicode.com/posts"

  constructor(public http:HttpClient) { }

  getdata(): Observable<any>
  {
    return this.http.get<any>(this.url).pipe(retry(1),catchError(this.errorHandler));
  }


 errorHandler(xyz: HttpErrorResponse)
  {
    return throwError(xyz);
  }

  
}
