import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryScale, Chart, Tooltip, PieController, ArcElement, Legend} from 'chart.js'; 
Chart.register( CategoryScale, Tooltip, PieController, ArcElement, Legend);

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(private modalController: ModalController) { }

  reports = [
    { title: "Отчет по 13.03.2021" },
    { title: "Отчет по 12.03.2021" },
    { title: "Отчет по 11.03.2021" }
  ]

  ngOnInit() { 
    const myChart = new Chart("pieChart", { 
      type: 'pie', 
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ]
        }]
      }
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
