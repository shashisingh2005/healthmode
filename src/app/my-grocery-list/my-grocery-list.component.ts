import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { grocery } from '../interface/grocery';
import { HttpClient } from '@angular/common/http';
import grocerylist from '../../assets/grocery.json';
import { HealthmodeService } from '../healthmode.service';
import { SelectorMatcher } from '@angular/compiler';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-my-grocery-list',
  templateUrl: './my-grocery-list.component.html',
  styleUrls: ['./my-grocery-list.component.scss']
})
export class MyGroceryListComponent implements OnInit {
  GroceryList: grocery[] = grocerylist;
  searchitem = new FormControl('');
  healthmodestorage:boolean=false;
  constructor(private healthmodeService: HealthmodeService) { }

  ngOnInit(): void {
    this.healthmodeService.events$.forEach(event => this.switchmode(event));
    if(localStorage.getItem('healthmode')=='true'){
      this.GroceryList.sort(this.compare);
    }
  }
  
  switchmode(event: any) {
    let searchterm = this.searchitem.value.trim().toLowerCase();
    if (event.checked){
      this.GroceryList.sort(this.compare);
    } else {
      if(searchterm){
        this.GroceryList = grocerylist.filter(function (item) {
          return item.cat == searchterm;
        });
      } else {
        this.GroceryList.sort(this.compare1);
      }
    }
  }

  searchfilter(){
    let searchterm = this.searchitem.value.trim().toLowerCase();
    if(searchterm){
      this.GroceryList = grocerylist.filter(function (item) {
        return item.cat == searchterm; 
      });
    } else {
      this.GroceryList = grocerylist;
    }
  }
  
  compare( a:any, b:any ) {
    if ( a.type < b.type ){
      return -1;
    }
    if ( a.type > b.type ){
      return 1;
    }
    return 0;
  }

  
  compare1( a:any, b:any ) {
    if ( b.type < a.type ){
      return -1;
    }
    if ( b.type > a.type ){
      return 1;
    }
    return 0;
  }

}
