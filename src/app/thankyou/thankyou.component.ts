import { Component, OnInit } from '@angular/core';
import { ValueService} from '../value.service';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

export interface Data {
  fname:string;
}

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  firstname:string;
  public user=[];
  constructor(private value:ValueService,private router: Router) { }

  ngOnInit(): void {
    localStorage.getItem('firstName')
    this.firstname=JSON.parse(JSON.stringify(localStorage.getItem('firstName')))
    console.log( JSON.parse(JSON.stringify(localStorage.getItem('firstName')))
    )
  }
 
  placeOrder(){
    localStorage.clear()
    this.router.navigate(['/items']);
  }
}
