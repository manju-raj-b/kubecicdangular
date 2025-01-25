import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GettechService {

  private _http=inject(HttpClient);
  private _apiURL='https://expertiseapp-d6cta3dabmfgdkgs.eastus-01.azurewebsites.net/api/Expertises';
  techList:any;
  constructor() { }

  getTechList()
  {
    this._http.get(this._apiURL).subscribe(result=>{
      this.techList=result;
      console.log(result);
    });
  }
}
