import { Component } from '@angular/core';
import { LoginServiceService } from 'src/services/login-service.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { on } from 'events';

// import { MailSendService } from 'src/services/mail-send.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private LoginServiceService:LoginServiceService,private http: HttpClient ) { }




  onLogout(){
    this.LoginServiceService.LogoutUser();
    window.location.href = "";
  }

  // onMailSend(){
  //   this.mailServide.sendEmail(this.MailDeatils.to,this.MailDeatils.subject,this.MailDeatils.body);
  // }


}

