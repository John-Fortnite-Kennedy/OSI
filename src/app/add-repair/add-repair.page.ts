import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.page.html',
  styleUrls: ['./add-repair.page.scss'],
})
export class AddRepairPage implements OnInit {

  title: string;
  description: string;

  constructor() { }

  ngOnInit() { }

  open() {
    alert('Загрузка изображения');
  }

}
