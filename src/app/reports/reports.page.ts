import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  reports = [
    { title: "Отчет по 13.03.2021" },
    { title: "Отчет по 12.03.2021" },
    { title: "Отчет по 11.03.2021" }
  ]

  constructor(private router: Router) { }

  ngOnInit() { }

  showReport() {
    this.router.navigate(['/report'])
  }

}
