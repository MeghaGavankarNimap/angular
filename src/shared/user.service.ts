import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  onSubmit(data:any): Observable<any>{
    return this.http.post<any>(`customer-api/auth/customer-login`, data).pipe(map(res => res));
  }
}
