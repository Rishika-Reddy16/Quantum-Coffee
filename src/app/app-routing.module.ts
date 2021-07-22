import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DrinklistComponent } from './drinklist/drinklist.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path:'items',
    component: DrinklistComponent,
  },
  {path:'items/:id',component:ItemComponent},
  {
    path:'cart',component:CartComponent
  },
  {
    path:'thankyou',
    component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
