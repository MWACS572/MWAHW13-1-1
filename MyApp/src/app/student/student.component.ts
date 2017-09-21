import { Component, OnInit } from '@angular/core';
import {db} from '../db.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];

  constructor(private auth: AuthService, private dbService:db) {

  }

  ngOnInit() {
    this.students = this.dbService.getAllData();
  }
  getId(id){

    if(this.dbService.checkId(parseInt(id))){
      this.auth.isValidId();

    }



}
