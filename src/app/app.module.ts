import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinklistComponent } from './drinklist/drinklist.component';
import { CartComponent } from './cart/cart.component';
import { CoffeeComponent } from './items/coffee/coffee.component';
import { LatteComponent } from './items/latte/latte.component';
import { ExpressoComponent } from './items/expresso/expresso.component';
import { CappuccinoComponent } from './items/cappuccino/cappuccino.component';
import { HotteaComponent } from './items/hottea/hottea.component';
import { ColdteaComponent } from './items/coldtea/coldtea.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinklistComponent,
    CartComponent,
    CoffeeComponent,
    LatteComponent,
    ExpressoComponent,
    CappuccinoComponent,
    HotteaComponent,
    ColdteaComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
