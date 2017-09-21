import { Component, OnInit } from '@angular/core';
import {db} from '../db.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  subscription:Subscription;
  studentProfile;
  constructor(private auth:AuthService,private dbService:db, private route:ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(param=>{this.id=param['id']});
  }


  ngOnInit() {

    this.studentProfile = this.dbService.getData(parseInt(this.id));

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
