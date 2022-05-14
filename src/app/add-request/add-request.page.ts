import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.page.html',
  styleUrls: ['./add-request.page.scss'],
})
export class AddRequestPage implements OnInit {

  categories = [
    {
      title: "Клининг"
    },
    {
      title: "Сан узел"
    },
    {
      title: "Охрана"
    }
  ]

  constructor() { }

  ngOnInit() { }

}
