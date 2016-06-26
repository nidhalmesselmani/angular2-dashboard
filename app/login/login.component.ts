import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router-deprecated';
@Component({
    templateUrl:'../app/login/login.component.html',
    providers: [AuthService]
})

export class LoginComponent{
localUser = {
    email : '',
    password : ''
}
constructor(private _service:AuthService, private _router:Router){

}
login() {
this._service.loginfn(this.localUser).then((res)=>{
if(res)
this._router.navigate(['Dashboard']);
else 
console.log(res);
})
}
clearfields(){
    this.localUser.email='';
    this.localUser.password='';
}
}