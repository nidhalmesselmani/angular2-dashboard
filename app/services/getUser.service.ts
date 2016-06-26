import { Injectable } from '@angular/core';
import { Headers, Http,HTTP_BINDINGS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class GetUserService{
    constructor(private _http:Http){
}
getUserName(){
    var jwt = localStorage.getItem('auth_key');
    var authHeader = new Headers();
    if (jwt){
        authHeader.append('Authorization','Bearer'+jwt);
    }
return     this._http.get('http://localhost/Lumen_API/public/authuser',{
           headers: authHeader
       }).retry(10).map(res=>res.json())

 

   



  
}
}