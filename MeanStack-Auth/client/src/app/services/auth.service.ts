import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api_url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  registerService(registerObj: any) {
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, registerObj);
  }
}
