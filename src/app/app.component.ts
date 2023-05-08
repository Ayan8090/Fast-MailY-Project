import { Component } from '@angular/core';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private LoginServiceService:LoginServiceService){}

  userDel={
    name:"",
    email:""
  }

  getUserDeatails(){
    let JsonObj = this.LoginServiceService.getToken();
    let jsonString:any = JsonObj;
    let obj = JSON.parse(jsonString);
    this.userDel.name= obj.name ;
    this.userDel.email= obj.email ;
    console.log("i run")
   return obj
  }


  title = 'my-portfolio';
}
