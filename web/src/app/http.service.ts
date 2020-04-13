import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _base = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  get(url: string, params: any): Observable<ArrayBuffer> | Observable<Object> {
    
    return this.http.get(`${this._base}${url}`, { params });
  }

  
}
