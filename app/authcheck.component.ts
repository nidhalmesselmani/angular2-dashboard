import {Directive,Attribute,ViewContainerRef,DynamicComponentLoader} from '@angular/core';
import {Router,RouterOutlet,ComponentInstruction} from '@angular/router-deprecated';

@Directive({
    selector:'router-outlet'
})

export class AuthCheck extends RouterOutlet{
    publicRoutes: any; 
    private parentRouter: Router;
    constructor(_elementRef:ViewContainerRef, _loader: DynamicComponentLoader,_parentRouter:Router,
    @Attribute('name')nameAttr:string){
        super(_elementRef,_loader,_parentRouter,nameAttr);
        this.parentRouter= _parentRouter; 
        this.publicRoutes = {
            'login':true
        };
    }
    activate(instruction:ComponentInstruction){
        let url = instruction.urlPath;
        if(!this.publicRoutes[url] && !localStorage.getItem('auth_key')){
            this.parentRouter.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}
