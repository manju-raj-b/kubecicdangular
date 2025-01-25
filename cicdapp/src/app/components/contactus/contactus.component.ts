import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmitmessageService } from '../../services/submitmessage.service';
import { SendmailService } from '../../services/sendmail.service';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  contactService:SubmitmessageService = inject(SubmitmessageService);
  emailService:SendmailService = inject(SendmailService);

  userData:any={
    userName:'',
    email:'',
    phone:'',
    message:''
  }

  getUserData(formObj:any)
  {
    this.userData.userName=formObj.value.firstname;
    this.userData.email=formObj.value.email;
    this.userData.phone=formObj.value.phone;
    this.userData.message=formObj.value.msg;
    console.log("form data", this.userData);

    this.contactService.postMessage(this.userData);
    this.emailService.sendContactEmail(this.userData);
  }

}
