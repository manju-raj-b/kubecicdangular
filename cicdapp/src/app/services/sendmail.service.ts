import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  _http = inject(HttpClient);
  _functionappURL='angularfunc.azurewebsites.net';
  constructor() { }

  sendContactEmail(userData:any)
  {
    this._http.post(this._functionappURL,userData).subscribe(response=>{
      console.log(response);
    });
  }
}
