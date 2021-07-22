import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ValueService } from '../value.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import {Item} from '../item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemInCart:number;
  Form:any;
  firstName:string;
  items:Item[]=[];
  constructor(private value:ValueService,private router: Router,private cart: CartService) {
    this.Form=new FormGroup({
      fname: new FormControl('')
    });
   }
  ngOnInit(){
   this.cart.cartItems.subscribe(data=>{
    this.items = data;})
   this.cart.cartItems.subscribe(d=>
     this.itemInCart = d.length)
  }
  create(){
    this.firstName=this.Form.value.fname;
    localStorage.setItem('firstName',this.firstName)
    this.router.navigate(['/thankyou']);
  }
  onDelete(i:number){
    this.items.splice(i,1);
    this.cart.setCartData(this.items);
  }

}
