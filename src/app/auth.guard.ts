import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
 
export class AuthGuard implements CanActivate{

public observable = new Observable((observer) => {
			observer.next(document.cookie.replace(/(?:(?:^|.*;\s*)isAuth\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
	})	
private isAuth!:boolean;
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    		
        this.observable.subscribe(x => { this.isAuth = (x == 'true') ? true : false});
        console.log('AuthGuard',this.isAuth)
        return this.isAuth;
				
    }
}