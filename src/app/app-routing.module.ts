import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DrinklistComponent } from './drinklist/drinklist.component';
import { CappuccinoComponent } from './items/cappuccino/cappuccino.component';
import { CoffeeComponent } from './items/coffee/coffee.component';
import { ColdteaComponent } from './items/coldtea/coldtea.component';
import { ExpressoComponent } from './items/expresso/expresso.component';
import { HotteaComponent } from './items/hottea/hottea.component';
import { LatteComponent } from './items/latte/latte.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path:'drinklist',
    component: DrinklistComponent,
  },
  {path:'coffee',component: CoffeeComponent},
  {path:'latte',component:LatteComponent},
  {path:'expresso',component:ExpressoComponent},
  {path:'cappuccino',component:CappuccinoComponent},
  {path:'hottea',component:HotteaComponent},
  {path:'coldtea',component:ColdteaComponent},
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
