import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitmessageService {

  private _http=inject(HttpClient);
  private _postURL='https://expertiseapp-d6cta3dabmfgdkgs.eastus-01.azurewebsites.net/api/Contactus';

  constructor() { }

  postMessage(contactDta:any)
  {
    this._http.post(this._postURL,contactDta).subscribe((response)=>{
      console.log(response);
    });
  }
}
