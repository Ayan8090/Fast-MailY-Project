import { Component } from '@angular/core';
import { LoginServiceService } from 'src/services/login-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private LoginServiceService:LoginServiceService,private http: HttpClient ,private login:LoginServiceService) {

    this.user = this.LoginServiceService.getUserDeatails();


    }


 user={
  name:"",
  email:""
 }

 userName=""

 sideNav=[
 {title:"Home",Link:"/dashboard",fun:"dashboard"},
 {title:"Profile",Link:"/dashboard",fun:""},
 {title:"Drafts",Link:"",fun:''},
 {title:"Send",Link:"",fun:''},

]




  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onLogout(){
    this.LoginServiceService.LogoutUser();
    window.location.href = "";
  }


  // userDel={
  //   name:"",
  //   email:""
  // }
  // getUserDel(){
  //  let obj = this.LoginServiceService.getUserDeatails();
  //   obj.name = this.userDel.name;
  //   obj.email = this.userDel.email;
  // }

}
