import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MYROUTE } from './app.routes';
import { StudentComponent } from './student/student.component'
import {db} from './db.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component'
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    MYROUTE
  ],
  providers: [db, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
