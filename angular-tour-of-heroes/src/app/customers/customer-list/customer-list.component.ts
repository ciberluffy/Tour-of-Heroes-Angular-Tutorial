import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  suma(a: number, b: number) : number {
    return a + b;
  }

}
