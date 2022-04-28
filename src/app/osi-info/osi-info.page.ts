import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osi-info',
  templateUrl: './osi-info.page.html',
  styleUrls: ['./osi-info.page.scss'],
})
export class OsiInfoPage implements OnInit {

  houseCouncil = [
    {
      fname: "Дуйсенбаев Ербол",
      phone: "+7 701 939 00 99"
    },
    {
      fname: "Алиев Данияр",
      phone: "+7 702 645 74 04"
    },
    {
      fname: "Мукатов Арыстан",
      phone: "+7 777 534 34 34"
    }
  ]

  constructor() { }

  ngOnInit() { }

}
