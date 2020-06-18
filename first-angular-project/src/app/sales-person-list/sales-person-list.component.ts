import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./SalesPerson";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Katya", "Malets", "katya@malets", 1000),
    new SalesPerson("Dima", "Fedchenko", "dima@fedc", 5000),
    new SalesPerson("Ksu", "Gav", "@gavrilova", 8700),
    new SalesPerson("Masha", "Selivanova", "masha@gmail.com", 86280),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
