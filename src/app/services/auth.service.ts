import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://localhost:44305';
//changes to http from https

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`${Api_Url}/api/account/register`, regUserData);
  }

  login(loginInfo) {
    const authString =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/token`, authString).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/book/AllBooks']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }
    return this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this.http.post(`${Api_Url}/api/Account/Logout`, { Headers: this.setHeaders() });
    this.router.navigate(['/login']);
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }
}
