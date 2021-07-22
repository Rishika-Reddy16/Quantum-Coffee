import { Component, OnInit } from '@angular/core';
import {Item } from '../item.model';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-drinklist',
  templateUrl: './drinklist.component.html',
  styleUrls: ['./drinklist.component.css']
})
export class DrinklistComponent implements OnInit {
  items: Item[]=[];
  constructor(private value: ValueService) { }

  ngOnInit(): void {
    this.items = this.value.getItems();
  }
  
  
}
