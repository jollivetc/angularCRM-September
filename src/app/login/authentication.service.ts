
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './model/user';

const USER_TOKEN = 'angularCRM.user.token';
const JWT_TOKEN = 'angularCRM.jwt.token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?:User;
  private jwt?:string;

  constructor(private http:HttpClient) {
    if(sessionStorage.getItem(USER_TOKEN)){
      this.user = JSON.parse(sessionStorage.getItem(USER_TOKEN)!);
      this.jwt = sessionStorage.getItem(JWT_TOKEN)!;
    }
  }

  get jwtToken():string|undefined{
    return this.jwt;
  }
  get authenticated():boolean {
    return !!this.user
  }

  disconnect():void{
    this.user = undefined;
    this.jwt = undefined;
    sessionStorage.clear();
  }

  authentUser(login:string, password:string):Observable<User>{
    return this.http.post<AuthentResponse>('/api/auth/login', {email:login, password:password}).pipe(
      map((authentResponse:AuthentResponse)=>{
        this.user = authentResponse.user;
        this.jwt = authentResponse.token;
        sessionStorage.setItem(USER_TOKEN, JSON.stringify(this.user));
        sessionStorage.setItem(JWT_TOKEN, this.jwt);
        return this.user;
      })
    )
  }
}

interface AuthentResponse {
  user:User,
  token:string
}
