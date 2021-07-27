import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyGroceryListComponent } from './my-grocery-list/my-grocery-list.component';
import { FormComponent } from './form/form.component';
import { FitnessComponent } from './fitness/fitness.component';
import { DiscountComponent } from './discount/discount.component';
import { HealthmodeComponent } from './healthmode/healthmode.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { NewcompComponent } from './newcomp/newcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyGroceryListComponent,
    FormComponent,
    FitnessComponent,
    DiscountComponent,
    HealthmodeComponent,
    ItemdetailComponent,
    NewcompComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
