import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()

export class GetKpiService {
    constructor(private _http:Http){}
    
getKPiServiceBar(){
    var jwt = localStorage.getItem('auth_key');
    var authHeader = new Headers();
    if (jwt){
        authHeader.append('Authorization','Bearer'+jwt);
    }
     return new Promise((resolve)=>{
       this._http.get('http://localhost/Lumen_API/public/test_kpi',{
           headers: authHeader
       }).subscribe((data)=>{

   resolve(data.json());

   

})

     })

}
}