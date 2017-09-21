/**
 * Created by Owner on 9/20/2017.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core'
import {db} from './db.service'
import {AuthService} from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private auth:AuthService,private dbservice:db){

  }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean>|boolean{
    console.log(this.dbservice.getBoole())

    if(this.auth.canCheckProfile){
      return true;
    }else {
      this.router.navigate(['/error']);
      return false;
    }
  }

}
