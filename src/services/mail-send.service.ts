// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from './MailCren'
// import { error } from 'console';

// @Injectable({
//   providedIn: 'root'
// })
// export class MailSendService {

//   constructor(private http: HttpClient) { }

//   sendEmail(to: string, subject: string, body: string) {
//     const transporter = nodemailer.createTransport({

//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: environment.gmailUsername,
//         pass: environment.gmailPassword
//       }
//     });

//     const mailOptions = {
//       from: 'ayan.maplesoftwares@gmail.com',
//       to: to,
//       subject: subject,
//       text: body
//     };

//     let Email_response = transporter.sendMail(mailOptions)
//     .then((info) => {
//       console.log('Email sent: ', info.response);
//     })
//     .catch((error) => {
//       console.error('Got something wrong try again or try after some time.', error);
//     });

//     return Email_response;
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class mailSend {

  url='http://localhost:3000/sendmail'

  constructor(private http: HttpClient) {}

  sendMessage(body:any) {
    return this.http.post(`${this.url}/sendmail`, body);
  }
}
