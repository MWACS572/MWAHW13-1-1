/**
 * Created by Owner on 9/20/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component'
import {AuthGuard} from "./auth-guard.service";
import {ErrorComponent} from "./error/error.component";
const My_Routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'students', component:StudentComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  {path: 'error', component: ErrorComponent},
  {path:'**', redirectTo:'home'}
]

export const MYROUTE =  RouterModule.forRoot(My_Routes);
