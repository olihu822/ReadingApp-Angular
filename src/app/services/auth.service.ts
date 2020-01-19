import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const Api_Url = 'https://localhost:44305';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(regUserData: RegisterUser){
    return this.http.post(`${Api_Url}/api/account/register`, regUserData);
  }
}
