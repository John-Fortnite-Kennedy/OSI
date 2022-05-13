import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-find',
  templateUrl: './add-find.page.html',
  styleUrls: ['./add-find.page.scss'],
})
export class AddFindPage implements OnInit {

  title: string;
  description: string;

  constructor() { }

  ngOnInit() { }

  open() {
    alert('Загрузка изображения');
  }

}
