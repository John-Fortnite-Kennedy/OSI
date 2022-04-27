import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.page.html',
  styleUrls: ['./add-report.page.scss'],
})
export class AddReportPage implements OnInit {

  incomeOwners: number;
  incomeCommercial: number;
  incomeOther: number;
  outcomeSalary: number;
  outcomeMaterials: number;
  outcomeRepair: number;
  outcomeServices: number;
  outcomeOther: number;
  balance: number;

  constructor() { }

  ngOnInit() { }

}
