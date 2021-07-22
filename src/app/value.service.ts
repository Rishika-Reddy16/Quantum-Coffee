import { Injectable } from '@angular/core';
import {Item} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  items: Item[] = [
    new Item(
      1,
      'Latte',
      1,
      ['../../assets/2.png','../../assets/Latte.png']
    ),
    new Item(
      2,
      'Cappuccino',
      1,
      ['../../assets/3.png','../../assets/Cappuccino.png']
    ),
    new Item(
      3,
      'Macchiato',
      1,
      ['../../assets/5.png','../../assets/Macchiato.png']
    ),
    new Item(
      4,
      'Mocha',
      1,
      ['../../assets/6.png','../../assets/Mocha.png']
    ),
    new Item(
      5,
      'Honey Bee',
      1,
      ['../../assets/7.png','../../assets/HoneyBee.png']
    ),
    new Item(
      6,
      'Americanos',
      1,
      ['../../assets/8.png','../../assets/Americanos.png']
    ),
    new Item(
      7,
      'Cold Brew',
      1,
      ['../../assets/9.png','../../assets/Cold-Brew.png']
    )
  ]
  constructor() { } 

  getItems(){
    return this.items;
  }
  getItem(id:number){
    return this.items.find(item=>
      item.id === id);
  }
}
