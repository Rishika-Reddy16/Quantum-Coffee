import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Item} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder = [];
  cartItems = new BehaviorSubject([]);
  
  constructor() { 
    const ls = this.getCartData();
    if(ls)
    this.cartItems.next(ls);
  }

  addItem(item: Item){
    const ls = this.getCartData();

    let exist:Item;

    if(ls)
     exist = ls.find((product)=>{
      return product.id === item.id
    });

    if(exist){
      exist.qty++;
      this.setCartData(ls);
    }
    else{
      if(ls){
        const newData = [...ls, item];
        this.setCartData(newData);
      }
        this.placeholder.push(item);
        this.setCartData(this.placeholder);
    }
  }

  setCartData(data:any){
    localStorage.setItem('cart',JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }
  getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
  }
}
