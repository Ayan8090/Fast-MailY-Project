import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient,private snack:MatSnackBar) { }

  url= "http://localhost:8080/"

  user={
    userName:"",
    userEmail:"",
    userContact:""
  }


  getUserDeatails(){
    let JsonObj = localStorage.getItem("User");
    let jsonString:any = JsonObj;
    let obj = JSON.parse(jsonString);
   return obj
  }


  getToken(){
    localStorage.getItem("User");
    return localStorage.getItem("User");

  }

  LoginUser(token : any){

   const user = localStorage.getItem("User");

   if (user!=null||user!=undefined){

    const LoginUser = JSON.parse(user);

    if ( LoginUser.email == token.username && LoginUser.password == token.password) {
      window.location.href = "/dashboard";
      this.snack.open("You have login successfully.","Close");
      return true
    }else{
      return false
    };
   }
    return this.isLogin();
  }

  LogoutUser(){
    localStorage.removeItem("User");
    this.snack.open("You have logout.","Close");
    return false
  }

  isLogin(){

    let token = localStorage.getItem("User");
    if (token == undefined || token == null || token == '') {
      this.snack.open("Signup Please.","Close");
      return false
    }
    else{

      return true
    }

    }

    DoLRegister(credentials : any){
      this.snack.open("You have successfully signup.","Close");
      return localStorage.setItem("User",JSON.stringify(credentials));
    }

  }


