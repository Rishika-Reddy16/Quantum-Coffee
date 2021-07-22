import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Item} from '../item.model';
import { ValueService } from '../value.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item:Item;
  display = 1;
  constructor(private value: ValueService, private route: ActivatedRoute, private cart: CartService,private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.item = this.value.getItem(id);
  }
  
  addtocart(item: Item){
      this.cart.addItem(item);
      this.router.navigate(['/cart']);
  }
}
