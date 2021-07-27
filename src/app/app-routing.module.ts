import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { FitnessComponent } from './fitness/fitness.component';
import { FormComponent } from './form/form.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { MyGroceryListComponent } from './my-grocery-list/my-grocery-list.component';
// import { AddtodoComponent } from './addtodo/addtodo.component';
const routes: Routes = [
  { path: '', redirectTo: '/grocerylist', pathMatch: 'full' },
   { path: 'healthform', component: FormComponent },
   { path: 'grocerylist', component: MyGroceryListComponent },
   { path: 'healthcoin', component: FitnessComponent },
   { path: 'cart', component: DiscountComponent },
   { path: 'itemvalue/:id', component:  ItemdetailComponent},
   
   
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
