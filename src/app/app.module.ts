import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinklistComponent } from './drinklist/drinklist.component';
import { CartComponent } from './cart/cart.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueService } from './value.service';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinklistComponent,
    CartComponent,
    ThankyouComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
