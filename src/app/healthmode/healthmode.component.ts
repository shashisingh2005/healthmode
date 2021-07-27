import { Component, OnInit } from '@angular/core';
import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-healthmode',
  templateUrl: './healthmode.component.html',
  styleUrls: ['./healthmode.component.scss']
})
export class HealthmodeComponent implements OnInit {
  healthmodestorage:boolean=false;
  constructor(private healthmodeService:HealthmodeService) { }

  ngOnInit(): void {
    if(localStorage.getItem('healthmode')=='true'){
      this.healthmodestorage = true;
    } else {
      this.healthmodestorage = false;
    }
  }
  switchmode(event:Event){
    this.healthmodeService.newEvent(event.target);
  }
}
