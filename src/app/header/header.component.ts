import { Component, OnInit } from '@angular/core';

import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  healthmode:Boolean=false;
  constructor(private healthmodeService: HealthmodeService) { }

  ngOnInit(): void {
    this.healthmodeService.events$.forEach((event: any) => this.switchmode(event));
    if(localStorage.getItem('healthmode')=='true'){
      this.healthmode=true;
    }
  }
  switchmode(event: any) {
    if (event.checked){
      this.healthmode=true;
    } else{
      this.healthmode=false;
    }
  }
}
