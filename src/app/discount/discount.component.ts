import { Component, OnInit } from '@angular/core';
import cartlist from '../../assets/cart.json';
import { HealthmodeService } from '../healthmode.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  healthmode:boolean=false;
  visible:boolean = false;
  cartList:any = cartlist;
  showhideUtility(){
    this.visible = this.visible?false:true;
  }
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
    }
    else{
      this.healthmode=false;
    }
  }
}
