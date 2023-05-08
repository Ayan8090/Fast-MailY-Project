import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  url="http://localhost:7070"

  constructor(private http: HttpClient ,private snack:MatSnackBar) { }

  email={

    id:"",
    to:"",
    text:"",
    body:"",
    subject:""
  }


  RecEmail = [''];

  DisRecEmail = ['']

  addNewEmail(email:any){
   let Obj:any=  this. RecEmail.push(email);
      localStorage.setItem("RecUser", Obj)
  }


   getRecEmails(){
    let emails:any = localStorage.getItem("RecUser");
     this.DisRecEmail = emails;
   }

  onSend(emailDetails:any){
    this.http.get(`${this.url}/sendMail`,emailDetails).subscribe(
      Response=>{

        this.snack.open("Your Mails send Successfully.")

      },
      error=>{
        this.snack.open("Thank you for using our service currently service not available we'll back soon.","Close")
      });
   }


   mailRequest(){
   return this.onSend(this.email);
   }


   onSave(){
    localStorage.setItem("Mail",JSON.stringify(this.email));
   }

   getMail(){
    localStorage.getItem("Mail");
   }

   SaveMailCount(){
    localStorage.setItem("MailCount",JSON.stringify(this.email))
   }


}
