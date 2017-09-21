/**
 * Created by Owner on 9/20/2017.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Routes} from '@angular/router'
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core'
import {db} from './db.service'
import {AuthService} from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate{
  id;
  constructor(private router:Router, private auth:AuthService,private dbservice:db){
      //this.id = routes.params['id']
  }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean>|boolean{
    this.id = route.queryParams['id'];
    if(this.dbservice.checkId(this.id)){
      return true;
    }else {
      this.router.navigate(['/error']);
      return false;
    }
  }

}
