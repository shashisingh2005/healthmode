import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { grocery } from '../interface/grocery';
import grocerylist from '../../assets/grocery.json';

import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
  healthmode:Boolean=false;
  id: any = '';
  GroceryList: grocery[] = grocerylist;
  grocery: any;
  addedtoCartmsg:boolean=false;
  healthcondition:boolean=false;
  constructor(private router: Router, private route: ActivatedRoute,private healthmodeService: HealthmodeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.grocery = this.GroceryList.find(e => e.id == this.id)
    if(localStorage.getItem('healthcondition')=='true') {
      this.healthcondition = true;
    }
    if(localStorage.getItem('healthmode')=='true') {
      this.healthmode = true;
    }
    this.healthmodeService.events$.forEach((event: any) => this.switchmode(event));
  }
  
  switchmode(event: any) {
    if (event.checked){
     this.healthmode=true;
    }
    else{
      this.healthmode=false;
    }
  }

  myfunction() {
    this.addedtoCartmsg=true;
  }

}
