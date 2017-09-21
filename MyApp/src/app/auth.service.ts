/**
 * Created by Owner on 9/20/2017.
 */
export class AuthService{
  canCheckProfile=false;

  isValidId(){
    this.canCheckProfile=true;
  }
  isNotValidId(){
    this.canCheckProfile=false;
  }
}
