import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GettechService } from '../../services/gettech.service';

@Component({
  selector: 'app-expertise',
  imports: [NgFor],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {

  _techService:GettechService=inject(GettechService);

  constructor()
  {
    this._techService.getTechList();
  }


}
