import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  reports = [
    { title: "Отчет по 11.03.2021" }
  ]

  constructor() { }

  ngOnInit() { }

}
