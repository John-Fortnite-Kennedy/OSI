import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.page.html',
  styleUrls: ['./residents-list.page.scss'],
})
export class ResidentsListPage implements OnInit {

  residents = [
    {
      name: "Темирлан Казтурганов",
      address: "Блок С 4.6, Квартира 45"
    },
    // {
    //   name: "Темирлан Казтурганов",
    //   address: "Блок С 4.6, Квартира 45"
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

}
