import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable()
export class AuthService{
isLoggedin: boolean ;

constructor(private _http:Http){

}
loginfn(usercreds){
    this.isLoggedin = false;
   var headers = new Headers();
    var creds = 'email='+ usercreds.email + '&password=' + usercreds.password;
    console.log(creds);

    headers.append('Content-Type','application/x-www-form-urlencoded');
  return new Promise((resolve)=>{


   this._http.post('http://localhost/Lumen_API/public/auth/login',creds,{headers: headers}).subscribe((data)=>{
if(data.json()){
    window.localStorage.setItem('auth_key',data.json().token);
    this.isLoggedin = true ;}
    resolve(this.isLoggedin);
}
   )
  })
}
}