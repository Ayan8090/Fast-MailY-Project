import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  RegisterCredentials={
    name:"",
    contact:"",
    email:"",
    password:"",
    checkBox:false,
    }

constructor(private LoginServiceService:LoginServiceService , private router:Router, private snack:MatSnackBar) { }

  onRegiter(){

  if (this.RegisterCredentials.checkBox!=true) {
    this.snack.open("Signup failed You are not agree terms and Condition..","Close");
  }
 else{
  this.LoginServiceService.DoLRegister(this.RegisterCredentials);
   this.router.navigate([""]);
   this.snack.open("You have successfully Registered.","Close");
 }
  }
}
