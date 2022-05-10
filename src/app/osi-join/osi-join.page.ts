import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osi-join',
  templateUrl: './osi-join.page.html',
  styleUrls: ['./osi-join.page.scss'],
})
export class OsiJoinPage implements OnInit {

  cities = [
    {
      title: "Нур-Султан"
    },
    {
      title: "Алматы"
    },
    {
      title: "Кокшетау"
    }
  ]

  constructor() { }

  ngOnInit() { }

}
