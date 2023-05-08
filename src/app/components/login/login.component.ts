import { Component } from '@angular/core';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

credentials={
  username: "",
  password: "",
}

Massage={
  Type: "",
  dis: "",
}

constructor(private LoginServiceService:LoginServiceService) { }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}



onLoginSubmit(){
console.log("helo");
if ((this.credentials.username !='' && this.credentials.password !='')
&& (this.credentials.username !=null && this.credentials.password !=null)){

  // Request to backend
  console.log("Request to  login");
 const data = this.LoginServiceService.LoginUser(this.credentials);

}else{

  // Please enter in feilds
  this.Massage.Type = "Error";
  this.Massage.Type = "Feilds are Blank or null.";
  this.PopMassage();

}

}

PopMassage(){

  console.log(this.Massage.Type);
  console.log(this.Massage.dis);
}

}
