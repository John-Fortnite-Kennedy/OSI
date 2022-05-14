import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osi-create',
  templateUrl: './osi-create.page.html',
  styleUrls: ['./osi-create.page.scss'],
})
export class OsiCreatePage implements OnInit {

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
