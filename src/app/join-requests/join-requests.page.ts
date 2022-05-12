import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.page.html',
  styleUrls: ['./join-requests.page.scss'],
})
export class JoinRequestsPage implements OnInit {

  
  requests = [
    {
      name: "Темирлан Казтурганов",
      address: "Блок С 4.6, Квартира 45",
      date: "23 февраля 2022"
    },
    {
      name: "Темирлан Казтурганов",
      address: "Блок С 4.6, Квартира 45",
      date: "23 февраля 2022"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
