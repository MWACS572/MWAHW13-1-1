/**
 * Created by Owner on 9/20/2017.
 */
import {Injectable} from "@angular/core"

//@Injectable()
export class db{
  boole = false;

  data = [{id:"1", name:'William John', stuID: '12345', email:'william@yahoo.com'},
    {id:"2", name: 'John Doe', stuID:'23456', email: 'john@yahoo.com'},
    {id:"3", name: 'Mark Mathew', stuID:'34583', email: 'mark@yahoo.com'}
  ]

  constructor(){}

  getData(id2){
      let obj;
      for(let i = 0; i<this.data.length; i++){

          if((id2)==this.data[i].id){
            obj =  this.data[i];

          }
      }
    return obj;
  }
  getBoole(){
    return this.boole;
  }
  checkId(id){

    for(let i = 0; i<this.data.length; i++){

      if(parseInt(id)==parseInt(this.data[i].id)){
        this.boole = true;
        return true;
      }else{
        this.boole = false;

      }
    }
    return this.boole;
  }

  getAllData(){
   return this.data;
  }
}
