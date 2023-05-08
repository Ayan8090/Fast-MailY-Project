import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MailServiceService } from 'src/services/mail-service.service';
import { json } from 'body-parser';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

url="http://localhost:7070"

  constructor(private mailServie:MailServiceService,private http:HttpClient) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.mailServie.getRecEmails();

    this.DisEmail= this.mailServie.DisRecEmail

    this.getSavedMails();

    this.MailsNull();

    this.ClearAll();

  }

  panelOpenState = false;

  public Editor = ClassicEditor;

  public editorData = '<p>Hello, world!</p>';

  email={
    id:0,
    to:"",
    text:'',
    body:"",
    subject:""
  }


  UserEmail={name:""}
  DisEmail=[""]


  SaveMails=[{
    to:"Example@gmail.com",
    text:"Your Text Here!",
    subject:"Your Subject"
  }]


  UserMails=[{
    to:"",
    subject:"",
    text:""
  }]


  addEmail(){
    this.mailServie.addNewEmail(this.UserEmail.name)
  }


  onMailSubmit(){
    this.mailServie.onSend(this.email);
  }


MailsNull(){
  if (this.SaveMails!=null || this.SaveMails!='' || this.SaveMails!=undefined) {
   this.getSavedMails();

  }
}

  onMailSave(){

    let mod= this.email.text.replace("<p>"," ")
    let final=  mod.replace("</p>","")

      this.email.text = final

      +this.email.id;
   const newObj:any = this.email;

        //  this.SaveMails.push({id: +1, to:this.email.text,text:final,subject:this.email.subject});
      this.SaveMails.push(newObj);

    // localStorage.setItem("Mails", JSON.stringify(this.SaveMails));
  }


  getSavedMails(){

    let obj:any = this.http.get(`${this.url}/Mails`)

  let  JSONObj=  JSON.parse(obj.data);

    this.SaveMails.push(JSONObj);

//     let mail_obj:any= localStorage.getItem("Mails");
//     let user =  JSON.parse(mail_obj);

//  this.SaveMails.push(user);

  }

  ClearAll(){

  this.email.id=0,
  this.email.to="",
  this.email.subject=""
  this.email.text=""
  this.SaveMails.length =  0;
  }


}
