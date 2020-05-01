import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseUrl = "http://localhost:3000/api";

  constructor(
    private http: HttpClient
  ) { }

  private post(path: string, params: object = {}) {
    return this.http.post(`${this._baseUrl}${path}`, params, {
      withCredentials: true
    })
  }

  register(email: string, password: string): Observable<object> {
    return this.post("/auth/register", { email, password });
  }

  login(email: string, password: string): Observable<object> {
    return this.post("/auth/login", { email, password });
  }

  logout(): Observable<object> {
    return this.post("/auth/logout");
  }
}
